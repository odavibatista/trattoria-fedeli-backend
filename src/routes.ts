import express from 'express'
import { authController } from './controllers/authController'
import { ensureAuth } from './middlewares/auth'
import { categoriesController } from './controllers/categoriesController'
import { dishesController } from './controllers/dishesController'
import { usersController } from './controllers/usersController'

export const router = express.Router()

/*Authentication routes*/

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

/*Categories routes*/

router.get('/categories', ensureAuth, categoriesController.index)
router.get('/categories/:id', ensureAuth, categoriesController.show)

/*Dishes routes*/
router.get('/dishes/:id', ensureAuth, dishesController.show)
router.get('/dishes/search', ensureAuth, dishesController.search)
router.get('/dishes/vegetarians', ensureAuth, dishesController.vegetarians)

/*User routes*/
router.get('/users/current', ensureAuth, usersController.show)
router.put('/users/current', ensureAuth, usersController.update)
router.put('/users/current/password', ensureAuth, usersController.updatePassword)