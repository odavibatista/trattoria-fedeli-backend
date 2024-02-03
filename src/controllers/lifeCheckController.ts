import { Request, Response } from "express"

export const lifeCheckController = {
    check: async (request: Request, response: Response) => {
        try {
            return response.status(200).json({message: 'OK!'})
        } catch (error) {
            return response.status(500).json({message: 'NO RESPONSE!'})
        }
    }
}