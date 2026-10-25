
import { DataTypes } from "sequelize";
import db from "../config/database.js";

const User = db.define(
    "User",
    {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: "user",
        freezeTableName: true
    }
);

export default User;
