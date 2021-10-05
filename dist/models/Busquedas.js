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
const axios_1 = __importDefault(require("axios"));
class Busquedas {
    constructor() {
        this.historial = [];
    }
    get paramsMapbox() {
        return {
            'access_token': 'pk.eyJ1IjoiamlvdmFubmlydHNzZiIsImEiOiJja3VkY3JhMDgxOWgxMnZtbmE2c3U3ZmtsIn0.u6QHbyvQETtfYFjQhs3AKw',
            'limit': 5,
            'language': 'es'
        };
    }
    ciudad(lugar) {
        return __awaiter(this, void 0, void 0, function* () {
            const instance = axios_1.default.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });
            const respuesta = yield instance.get();
            console.log(respuesta.data);
            return [];
        });
    }
}
exports.default = Busquedas;
//# sourceMappingURL=Busquedas.js.map