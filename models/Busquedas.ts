import fs from "fs";
import axios from "axios";
import { ReqResponse } from "../types/geocoding-peticion";
import { ResqResponseWeaher } from "../types/OpenWeather-types";
class Busquedas {
    public historial: string[];
    private dbPath = "./db/database.json";

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

    get historialCapitalizado() {
        return this.historial.map(lugar => {
            let palabras = lugar.split(' ');
            palabras = palabras.map( p => p[0].toUpperCase() + p.substring(1));

            return palabras.join(' ');
        })
    }

    constructor() {
        // TODO: Leer DB si existe
        this.historial = [];

        this.leerDB();
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

        if (this.historial.includes(lugar.toLocaleLowerCase())) {
            return;
        }
        this.historial = this.historial.splice(0, 5);
        
        this.historial = [lugar.toLocaleLowerCase(), ...this.historial];

        // Grabar en DB
        this.guardarDB();
    }

    private guardarDB() {
        const payload = {
            historial: this.historial,
        };

        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }

    public leerDB() {
        //path del archivo
        const archivo = "./DB/database.json";

        // Existe la DB?
        if (!fs.existsSync(archivo)) {
            return null;
        }

        // Leemos su contenido y lo parseamos
        const info = fs.readFileSync(archivo, { encoding: "utf-8" });
        const dataParseada = JSON.parse(info);

        //Desestructuramos y agregamos cada lugar como un nuevo item del listado
        const { historial } = dataParseada;
        historial.forEach(
            (lugar: string) => (this.historial = [...this.historial, lugar])
        );
    }
}

export default Busquedas;
