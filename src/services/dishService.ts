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

        return vegetarianDishes
    },

    getNotVegetarianDishes: async ()   =>  {
        const notVegetarianDishes = await Dish.findAll({
            attributes: [
                'id',
                'name',
                'details',
                'vegetarian',
                'price',
                ['image_url', 'imageUrl']
            ],
            where:  {
                vegetarian: false
            }
        })

        return notVegetarianDishes
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
                'vegetarian',
                'price',
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
    },

    findByDescription: async (details: string, page: number, perPage: number) => {
        const offset = (page - 1) * perPage

        const { count, rows } = await Dish.findAndCountAll({
            attributes: [
                'id',
                'name',
                'details',
                'vegetarian',
                'price',
                ['image_url', 'imageUrl']
            ],
            where: {
                details: {
                    [Op.iLike]: `%${details}%`
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