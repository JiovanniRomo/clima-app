"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarLugares = exports.leerInput = exports.pausa = exports.inquirerMenu = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const colors_1 = __importDefault(require("colors"));
const menuOpts = [
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
const inquirerMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    console.log("====================".green);
    console.log("Seleccione una opcion".white);
    console.log("====================\n".green);
    const { opcion } = yield inquirer_1.default.prompt(menuOpts);
    return opcion;
});
exports.inquirerMenu = inquirerMenu;
const pausa = () => __awaiter(void 0, void 0, void 0, function* () {
    const menuInputPause = [
        {
            type: "input",
            name: "enter",
            message: `Presione ${colors_1.default.green("ENTER")} para continuar!`,
        },
    ];
    console.log("\n");
    yield inquirer_1.default.prompt(menuInputPause);
});
exports.pausa = pausa;
const leerInput = (message) => __awaiter(void 0, void 0, void 0, function* () {
    const question = [
        {
            type: "input",
            name: "desc",
            message,
            validate(value) {
                if (value.length === 0) {
                    return "Por favor ingrese un valor";
                }
                return true;
            },
        },
    ];
    const { desc } = yield inquirer_1.default.prompt(question);
    return desc;
});
exports.leerInput = leerInput;
const listarLugares = (lugares) => __awaiter(void 0, void 0, void 0, function* () {
    let choices = lugares.map((lugar, i) => {
        const index = `${i + 1}`.green;
        return {
            value: lugar.id,
            name: `${index} ${lugar.nombre}`,
        };
    });
    const salirMenu = {
        value: '0',
        name: "0.".green + " Cancelar",
    };
    choices = [salirMenu, ...choices];
    const preguntas = [
        {
            type: "list",
            name: "id",
            message: "Seleccione un lugar",
            choices,
        },
    ];
    const { id } = yield inquirer_1.default.prompt(preguntas);
    return id;
});
exports.listarLugares = listarLugares;
//# sourceMappingURL=inquirer.js.map