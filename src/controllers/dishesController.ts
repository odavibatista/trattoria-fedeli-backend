import { Request, Response } from "express";
import { dishService } from "../services/dishService";
import { getPaginationParams } from "../helpers/getPaginationParams";
import { AuthenticatedRequest } from "../middlewares/auth";

export const dishesController = {
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
        const userId = request.user!.id
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