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
console.clear();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let opt;
    const busquedas = new Busquedas_1.default();
    do {
        opt = yield (0, inquirer_1.inquirerMenu)();
        switch (opt) {
            case 1:
                console.log('buscar');
                const lugar = yield (0, inquirer_1.leerInput)('Introduce una ciudad');
                yield busquedas.ciudad(lugar);
                console.log('\ninfo del lugar\n'.green);
                console.log('Ciudad:');
                console.log('Lt:');
                console.log('Lg:');
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