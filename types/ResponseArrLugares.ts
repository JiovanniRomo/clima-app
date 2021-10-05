export interface ArrLugares {
    id: string,
    nombre: string,
    lng: number,
    lat: number,
    salir?: choice
}

export interface choice {
    value: string,
    name: string
}