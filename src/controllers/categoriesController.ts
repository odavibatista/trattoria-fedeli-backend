import { Request, Response } from "express";
import { getPaginationParams } from "../helpers/getPaginationParams";
import { categoryService } from "../services/categoryService";

export const categoriesController   =   {
    index: async (request: Request, response: Response) =>  {
        const [page, perPage] = getPaginationParams(request.query)

        try {
            const paginatedCategories = await categoryService.findAllPaginated(page, perPage)

            return response.json(paginatedCategories)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message })
            }
        }
    },

    show: async (request: Request, response: Response) =>   {
        const { id } = request.params

        try {
            const category = await categoryService.findByIdWithDishes(id)
            return response.json(category)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).json({ message: error.message })
            }
        }
    }
}