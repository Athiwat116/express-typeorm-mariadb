import express from 'express';
import CategoryRoute from './CategoryRoute';

const AppRoute = express.Router();

AppRoute.get("/", (req, res) => {
    return res.status(200).json({message: "Hello!"});
})

AppRoute.use("/category", CategoryRoute)

AppRoute.get("*", (req, res) => {
    return res.status(404).json({message: "Page not found!"});
});

export default AppRoute;