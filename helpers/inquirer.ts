import inquirer, { QuestionCollection } from 'inquirer';
import colors from "colors";

const menuOpts: QuestionCollection = [
    {
        type: "list",
        name: "opcion",
        message: "Que desea hacer?",
        choices: [
            {
                value: 1,
                name: `${"1".green}. Buscar Ciudad`,
            },
            {
                value: 2,
                name: `${"2".green}. Historial`,
            },
            {
                value: 0,
                name: `${"3".green}. Salir`,
            },
        ],
    },
];

export const inquirerMenu = async () => {
    console.clear();

    console.log("====================".green);
    console.log("Seleccione una opcion".white);
    console.log("====================\n".green);

    const { opcion } = await inquirer.prompt(menuOpts);

    return opcion;
};

export const pausa = async () => {
    const menuInputPause: QuestionCollection = [
        {
            type: "input",
            name: "enter",
            message: `Presione ${colors.green("ENTER")} para continuar!`,
        },
    ];

    console.log("\n");
    await inquirer.prompt(menuInputPause);
};

export const leerInput = async (message: string) => {
    const question: QuestionCollection = [
        {
            type: "input",
            name: "desc",
            message,
            validate(value: string) {
                if (value.length === 0) {
                    return "Por favor ingrese un valor";
                }
                return true;
            },
        },
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
};

// export const listadoTareasBorrar = async (tareas: Tarea[]) => {
//     let choices = tareas.map((tarea, i) => {
//         const index = `${i + 1}`.green;

//         return {
//             value: tarea.id,
//             name: `${index} ${tarea.desc}`,
//         };
//     });

//     const salirMenu = {
//         value: "0",
//         name: "0.".green + " Cancelar",
//     };

//     choices = [salirMenu, ...choices];

//     const preguntas: QuestionCollection = [
//         {
//             type: "list",
//             name: "id",
//             message: "Borrar",
//             choices,
//         },
//     ];

//     const { id } = await inquirer.prompt(preguntas);

//     return id;
// };

// export const confirmar = async (message: string) => {
//     const question: QuestionCollection = [
//         {
//             type: "confirm",
//             name: "ok",
//             message,
//         },
//     ];

//     const { ok } = await inquirer.prompt(question);
//     return ok;
// };

// export const mostrarListadoCheckList = async (tareas: Tarea[]) => {
//     const choices = tareas.map((tarea, i) => {
//         const idx = `${i + 1}.`.green;

//         return {
//             value: tarea.id,
//             name: `${idx} ${tarea.desc}`,
//             checked: tarea.completadoEn ? true : false,
//         };
//     });

//     const pregunta: QuestionCollection = [
//         {
//             type: "checkbox",
//             name: "ids",
//             message: "Selecciones",
//             choices,
//         },
//     ];

//     const { ids } = await inquirer.prompt(pregunta);
//     return ids;
// };

// module.exports = {
//     inquirerMenu,
// };
