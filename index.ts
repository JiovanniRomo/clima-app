import {
    inquirerMenu,
    leerInput,
    listarLugares,
    pausa,
} from "./helpers/inquirer";
import Busquedas from "./models/Busquedas";
import dotenv from "dotenv";
dotenv.config();

console.clear();

const main = async () => {
    let opt: number;

    const busquedas = new Busquedas();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //Mostrar mensaje
                const busqueda = await leerInput("Introduce una ciudad");

                //Buscar los lugares
                const lugares = await busquedas.ciudad(busqueda);

                //Seleccionar el lugar
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find((lugar) => lugar.id === id);

                //Datos del clima
                const clima = await busquedas.climaPorLugar(
                    lugarSel!.lat,
                    lugarSel!.lng
                );
                // console.log(clima);

                //Mostrar resultados
                console.clear();
                console.log("\ninfo del lugar\n".green);
                console.log("Ciudad:", lugarSel?.nombre.green);
                console.log("Lt:", lugarSel?.lat);
                console.log("Lg:", lugarSel?.lng);
                console.log("Temperatura:", clima?.temp);
                console.log("Temperatura min:", clima?.min);
                console.log("Temperatura max:", clima?.max);
                console.log("Estado del clima:", clima?.desc.green);
                break;

            case 2:
                console.log("historial");
                break;
        }

        if (opt !== 0) await pausa();
    } while (opt !== 0);
};

main();
