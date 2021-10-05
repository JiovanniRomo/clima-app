import { inquirerMenu, leerInput, pausa } from "./helpers/inquirer"
import Busquedas from "./models/Busquedas";
import dotenv from 'dotenv';
dotenv.config();

console.clear();

// console.log(process.env)

const main = async () => {
    let opt: number; 

    const busquedas = new Busquedas();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //Mostrar mensaje
                console.log('buscar')
                const lugar = await leerInput('Introduce una ciudad');
                await busquedas.ciudad(lugar);

                //Buscar los lugares

                //Seleccionar el lugar 

                //Datos del clima

                //Mostrar resultados
                console.log('\ninfo del lugar\n'.green)
                console.log('Ciudad:', )
                console.log('Lt:', )
                console.log('Lg:', )
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