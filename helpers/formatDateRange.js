import {months } from "../constants"
export function formatDateRange(dates) {
    if( dates ) {

        if(dates.length < 1) {
            return ""
        }
        if (dates.length == 1) {
            return dates[0].getDate() + '. ' + months[dates[0].getMonth()]
        }
        let first = dates[0]
        let last = dates[dates.length -1]
        if( first.getMonth() == last.getMonth()) {
            return first.getDate() + '. - ' + last.getDate() +  '. ' + months[first.getMonth()]
        }
        return first.getDate() + '. ' + months[first.getMonth()] + ' - ' + last.getDate() +  '. ' + months[last.getMonth()]
    }
    
}