import express from 'express'
import { authController } from './controllers/authController'
import { ensureAuth } from './middlewares/auth'
import { categoriesController } from './controllers/categoriesController'
import { dishesController } from './controllers/dishesController'
import { usersController } from './controllers/usersController'
import { commandsController } from './controllers/commandsController'

export const router = express.Router()

/*Authentication routes*/

router.post('/auth/register', authController.register) /* Register a new user on system */
router.post('/auth/login', authController.login) /* Login with valid credentials on system */

/*Categories routes*/
router.get('/categories', ensureAuth, categoriesController.index) /* Get all dish categories */
router.get('/categories/:id', ensureAuth, categoriesController.show) /* Search for a specific category */

/*Dishes routes*/
router.get('/dishes', ensureAuth, dishesController.index) /* Find all dishes */
router.get('/dishes/vegs', ensureAuth, dishesController.vegetarians) /* Find all the vegetarian dishes */
router.get('/dishes/not-vegs', ensureAuth, dishesController.notVegetarians) /* Find all the dishes that are not vegetarian */
router.get('/dish/search', ensureAuth, dishesController.search) /* Serach for a dish through name or description */
router.get('/dishes/:id', ensureAuth, dishesController.show) /* Find a dish by its id */
router.post('/dishes', ensureAuth, dishesController.save) /* Register a new dish on the system */
router.put('/dishes/:id', ensureAuth, dishesController.update) /* Change a dish's informations */
router.delete('/dishes/:id', ensureAuth, dishesController.delete) /* Remove a dish from the system */


/*User routes*/
router.get('/users/current', ensureAuth, usersController.show) /* See the current user's data */
router.get('/users/:id', ensureAuth, usersController.findUser) /* Find an user's data */
router.put('/users/current', ensureAuth, usersController.update) /* Update the current user's data */
router.put('/users/current/password', ensureAuth, usersController.updatePassword) /* Update the current user's password */
router.delete('/users/:id', ensureAuth, usersController.delete) /* Delete an user from the database */

/* User Command routes */
router.get('/commands', ensureAuth, commandsController.index)
router.get('/command', ensureAuth, commandsController.show)
router.post('/commands', ensureAuth, commandsController.save)
router.delete('/commands/:id', ensureAuth, commandsController.delete)