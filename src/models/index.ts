import { Category } from "./Category";
import { Dish } from "./Dish";
import { User } from "./User";
import { Command } from "./Command";

Category.hasMany(Dish, { as: 'dishes' })
Dish.belongsTo(Category)

User.belongsToMany(Dish, { through: 'user_command' } )
Dish.belongsToMany(User, { through: 'user_command' } )

User.hasOne(Command)
Command.belongsTo(User, { as: 'command' })

export {
    Category,
    Command,
    Dish,
    User
}