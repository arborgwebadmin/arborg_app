import React, { useEffect, useState } from 'react';
import PageHead from '../../components/page-head';
import styles from '../../styles/Home.module.css';
import sorphirdaStyle from '../../styles/Sorphirda.module.css';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Row, Col } from 'react-bootstrap';
import temp_JSON from "../../json/thrashdates";
import { formatDateRange } from '../../helpers/formatDateRange';

// for the suggested streets to fill in the search field.
var streets = temp_JSON.hverfi_1.streets.concat(temp_JSON.hverfi_2.streets, temp_JSON.hverfi_3.streets, temp_JSON.hverfi_4.streets);

export default function Sorphirda() {
    const [getAddress, setAddress] = useState([]);
    const [trashDates, setTrashDates] = useState([]);
    const [home, setHome] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [nextBlue, setNextBlue] = useState([])
    const [nextGrey, setNextGrey] = useState([])
    const [prevBlue, setPrevBlue] = useState([])
    const [prevGray, setPrevGray] = useState([])

    const getTrashDates = (addr) =>{
        var address = addr
        var current_date, prev_date
        var trashDates = []
        var grey_dates = []
        var blue_dates = []
        var prev_gray_dates=[]
        var prev_blue_dates = []
        current_date = new Date()
        current_date.setDate(current_date.getDate() -1)
        prev_date=new Date()
        prev_date.setDate(prev_date.getDate() - 50)
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
                        else if( temp_JSON[neighbourhood].gray_dates[date] > prev_date) {
                            prev_gray_dates.push(temp_JSON[neighbourhood].gray_dates[date])
                        }
                    }
                    // Loop through all dates for the address
                    for(const date in temp_JSON[neighbourhood].blue_dates){
                        // If date is in the future then list it
                        if(temp_JSON[neighbourhood].blue_dates[date] > current_date){                  
                            blue_dates.push(temp_JSON[neighbourhood].blue_dates[date])			
                        }
                        else if( temp_JSON[neighbourhood].blue_dates[date] > prev_date)
                        {
                            prev_blue_dates.push(temp_JSON[neighbourhood].blue_dates[date])
                        }
                    }
                    if(grey_dates && blue_dates){
                        trashDates.push(grey_dates, blue_dates, prev_gray_dates, prev_blue_dates)     
                        return trashDates
                    }
                    else return []
                }
            }
        }
    }

    const groupDates = (oldDates) => {
        let groupedDates = [];
        let currentGroup = [];
        let lastDate;
        oldDates.forEach((d, i) => {
            if(i == 0) {
                currentGroup.push(d);
            }
            else if(d.getTime() - (1000*86400*5) <= lastDate.getTime()) {
                currentGroup.push(d)
            } else {
                groupedDates.push(currentGroup)
                currentGroup = []
                currentGroup.push(d)
            }
            lastDate = d;
        })
        groupedDates.push(currentGroup)
        return groupedDates
    }

    const handleSubmit = event => {
        event.preventDefault()
        if(getAddress.length !== 0){

            setTrashDates(getTrashDates(getAddress.toString()).map(g => groupDates(g)))
            setHome(getAddress)
            setIsValid(false)
            
    }}

    useEffect(() => {
        if(trashDates.length !== 0){
            let tempTrash = trashDates;
            setNextGrey(tempTrash[0][0])
            setNextBlue(tempTrash[1][0])
            setPrevBlue(tempTrash[3][tempTrash[3].length-1])
            setPrevGray(tempTrash[2][tempTrash[2].length-1])
            setIsValid(true)
        }
    }, [trashDates])

    return(
        <main>   
            <div className={styles.container}>
                <PageHead>Sorphirðudagatal Árborg</PageHead>
                    <main className={styles.main}>
                        <div className={`container ${sorphirdaStyle.containerWidth}`} >
                            <form className='grid-container' onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <p style={{paddingTop: '10px', fontWeight: 'bold'}}>Sláðu inn götuheiti:</p> 
                                </Col>
                                <Col>
                                    <div className='d-flex flex-row-reverse' style={{paddingBottom: '10px'}} >
                                        <input type="submit" onClick={() => setAddress(['Dreifbýli'])} name="blocks" value="Dreifbýli" className="btn btn-primary"></input>
                                        <input type="submit" onClick={() => setAddress(['Fjölbýli'])}   name="blocks" value="Fjölbýli" className="btn btn-primary" style={{marginRight: '5px'}}></input>
                                    </div>
                                </Col>
                            </Row>
                                </form>
                            <form onSubmit={handleSubmit}>
                                <Typeahead
                                    id="basic-typeahead-single"
                                    onChange={setAddress}
                                    options={streets.sort()}
                                    selected={getAddress}
                                    minLength={2}
                                    />
                                <div className="d-flex" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                                    {<div style={{marginRight: "10px"}}>
                                        <input 
                                            type="submit" 
                                            name="street" 
                                            value="Finna sorphirðudaga" 
                                            className="btn btn-primary"
                                            />
                                    </div>}
                                </div>
                                <div>
                                    <li className={sorphirdaStyle.trashFontSize} style={{fontStyle: 'italic', paddingTop: '0'}}>Smella þarf á „Fjölbýli“ þegar tunnur eru 660l eða stærri sorptunnur. </li>
                                    <li className={sorphirdaStyle.trashFontSize} style={{fontStyle: 'italic', paddingBottom: '10px'}}>Smella þarf á „Dreifbýli“ þegar viðkomandi býr í dreifbýli. </li>
                                    <p className={sorphirdaStyle.trashFontSize} style={{fontStyle: 'italic'}}><strong>Fyrirvari: </strong>Líta skal á sorphirðudagatalið sem viðmiðunardagatal.  Veðurfar, veikindi og bilanir geta haft áhrif en almennt ætti ekki að skeika meiru en 1/2 til 1 degi á sorphirðu.</p><br/>
                                </div>
                            </form>
                        {isValid && 
                            <div id="grid-container">     
                                <div className="d-flex justify-content-around">
                                    <h5>{home}</h5>
                                </div>
                                <div className="d-flex justify-content-around">
                                    <div className="d-flex">
                                        <div className="card text-center" style={{ width: '50%', border: 'none' , margin: "5px", marginTop: "15px", backgroundColor: '#f8f9fb'}}>
                                            <div> 
                                                <img className={sorphirdaStyle.img} src="/grey-bin.png" alt="Grátunna"/>
                                                <img className={sorphirdaStyle.img} src="/brown-bin.png" alt="Brúntunna"/>
                                            </div>

                                            <br/><p className={sorphirdaStyle.nextTrashEmpty}>Næsta grá- og brúntunnu losun:<br/></p>
                                            <div>
                                            {
                                                nextGrey.length ?

                                                <h2 className={sorphirdaStyle.h2Trash}>
                                                    {formatDateRange(nextGrey)}
                                                </h2>
                                                
                                                : 
                                                <h2>Engin skráð losun</h2>
                                                
                                            }
                                            <small>

                                            Seinasta losun var: {formatDateRange(prevGray)}
                                            </small>
                                                </div>
                                        </div>
                                        <div className="card text-center" style={{ width: '50%', border: 'none', margin: "5px", marginTop: "15px", backgroundColor: '#f8f9fb'}}>
                                            <div> 
                                                <img className={sorphirdaStyle.img} src="purple-bin.png" alt="Fjólublátunna" />
                                                <img className={sorphirdaStyle.img} src="/blue-bin.png" alt="Blátunna" />
                                            </div>
                                            <br/><p className={sorphirdaStyle.nextTrashEmpty}>Næsta fjólublá- og blátunnu losun:<br/></p>
                                            <div>
                                            { nextBlue.length ?
                                                <h2 className={sorphirdaStyle.h2Trash}>
                                                    {formatDateRange(nextBlue)}
                                                </h2>
                                                :
                                                <h2>Engin skráð losun</h2>
                                            }
                                            <small>
                                                Seinasta losun var: {formatDateRange(prevBlue)}
                                                </small>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-space-between justify-content-center ">
                                    <div className='d-flex justify-content-center'>
                                        <div className={sorphirdaStyle.trashList}><h6 className={sorphirdaStyle.h6Style}>Grá- og Brúntunnur</h6>
                                            <ul>
                                                {
                                                    trashDates[0].map((d, i) => <li key={i}>{formatDateRange(d)}</li>)
                                                }
                                            </ul>
                                        </div>
                                        <div className={sorphirdaStyle.trashList}><h6 className={sorphirdaStyle.h6Style}>Fjólublá- og Blátunnur</h6>
                                            <ul>
                                                {
                                                    trashDates[1].map((d, i) => <li key={i}>{formatDateRange(d)}</li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </main>
            </div>
        </main>
    )      
}
