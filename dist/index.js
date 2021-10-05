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
const inquirer_1 = require("./helpers/inquirer");
const Busquedas_1 = __importDefault(require("./models/Busquedas"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.clear();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let opt;
    const busquedas = new Busquedas_1.default();
    do {
        opt = yield (0, inquirer_1.inquirerMenu)();
        switch (opt) {
            case 1:
                console.log('buscar');
                const busqueda = yield (0, inquirer_1.leerInput)('Introduce una ciudad');
                const lugares = yield busquedas.ciudad(busqueda);
                const id = yield (0, inquirer_1.listarLugares)(lugares);
                const lugarSel = lugares.find(lugar => lugar.id === id);
                console.log({ id });
                console.log(lugarSel);
                console.log('\ninfo del lugar\n'.green);
                console.log('Ciudad:', lugarSel === null || lugarSel === void 0 ? void 0 : lugarSel.nombre);
                console.log('Lt:', lugarSel === null || lugarSel === void 0 ? void 0 : lugarSel.lat);
                console.log('Lg:', lugarSel === null || lugarSel === void 0 ? void 0 : lugarSel.lng);
                console.log('Temperatura min:');
                console.log('Temperatura max:');
                break;
            case 2:
                console.log('historial');
                break;
        }
        if (opt !== 0)
            yield (0, inquirer_1.pausa)();
    } while (opt !== 0);
});
main();
//# sourceMappingURL=index.js.map