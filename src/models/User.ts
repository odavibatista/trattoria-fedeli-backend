import { BelongsToManyAddAssociationMixin, BelongsToManyAddAssociationsMixin, BelongsToManyCountAssociationsMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyRemoveAssociationsMixin, DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"
import bcrypt from 'bcrypt'
import { DishInstance } from "./Dish"

type CheckPasswordCallback = (err?: Error, isSame?: boolean) => void

export interface User {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: 'admin' | 'user'
}

export interface UserCreationAttributes extends Optional<User, 'id'> { }

export interface UserInstance extends Model<User, UserCreationAttributes>, User {
    addDish: BelongsToManyAddAssociationMixin<DishInstance, number>,
    addDishes: BelongsToManyAddAssociationsMixin<DishInstance, number>,
    checkPassword: (password: string, callbackfn: CheckPasswordCallback) => void,
    countDishes: BelongsToManyCountAssociationsMixin,
    getDishes: BelongsToManyGetAssociationsMixin<DishInstance>,
    hasDishes: BelongsToManyHasAssociationMixin<DishInstance, number>
    removeDish: BelongsToManyRemoveAssociationMixin<DishInstance, number>
    removeDishes: BelongsToManyRemoveAssociationsMixin<DishInstance, number>
}

export const User = sequelize.define<UserInstance, User>('User', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    firstName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    role: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            isIn: [['admin', 'user']]
        }
    }
}, {
    hooks: {
        beforeSave: async (user) => {
            if (user.isNewRecord || user.changed('password')) {
                user.password = await bcrypt.hash(user.password.toString(), 10)
            }
        }
    }
})

User.prototype.checkPassword = function (password: string, callbackfn: CheckPasswordCallback) {
    bcrypt.compare(password, this.password, (err, isSame) => {
        if (err) {
            callbackfn(err)
        } else {
            callbackfn(err, isSame)
        }
    })
}