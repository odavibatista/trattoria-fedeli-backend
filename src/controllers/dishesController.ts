import { Request, Response } from "express";
import { dishService } from "../services/dishService";
import { getPaginationParams } from "../helpers/getPaginationParams";
import { AuthenticatedRequest } from "../middlewares/auth";
import { Dish } from "../models";
import { sequelize } from "../database";

export const dishesController = {
    index: async (request: AuthenticatedRequest, response: Response) =>  {
        try {
            const paginatedDishes = await Dish.findAll()

            return response.json(paginatedDishes)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message })
            }
        }
    },

    save: async (request: Request, response: Response)  =>  {
        const { name, details, vegetarian, price, imageUrl, categoryId } = request.body
        try {
            const dish = await Dish.create({
                name,
                details,
                vegetarian,
                price,
                imageUrl,
                categoryId
            })

            return response.status(201).json(dish)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({message: error.message})
            }
        }
    },

    update: async (request: Request, response: Response)    =>  {
        const { id } = request.params
        const { name, details, vegetarian, price, imageUrl, categoryId } = request.body

        try {
            const [affectedRows, dishes] = await Dish.update({
                name,
                details,
                vegetarian,
                price,
                imageUrl,
                categoryId
            },  
            
            {
                where: { id },
                returning: true
            })

            return response.json(dishes[0])
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message })
            }
        }
    },

    delete: async (request: Request, response: Response)    =>  {
        const { id } = request.params

        try {
            await Dish.destroy({
                where: { id: id }
            })

            return response.status(204).send()
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message })
            }
        }
    },

    /* This function triggers in two different ways: If the dish name cannot be found, it will try searching by its description, based on the other service's function */
    search: async (req: Request, res: Response) => {
        const { name } = req.query
        const [ page, perPage ] = getPaginationParams(req.query)
    
        try {
            if (typeof name !== 'string') throw new Error('Nome deve ser uma string');
            let dishes = await dishService.findByName(name, page, perPage)
            if (dishes.dishes.length === 0) dishes = await dishService.findByDescription(name, page, perPage)
            return res.json(dishes)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    show: async (request: AuthenticatedRequest, response: Response) =>  {
        const dishId = request.params.id

        try {
            const dish = await dishService.findById(dishId)

            if (!dish) return response.status(404).json({message: 'Prato não encontrado'})

            return response.json({...dish.get()})
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({message: error.message})
            }
        }
    },

    vegetarians: async (request: Request, response: Response)   =>  {
        try {
            const vegetarianDishes = await dishService.getVegetarianDishes()
            return response.json(vegetarianDishes)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message })
            }
        }
    },

    notVegetarians: async (request: Request, response: Response)    =>  {
        try {
            const notVegetarianDishes = await dishService.getNotVegetarianDishes()
            return response.json(notVegetarianDishes)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message })
            }
        }
    }
}