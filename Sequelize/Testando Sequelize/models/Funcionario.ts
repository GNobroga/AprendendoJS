import {Model, DataTypes} from "sequelize";
import {sequelize} from "../instances/pgsql";

interface Funcionario extends Model {
    id: number,
    nome: string,
    cpf: string
};

export const funcionario = sequelize.define<Funcionario>("Funcionario", 
    {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        nome: {
            allowNull: false,
            type: DataTypes.STRING
        },
        cpf: {
            allowNull: false,
            type: DataTypes.STRING
        }
    },
    {
        tableName: "funcionario",
        timestamps: false
    } 
);


// timestramps sem ser false vai assumir que existe dos campos chamados createdAt - Salva a data que foi criado o registro e updatedAt no banco de dados.

`

    GETTER e SETTER para fazer validações 

    Exemplo:

        nome: {
            allowNull: false,
            type: DataTypes.STRING,
            get(){
                const raw = this.getDataValue('coluna');
                return raw.toUpperCase();
            },
            set(value) {
                this.setDataValue('coluna', valor);
            }
        }

///////////// CAMPUS VIRTUAIS

        É uma coluna falsa que não existe no banco de dados,
        serve como auxiliar.

        nomeDaColunaFalsa: {
            type: DataTypes.VIRTUAL,
            get(){
                let name = this.getDataValue('coluna');
                return name[0];
            }
        }

`;