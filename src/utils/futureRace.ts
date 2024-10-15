import { race } from "../entities/race"


export function futureRace(timestart: Date){

    const today = new Date()

    const yesterday = new Date(today.getDay() - 1)

    if(timestart > yesterday){
        return true
    } else {
        return false
    }
}

export function pastRace(timeStart: Date){
    const today = new Date()

    const tomorrow = new Date(today.getMilliseconds() + 1)

    if(timeStart < tomorrow){
        return true
    } else {
        return false
    }
}

export function listFutureRaces(races: race[]){
    let list = new Array();
    let i = races.length - 1;

    while(i >= 0){
        if(futureRace(races[i].timeStart) === true){
            list.push(races[i])
        }

        i--;
    }

    list.sort(function(a, b){
        if(a.timeStart < b.timeStart){
            return -1;
        }
        if(a.timeStart > b.timeStart){
            return 1;
        }

        return 0
    })

    return list
}

export function listPastRaces(races: race[]){
    let list = new Array();
    let i = races.length - 1;

    while(i >= 0){
        if(pastRace(races[i].timeStart) === true){
            list.push(races[i])
        }

        i--;
    }

    list.sort(function(a, b){
        if(a.timeStart < b.timeStart){
            return -1;
        }
        if(a.timeStart > b.timeStart){
            return 1;
        }

        return 0
    })

    return list
}

export function ordenate(list: any[]){
    list = list.sort(function(a, b){
        if(a.timeStart < b.timeStart){
            return -1;
        }
        if(a.timeStart > b.timeStart){
            return 1;
        }

        return 0
    })

    return list
}