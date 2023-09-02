import { DataTypes, Optional, Model, BelongsToManyCountAssociationsMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin } from "sequelize"
import { sequelize } from "../database"
import { DishInstance } from "./Dish"
import { UserInstance } from "./User"

export interface Command {
    id: number
    userId: number
    dishId: number
    amount: number
}

export interface CommandCreationAttributes extends Optional<Command, 'id'> { }

export interface CommandInstance extends Model<Command, CommandCreationAttributes>, Command {
    Dish?: DishInstance
    User?: UserInstance
}

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
    },
    dishId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references:  { model: 'dishes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    amount: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
})