import { isFuture } from 'date-fns'

export function validateEmail(email: string): boolean {
    if(email.indexOf('.') === -1 || email.indexOf('@') === -1){
        return false;
    }

    return true;
}

export function validatePassword(password: string): boolean{
    let regexPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
     
    if(!regexPassword.test(password)){
        return false;
    }

    return true;
}

export function validateBirthDate(birthDate: Date): boolean{
    if(isFuture(new Date(birthDate))){
        return false;
    }

    return true;
}

export function validateCpf(cpf: string): boolean{
    if(cpf.length!=11){
        return false;
    }

    let regexpNumber = new RegExp('^[+ 0-9]{11}$');
    if((!regexpNumber.test(cpf))){
        return false;
    }

    return true;
}

export function validatePhoneNumber(phoneNumber: string): boolean{
    let regexpNumber = new RegExp('^[+ 0-9]{11}$');
    if(phoneNumber.length!=11 || !regexpNumber.test(phoneNumber)){
        return false;
    }

    return true;
}

export function validateConfirmEmail(email: string, confirmEmail: string): boolean{
    if(email !== confirmEmail){
        return false;
    }

    return true;
}

export function validateConfimPassword(password: string, confirmPassword: string): boolean{
    if(password !== confirmPassword){
        return false;
    }

    return true;
}