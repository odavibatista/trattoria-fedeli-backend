import { Category } from "./Category";
import { Dish } from "./Dish";
import { User } from "./User";

Category.hasMany(Dish, { as: 'dishes' })
Dish.belongsTo(Category)

User.belongsToMany(Dish, { through: 'user_command' } )
Dish.belongsToMany(User, { through: 'user_command' } )

export {
    Category,
    Dish,
    User
}