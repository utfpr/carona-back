import { race } from "@prisma/client";
import { isFuture, isPast } from "date-fns";

export function futureRace(timestart: Date){
    
 return !isPast(timestart)
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

export function ordenate(list: race[]){
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