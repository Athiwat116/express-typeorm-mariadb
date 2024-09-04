import { AppDataSource } from "../datasource/ds";
import { Category } from "../entities/Category";

const categoryRepository = AppDataSource.getRepository(Category)

const CategoryCreate = async (req,res) => {
    try{

    } catch (error) {
        return res.status(404).json({ message: error });
    }
}

const CategoryGetAll = async (req,res) => {
    try{
        const categories = await categoryRepository.find()
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(404).json({ message: error });
    }
}

const CategoryGetById = async (req,res) => {
    try{

    } catch (error) {
        return res.status(404).json({ message: error });
    }
}

const CategoryUpdateById = async (req,res) => {
    try{

    } catch (error) {
        return res.status(404).json({ message: error });
    }
}

const CategoryDaleteById = async (req,res) => {
    try{

    } catch (error) {
        return res.status(404).json({ message: error });
    }
}

export { CategoryCreate, CategoryGetAll, CategoryGetById, CategoryUpdateById, CategoryDaleteById}