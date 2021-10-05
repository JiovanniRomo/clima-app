import axios from "axios";

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
        const instance = axios.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
            params: this.paramsMapbox
        })
        const respuesta = await instance.get();
        console.log(respuesta.data);
        return []; //retornar los lugares con el mismo nombre
    }
}

export default Busquedas;