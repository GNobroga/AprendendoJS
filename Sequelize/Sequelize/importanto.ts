import {sequelize} from "../Sequelize/exportando";

await sequelize.authenticate(); // Verifica se a conexação foi estabelecida.
