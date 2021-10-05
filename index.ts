import { inquirerMenu, leerInput, listarLugares, pausa } from "./helpers/inquirer"
import Busquedas from "./models/Busquedas";
import dotenv from 'dotenv';
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
                console.log('buscar')
                const busqueda = await leerInput('Introduce una ciudad');
                
                //Buscar los lugares
                const lugares = await busquedas.ciudad(busqueda);
                
                //Seleccionar el lugar 
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find( lugar => lugar.id === id );
                console.log({ id });
                console.log(lugarSel);

                //Datos del clima

                //Mostrar resultados
                console.log('\ninfo del lugar\n'.green)
                console.log('Ciudad:', lugarSel?.nombre)
                console.log('Lt:', lugarSel?.lat)
                console.log('Lg:', lugarSel?.lng)
                console.log('Temperatura min:', )
                console.log('Temperatura max:', )
                break;
        
            case 2:
                console.log('historial');
                break;
        }

        if(opt !== 0) await pausa(); 

        
    } while (opt !== 0);
}

main();