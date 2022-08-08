import React from "react";
import { months } from "../constants";

const TrashNextEmpty = ({nextTrashDates}) => {
    return(
        <>
        {(nextTrashDates.length > 1 ) ?  
        (
            // Finds next date when trash is being empty, also checks if next date in same zone is emptying, if so it adds to the next date, since in Árborg it can take a few days to empty the trash in the same zone
            (nextTrashDates[0].getMonth() !== nextTrashDates[(nextTrashDates.length) - 1].getMonth()) ? 
            nextTrashDates[0].getDate() + '. ' + months[nextTrashDates[0].getMonth()] + ' - ' + nextTrashDates[(nextTrashDates.length) - 1].getDate() + '. ' + months[(nextTrashDates[(nextTrashDates.length) - 1]).getMonth()] : 
            nextTrashDates[0].getDate() + '-' + nextTrashDates[(nextTrashDates.length)-1].getDate() + '. ' + 
            ((nextTrashDates[0].getMonth() === nextTrashDates[(nextTrashDates.length) - 1].getMonth() ? months[nextTrashDates[0].getMonth()]: ''))):  
            ((nextTrashDates.length === 1) ? nextTrashDates[0].getDate() + '. ' + months[nextTrashDates[0].getMonth()] : ''
        )}
        </>
    )
}
export default TrashNextEmpty;