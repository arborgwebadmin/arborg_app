import React, { useEffect, useState } from "react";
import { months } from "../constants";
const TrashList = ({trashDates, counter}) => {
    const [dates, setDate] = useState([]);

    useEffect(() => {
        let tempList = [trashDates[counter]]
        let tempGray = []
        //find adjentence dates
        for (let i = counter; i < trashDates.length; i++){
            if (trashDates[i].getTime() - (1000*60*60*24) === tempList[tempList.length-1].getTime() || (trashDates[i].getTime()-(1000*60*60*24*3)) === (tempList[tempList.length-1].getTime())){ 
                tempList.push(new Date(trashDates[i]))
            }
            else {
                tempGray.push(tempList)
                tempList = []
                tempList.push(new Date(trashDates[i]))
            }
        }
        tempGray.push(tempList)
        tempGray.shift()
        setDate(tempGray)
    }, [trashDates])
    
    

  
    return (
        <>
        {/* Prints out correct format of dates */}
        {dates.map(trashDate => (trashDate.length === 1) ? <li key={trashDate}>{trashDate[0].getDate() + '. ' + months[trashDate[0].getMonth()]}</li> : 
        (trashDate.length > 1 ) ? 
         (( trashDate[0].getMonth() !== trashDate[(trashDate.length) - 1].getMonth())  ? 
            <li key={trashDate}>{trashDate[0].getDate() + '. ' + months[trashDate[0].getMonth()] + ' - ' + trashDate[(trashDate.length) - 1].getDate() + '. ' + months[(trashDate[(trashDate.length) - 1]).getMonth()]} </li> : 
            <li key={trashDate}> {trashDate[0].getDate() + '-' + trashDate[(trashDate.length)-1].getDate() + '. ' + 
            ((trashDate[0].getMonth() === trashDate[(trashDate.length) - 1].getMonth() ? months[trashDate[0].getMonth()]: ''))} </li>):
            <li key={trashDate}>
                {((trashDate.length === 1) ? trashDate[0].getDate() + '. ' + months[trashDate[0].getMonth()] : '')}
            </li>
            )}       
        </>
    )
        }
export default TrashList;