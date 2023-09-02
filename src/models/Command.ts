import { DataTypes, Optional, Model } from "sequelize"
import { sequelize } from "../database"

export interface Command {
    id: number
    userId: number
}

export interface CommandCreationAttributes extends Optional<Command, 'id'> { }

export interface CommandInstance extends Model<Command, CommandCreationAttributes>, Command { }

export const Command = sequelize.define<CommandInstance, Command>('Command', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    }
})