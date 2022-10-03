import { Sequelize } from "sequelize";
import dotenv from 'dotenv';



export default  new Sequelize('prueba-docker','root','3105060237',{
    host : process.env.DB_HOST,
    dialect : 'mysql'
});