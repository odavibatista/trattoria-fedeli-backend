import { Request, Response } from "express";
import { userService } from "../services/userService"
import { jwtService } from "../services/jwtService";

export const authController = {
    register: async (request: Request, response: Response) => {
        const { firstName, lastName, email, password } = request.body
    
        try {
            const userAlreadyExists = await userService.findByEmail(email)
        
            if (userAlreadyExists) {
                throw new Error('Este e-mail já está cadastrado.')
            }
        
            const user = await userService.create({
                firstName,
                lastName,
                email,
                password,
                role: 'user'
            })
        
            return response.status(201).json({user, message:"Registro bem sucedido!"})
        } catch (err) {
            if (err instanceof Error) {
                return response.status(400).json({ message: err.message })
            }
        }
    },

    login: async (request: Request, response: Response) =>  {
        const { email, password } = request.body

        try {
            const user = await userService.findByEmail(email)

            if  (!user) return response.status(404).json({message: 'E-mail não cadastrado.'})

            user.checkPassword(password, (error, isSame)    =>  {
                if (error) return response.status(400).json({ message: error.message })
                if (!isSame) return response.status(401).json({ message: 'Senha inválida.'})

                const payload = {
                    id: user.id,
                    firstName: user.firstName,
                    email: user.email
                }

                const token = jwtService.signToken(payload, '7d')
                
                return response.json({authenticated: true, ...payload, token})
            })
            
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message })
            }
        }
    }
}