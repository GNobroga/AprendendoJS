import {funcionario} from "./models/Funcionario";
import {Op} from "sequelize"; // Para fazer operações

async function getAll(){
    try{
        const employees = await funcionario.findAll({
            attributes: ['id', 'cpf']
        });
        console.log(employees);
    }
    catch(error){
        console.log(error);
    }
}

getAll();

`

/////// FILTRAR

    const employees = await funcionario.findAll({
        attributes: ['id', 'cpf'] // Seleciona os atributos que eu quero.
    });

    const employees = await funcionario.findAll({
        where: {atributo: 'Valor'} // Filtra pelo nome
    });

    const employees = await funcionario.findAll({
        where: {
            [Op.or]: [
                {age: 55}
            ]
        } // Filtra pelo utilizando OR
    });

    const employees = await funcionario.findAll({
        where: {
            [Op.or]: [
                {age: 55},
                {age: 60}
            ]
        } // Filtra pelo utilizando OR
    });


    const employees = await funcionario.findAll({
        where: {
        age: [50, 60, 70]
        } // Filtra pelo utilizando OR
    });

    GT - Greather Then
    LT - Lower Than

    Op.gt - >
    Op.gte - >=
    Op.lt - <
    Op.lte - <=
    Op.between
    Op.notBetween
    Op.in
    Op.notIn
    Op.like

////// ORDENANDO RESULTADOS

    const employees = await funcionario.findAll({
        where: {
            age: {
                [op.gte]: 18
            }
        },
        order: ['coluna'] 
    });

    const employees = await funcionario.findAll({
        where: {
            age: {
                [op.gte]: 18
            }
        },
        order: [
            ['coluna', 'DESC']
        ] 
    });

//////// LIMITANDO RESULTADOS

    const employees = await funcionario.findAll({

        where: {
            age: {
                [op.gte]: 18
            }
        },
        offset: 2, // Pula dois
        limit: 2
    });

//////// INSERINDO DADOS COM SEQUELIZE

    // build + save 

        const employees = funcionario.build({
            coluna: value,
            coluna: value
        }); // Cria uma instancia do funcionario

        await employees.save(); // Para salvar no banco de dados.

    // create

        const employees = await funcionario.create({
            coluna: value,
            coluna: value
        });

///// ATUALIZANDO DADOS

        await  funcionario.update({age: 18}, { 
                age: {
                    [Op.lt]: 18
                }
            }
        });

        1. Dados a serem alterados
        2. Condição para encontrar os itens
        

        const employees = funcionario.findAll({
            where: {cpf: '17364509720'}
        });

        if(employees.length > 0){
            const employee = employees[0];
            employee.cpf = "54545544";
            await employee.save();
        }

///// DELETANDO DADOS COM SEQUELIZE

        await funcionario.destroy({
            where: {
                age: {
                    {Op.gt}: 18    
                }
            }
        });

        DELETE FROM  table WHERE age > 18

        const employees = funcionario.findAll({
            where: {cpf: '17364509720'}
        });

        if(employees.length > 0){
            const employee = employees[0];
            employee.cpf = "54545544";
            employee.destroy();
        }

////////// MÉTODOS FINDER

        5 - FORMAS DE PROCURAR UM REGISTRO

        let employee = await funcionario.findOne({
            where: {
                id: 2
            }
        }); // Retorna o Usuário, retorna null se não achar.

        let employee = await funcionario.findByPk(value) // Retorna o Usuário, retorna null se não achar.


        const [usuario, created] = await User.findOrCreate({
            where: {
                name: 'Gabriel'
            },
            defaults: {
                name: 'Gabriel',
                idade: 21
            }
        }); // Se achar retorna o usuário e se não achar cria com as configurações padrões.

`;