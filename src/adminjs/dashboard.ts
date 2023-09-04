import AdminJs, { PageHandler } from 'adminjs'
/* Below, you can import your models for its showings on the page */
import { Dish, Category, User, Command } from '../models'

export const dashboardOptions: {
    handler?: PageHandler
    component?: string
} = {
    handler: async (requisition, response, context) => {
        /* Handler templates: */
        const categories = await Category.count()
        const dishes = await Dish.count()
        const users = await User.count({ where: { role: 'user' } })
        const commands = await Command.count()

        response.json({
            /* Response template: */
            'Categorias' : categories,
            'Pratos' : dishes,
            'Usuários' : users,
            'Comanda': commands
        })
    }
}
