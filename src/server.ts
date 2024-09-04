import express from "express"
import "dotenv/config"
import AppRoute from "./routes/AppRoute"
import { AppDataSource } from "./datasource/ds"


const app = express()

app.use(express.json())

const host = String(process.env.HOST)
const port = Number(process.env.PORT)

AppDataSource.initialize().then(() => {
    app.use(AppRoute)
    app.listen(port, host, () => {
        console.log(`Server is running at http://${host}:${port}`)
    });
}).catch((err) => { 
    console.log(err);
});