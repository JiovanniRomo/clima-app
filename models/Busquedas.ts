import axios from "axios";
import { ReqResponse } from "../types/geocoding-peticion";
import { ResqResponseWeaher } from "../types/OpenWeather-types";
class Busquedas {
    public historial: string[];

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

    constructor() {
        // TODO: Leer DB si existe
        this.historial = [];
    }

    async ciudad(lugar: string) {
        //Peticion HTTP
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox,
            });
            const resp = await instance.get<ReqResponse>();

            return resp.data.features.map((lugar) => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }));
        } catch (error) {
            return [];
        }
    }

    async climaPorLugar(lat: number, lon: number) {
        try {
            // Axios instance
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: { lat, lon, ...this.paramsWeather },
            });

            const resp = await instance.get<ResqResponseWeaher>();

            // response - extract the data
            const { weather, main } = resp.data;

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp,
            };

            // Llamar en index.ts en la seccion 'clima'
        } catch (error) {
            console.log(error);
        }
    }

    agregarHistorial(lugar: string) {
        // TODO: prevenir duplicidad
    }
}

export default Busquedas;
