import axios from "axios";
import { ReqResponse } from "../types/geocoding-peticion";
class Busquedas {
    public historial: string[];

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
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
                params: this.paramsMapbox
            })
            const resp = await instance.get<ReqResponse>();

            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }));

        } catch (error) {
            return [];
        }
    }
}

export default Busquedas;