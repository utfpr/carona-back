import { v4 } from 'uuid'

let i = 0;
export function createUUID() {
    //return v4();

    i = i+1;
    return i.toString(36).padStart(32, '0')
}