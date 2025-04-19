import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const note = db.define('note',{
    judul: Sequelize.STRING,
    isi: Sequelize.STRING},
    {
        freezeTableName:true,
        createdAt: 'tanggal_dibuat',
        updatedAt: 'tanggal_diupdate'
    }
);

export default note;

(async()=>{await db.sync();})();