import {Model, DataTypes} from "sequelize";
import { sequelize } from "instances/psql";

interface Nome implements Model {
    id: number,
    name: string,
    age: number
}
// Ensinando o Sequelize
export const modelName = sequelize.define<Nome>("modelName", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    }
},  {
    tableName: "nomeDaTabela",
    timestamps: false
});
