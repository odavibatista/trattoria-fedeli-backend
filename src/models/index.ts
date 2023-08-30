import { Category } from "./Category";
import { Dish } from "./Dish";
import { User } from "./User";

Category.hasMany(Dish, { as: 'dishes' })

Dish.belongsTo(Category)

Dish.belongsToMany(User, { through: 'user_command' })
User.belongsToMany(User, { through: 'user_command' })

export {
    Category,
    Dish,
    User
}