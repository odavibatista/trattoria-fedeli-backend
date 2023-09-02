import { Command } from "../models"

export const commandService = {
    findUserById: async (userId: number)    =>  {
        const commandDishes = await Command.findAll({
            attributes: [['user_id', 'userId']],
            where: { userId },
            include:    {
                association: 'Dish',
                attributes: [
                    'id',
                    'name',
                    'details',
                    'vegetarian',
                    'price',
                    ['image_url', 'imageUrl']
                ]
            }
        })

        return  {
            userId,
            dishes: commandDishes.map(dish  =>  dish.Dish)
        }
    },

    create: async (userId: number, dishId: number, amount: number)    =>  {
        const dish = Command.create({
            userId,
            dishId,
            amount
        })

        return dish
    },

    delete: async (userId: number, dishId: number) => {
        await Command.destroy({
            where: {
                userId,
                dishId
            }
        })
    },
}