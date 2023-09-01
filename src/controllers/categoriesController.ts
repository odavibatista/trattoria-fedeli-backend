import { Request, Response } from "express";
import { getPaginationParams } from "../helpers/getPaginationParams";
import { categoryService } from "../services/categoryService";
import { Category } from "../models";

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
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            await Category.destroy({
                where: { id: id }
            })
    
            return res.status(204).send()
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    }
}