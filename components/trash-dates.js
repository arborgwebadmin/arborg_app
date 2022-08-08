import temp_JSON from "../pages/sorphirda/thrashdates";

export default function GetTrashDates(addr){
    var address = addr
    var current_date
    var trashDates = []
    var grey_dates = []
    var blue_dates = []
    current_date = new Date()
    current_date.setDate(current_date.getDate() -1)
    // Loop through the neighbourhoods
    for(const neighbourhood in temp_JSON){
        // Loop through streets
        for(const street in temp_JSON[neighbourhood].streets){
            // Check if address matches the street
            if(address === temp_JSON[neighbourhood].streets[street]){
                // Loop through all dates for the address
                for(const date in temp_JSON[neighbourhood].gray_dates){
                    // If date is in the future then list it
                    if(temp_JSON[neighbourhood].gray_dates[date] > current_date){
                        //Gray and Brown Dates 
                        grey_dates.push(temp_JSON[neighbourhood].gray_dates[date])
                    }
                }
                // Loop through all dates for the address
                for(const date in temp_JSON[neighbourhood].blue_dates){
                    // If date is in the future then list it
                    if(temp_JSON[neighbourhood].blue_dates[date] > current_date){                  
                        blue_dates.push(temp_JSON[neighbourhood].blue_dates[date])			
                    }
                }
                if(grey_dates && blue_dates){
                    trashDates.push(grey_dates, blue_dates)     
                    return trashDates
                }
                else return []
            }
        }
    }
}

