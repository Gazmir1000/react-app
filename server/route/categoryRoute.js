import express from 'express';
import { getCategorys, addCategory } from '../controller/studentCategory-controller';

const router = express.Router();

router.get('/categories', getCategorys);
router.post('/add/category', addCategory);


export default router;

