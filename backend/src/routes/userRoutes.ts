import { Router } from 'express'
import { index } from '../controllers/userController'

const router = Router()
router.get('/', index)

export default router