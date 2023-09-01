import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { userService } from "../services/userService";
import { User } from "../models";

export const usersController    =   {
    show: async (request: AuthenticatedRequest, response: Response) =>  {
        try {
            const currentUser = request.user!
            return response.json(currentUser)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message })
            }
        }
    },

    update: async (request: AuthenticatedRequest, response: Response)   =>  {
        const { id } = request.user!
        const { firstName, lastName, email } = request.body

        try {
            const updatedUser = await userService.update(id, {
                firstName,
                lastName,
                email
            })

            return response.json(updatedUser)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message })
            }
        }
    },

    updatePassword: async (request: AuthenticatedRequest, response: Response)   =>  {
        const user = request.user!
        const { currentPassword, newPassword }  = request.body

        user.checkPassword(currentPassword, async (error, isSame)   =>  {
            try {
                if (error) return response.status(400).json({ message: error.message })
                if (!isSame) return response.status(400).json({ message: "Senha incorreta."})

                await userService.updatePassword(user.id, newPassword)
                return response.status(204).send()
            } catch (error) {
                if (error instanceof Error) {
                    return response.status(400).json({ message: error.message })
                }
            }
        })
    },
    
    delete: async (request: AuthenticatedRequest, response: Response)   =>  {
        const { id } = request.params

        try {
            await User.destroy({
                where: { id: id }
            })
    
            return response.status(204).send()
        } catch (err) {
            if (err instanceof Error) {
                return response.status(400).json({ message: err.message })
            }
        }
    }
}