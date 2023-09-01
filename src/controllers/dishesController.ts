import { Request, Response } from "express";
import { dishService } from "../services/dishService";
import { getPaginationParams } from "../helpers/getPaginationParams";
import { AuthenticatedRequest } from "../middlewares/auth";
import { Dish } from "../models";

export const dishesController = {
    index: async (request: Request, response: Response) =>  {
        const [page, perPage] = getPaginationParams(request.query)
        
        try {
            const paginatedDishes = await dishService.findAllPaginated(page, perPage)

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

    search: async (request: Request, response: Response)    =>  {
        const { name } = request.query
        const [ page, perPage ] = getPaginationParams(request.query)

        try {

            if (typeof name !== 'string') throw new Error('O nome deve ser uma string.')
            const dishes = await dishService.findByName(name, page, perPage)
            return response.json(dishes)

        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message })
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
    }
}