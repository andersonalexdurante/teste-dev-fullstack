import { Router } from 'express'

import UserController from './controllers/UserController'
import AuthController from './controllers/AuthController'

const router = Router()

router.post('/users', UserController.store)
router.post('/auth', AuthController.authenticate)

export default router