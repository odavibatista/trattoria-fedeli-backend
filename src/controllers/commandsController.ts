import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { commandService } from "../services/commandService";

export const commandsController = {
    index: async    (request: AuthenticatedRequest, response: Response) =>  {
        const userId = request.user!.id

        try {
            const command = await commandService.findUserById(userId)
            return response.json([command])
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message })
            }
        }
    },

    save: async (request: AuthenticatedRequest, response: Response) =>  {
        const userId = request.user!.id
        const { dishId, amount } = request.body

        try {
            const command = await commandService.create(userId, Number(dishId), amount)
            return response.status(201).json(command)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message })
            }
        }
    },

    delete: async (request: AuthenticatedRequest, response: Response)   =>  {
        const userId = request.user!.id
        const dishId = request.params.id

        try {
            await commandService.delete(userId, Number(dishId))
            return response.status(204).send()
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message })
            }
        }
    }
}