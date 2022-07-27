import { Address } from "./address.interface";
export interface Users {
    id: number;
    firstName: string
    lastName: string
    email: string
    dob: string
    address: Address
    phone: string,
    gender: string,
    image: string
}


