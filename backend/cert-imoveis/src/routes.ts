import { Router } from 'express'

import UserController from './controllers/UserController'
import AuthController from './controllers/AuthController'
import PropertyController from './controllers/PropertyController'
import AuthMiddleware from './middlewares/AuthMiddleware'

const router = Router()

router.post('/users', UserController.store)
router.post('/auth', AuthController.authenticate)

router.post('/property', AuthMiddleware, PropertyController.store)

export default router