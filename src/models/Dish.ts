import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../database'

export interface Dish {
    id: number
    name: string
    details: string
    imageUrl: string
    vegetarian: boolean
    price: number
    categoryId: number
}

export interface DishCreationAttributes extends Optional<Dish, 'id' | 'imageUrl' > { }

export interface DishInstance extends Model<Dish, DishCreationAttributes>, Dish { }

export const Dish = sequelize.define<DishInstance, Dish>('Dish', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    details: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    imageUrl: {
        type: DataTypes.STRING,
    },
    vegetarian: {
        defaultValue: false,
        type: DataTypes.BOOLEAN
    },
    price: {
        allowNull: false,
        type: DataTypes.FLOAT
    },
    categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    }
})