
import express from 'express';
import { CategoryGetAll } from '../controllers/CategoryController';

const CategoryRoute = express.Router();

//CRUD

//CategoryRoute.post("/create")
CategoryRoute.get("/getall", CategoryGetAll)
//CategoryRoute.get("/getbyid")
//CategoryRoute.put("/updatebyid")
//CategoryRoute.delete("/deletebyid")

export default CategoryRoute