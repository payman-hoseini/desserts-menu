
export interface Product {
    image : {
        thumbnail : string,
        mobile : string,
        tablet : string,
        desktop : string
    },
    name : string,
    category : string,
    price : string
}

export interface Cart {
    list : {
        product : Product,
        count : number
    }[]
}