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
router.get('/dishes', ensureAuth, dishesController.index)
router.get('/dishes/vegs', ensureAuth, dishesController.vegetarians)
router.get('/dishes/not-vegs', ensureAuth, dishesController.notVegetarians)
router.get('/dish/search', ensureAuth, dishesController.search)
router.get('/dishes/:id', ensureAuth, dishesController.show)
router.post('/dishes', ensureAuth, dishesController.save)
router.put('/dishes/:id', ensureAuth, dishesController.update)
router.delete('/dishes/:id', ensureAuth, dishesController.delete)


/*User routes*/
router.get('/users/current', ensureAuth, usersController.show)
router.get('/users/:id', ensureAuth, usersController.findUser)
router.put('/users/current', ensureAuth, usersController.update)
router.put('/users/current/password', ensureAuth, usersController.updatePassword)
router.delete('/users/:id', ensureAuth, usersController.delete)