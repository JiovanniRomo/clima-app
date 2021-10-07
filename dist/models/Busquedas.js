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
            access_token: process.env.MAPBOX_KEY,
            limit: 5,
            language: "es",
        };
    }
    get paramsWeather() {
        return {
            appid: process.env.OPEN_WEATHER,
            units: "metric",
            lang: "es",
        };
    }
    ciudad(lugar) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const instance = axios_1.default.create({
                    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                    params: this.paramsMapbox,
                });
                const resp = yield instance.get();
                return resp.data.features.map((lugar) => ({
                    id: lugar.id,
                    nombre: lugar.place_name,
                    lng: lugar.center[0],
                    lat: lugar.center[1],
                }));
            }
            catch (error) {
                return [];
            }
        });
    }
    climaPorLugar(lat, lon) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const instance = axios_1.default.create({
                    baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                    params: Object.assign({ lat, lon }, this.paramsWeather),
                });
                const resp = yield instance.get();
                const { weather, main } = resp.data;
                return {
                    desc: weather[0].description,
                    min: main.temp_min,
                    max: main.temp_max,
                    temp: main.temp,
                };
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    agregarHistorial(lugar) {
    }
}
exports.default = Busquedas;
//# sourceMappingURL=Busquedas.js.map