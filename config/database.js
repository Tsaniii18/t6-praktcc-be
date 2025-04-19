import { Sequelize } from "sequelize";

const db = new Sequelize('notes','admin','tsani115',{
    host: '34.29.128.0',
    dialect : 'mysql'
})

export default db;