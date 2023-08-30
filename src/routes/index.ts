import { Router } from "express";
import blogRoutes from './blogRoutes'

const router = Router();

router.use('/blog', blogRoutes)

export default router;