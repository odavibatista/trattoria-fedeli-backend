import { Op } from "sequelize";
import { Dish } from "../models";

export const dishService    =   {
    findById: async (id: string)  =>  {
        const dish = await Dish.findByPk(id, {
            attributes: [
                'id',
                'name',
                'details',
                'vegetarian',
                'price',
                ['image_url', 'imageUrl']
            ]
        })

        return dish
    },

    getVegetarianDishes: async ()   =>  {
        const vegetarianDishes = await Dish.findAll({
            attributes: [
                'id',
                'name',
                'details',
                'vegetarian',
                'price',
                ['image_url', 'imageUrl']
            ],
            where:  {
                vegetarian: true
            }
        })
    },

    getTopTenNewest: async ()   =>  {
        const dishes = await Dish.findAll({
            limit: 10,
            order: [['created_at', 'DESC']]
        })

        return dishes
    },

    findByName: async (name: string, page: number, perPage: number) => {
        const offset = (page - 1) * perPage

        const { count, rows } = await Dish.findAndCountAll({
            attributes: [
                'id',
                'name',
                'details',
                ['image_url', 'imageUrl']
            ],
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            limit: perPage,
            offset
        })

        return {
            dishes: rows,
            page,
            perPage,
            total: count
        }
    }

}