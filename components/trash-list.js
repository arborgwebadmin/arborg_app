import React from "react";
import { months } from "../constants";
const TrashList = ({trashDates, counter}) => {
    return (
        <>
        {/* Maps trough dates and prints a list of next dates on the screen */}
        {trashDates.map((trashDate, index) =>  (index >= counter) ?
        <li key={trashDate}>{ trashDate.getDate() + '. ' + months[trashDate.getMonth()]}</li> : '')}
        </>
    )
}

export default TrashList;