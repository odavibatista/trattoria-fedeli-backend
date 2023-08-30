import { Category } from "../models";

export const categoryService =  {
    findAllPaginated: async (page: number, perPage: number) =>  {
        const offset = (page - 1) * perPage

        const { count, rows } = await Category.findAndCountAll({
            attributes: ['id', 'name', 'description', 'position'],
            order: [['position', 'ASC']],
            limit: perPage,
            offset
        })

        return  {
            categories: rows,
            page,
            perPage,
            total: count
        }
    },

    findByIdWithDishes: async (id: string)  =>  {
        const categoryWithDishes = await Category.findByPk(id, {
            attributes: ['id', 'name'],
            include: {
                association: 'dishes',
                attributes: [
                    'id', 
                    'name',
                    'details',
                    ['image_url', 'imageUrl'],
                    'vegetarian',
                    'price'
                ]
            }
        })

        return categoryWithDishes
    }
}