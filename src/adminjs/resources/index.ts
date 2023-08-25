import { ResourceWithOptions } from 'adminjs'
import { Category, Dish, User } from '../../models'
import { categoryResourceOptions } from './category'
import { DishResourceFeatures, dishResourceOptions } from './dish'
import { userResourceOptions } from './user'

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOptions
    },
    {
        resource: Dish,
        options: dishResourceOptions,
        features: DishResourceFeatures
    },
    {
        resource: User,
        options: userResourceOptions
    }
]