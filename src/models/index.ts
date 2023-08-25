import { Category } from "./Category";
import { Dish } from "./Dish";
import { User } from "./User";

Category.hasMany(Dish, { as: 'dishes' })

Dish.belongsTo(Category)

export {
    Category,
    Dish,
    User
}