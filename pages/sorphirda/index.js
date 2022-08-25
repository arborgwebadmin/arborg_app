import React, { useEffect, useState } from 'react';
import PageHead from '../../components/page-head';
import styles from '../../styles/Home.module.css';
import sorphirdaStyle from '../../styles/Sorphirda.module.css';
import { Typeahead } from 'react-bootstrap-typeahead';
import Data from '../../json/hverfi.json';
// import GetTrashDates from '../../components/trash-dates';
import TrashNextEmpty from '../../components/trash-next-empty';
import { Row, Col } from 'react-bootstrap';
import TrashList from '../../components/trash-list';
import temp_JSON from "../../json/thrashdates";

export default function Sorphirda() {
    const [getAddress, setAddress] = useState([]);
    const [trashDates, setTrashDates] = useState([]);
    const [home, setHome] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [nextBlue, setNextBlue] = useState([])
    const [nextGrey, setNextGrey] = useState([])
    const [counterBlue, setCounterBlue] = useState(0)
    const [counterGrey, setCounterGrey] = useState(0)

    const getTrashDates = (addr) =>{
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

    const handleSubmit = event => {
        event.preventDefault()
        if(getAddress.length !== 0){            
            setTrashDates(getTrashDates(getAddress.toString()))
            setHome(getAddress)
            setIsValid(false)
            
    }}

    useEffect(() => {
        if(trashDates.length !== 0){
            let tempTrash = trashDates;
            let tempGray = [trashDates[0][0]];
            let tempBlue = [trashDates[1][0]];
            let countg = 1
            let countb = 1
            tempTrash[0].map( dates => {  
                if(dates.getTime()- (1000*60*60*24) === tempGray[tempGray.length-1].getTime() || dates.getTime()- (1000*60*60*24*3) === tempGray[tempGray.length-1].getTime() ){
                    countg++
                    tempGray.push(dates)
                }})                 
            tempTrash[1].map( dates => {  
                if(dates.getTime()- (1000*60*60*24) === tempBlue[tempBlue.length-1].getTime() || dates.getTime()- (1000*60*60*24*3) === tempBlue[tempBlue.length-1].getTime() ){
                    countb++
                    tempBlue.push(dates)                                
                }})   
                    setCounterBlue(countb)
                    setCounterGrey(countg)                 
                    setNextGrey(tempGray)
                    setNextBlue(tempBlue)
                    setIsValid(true)
        }
    }, [trashDates])

    return(
        <main className={styles.main}>   
            <div className={sorphirdaStyle.container}>
                <PageHead>Sorphirðudagatal Árborg</PageHead>
                <div className={styles.main}>
                <div className={sorphirdaStyle.container}>
                    <h1>Sorphirðudagatal</h1>
                    
                </div>
                <div className={styles.main}>
                        <form className='grid-container' style={{width: '88%'}} onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <p style={{paddingTop: '10px', fontWeight: 'bold'}}>Sláðu inn götuheiti:</p> 
                        </Col>
                        <Col>

                            <div className='d-flex flex-row-reverse' style={{paddingBottom: '10px'}} >
                                <input type="submit" onClick={() => setAddress(['Dreifbýli'])} name="blocks" value="Dreifbýli" className="btn btn-primary"></input>
                                <input type="submit" onClick={() => setAddress(['Blokkir'])}   name="blocks" value="Fjölbýli" className="btn btn-primary" style={{marginRight: '5px'}}></input>
                            </div>
                        </Col>
                    </Row>
                        </form>
                    <form className='container' onSubmit={handleSubmit}>
                        <Typeahead
                            id="basic-typeahead-single"
                            onChange={setAddress}
                            options={Data.Hverfi.sort()}
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
                        <div style={{width: '100%'}}>
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
                                    <h2 className={sorphirdaStyle.h2Trash}>
                                        <TrashNextEmpty nextTrashDates={nextGrey} />
                                    </h2>
                                </div>
                                <div className="card text-center" style={{ width: '50%', border: 'none', margin: "5px", marginTop: "15px", backgroundColor: '#f8f9fb'}}>
                                    <div> 
                                        <img className={sorphirdaStyle.img} src="/blue-bin.png" alt="Blátunna" />
                                    </div>
                                    <br/><p className={sorphirdaStyle.nextTrashEmpty}>Næsta blátunnu losun:<br/></p>
                                    <h2 className={sorphirdaStyle.h2Trash}>
                                        <TrashNextEmpty nextTrashDates={nextBlue} />
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-space-between justify-content-center ">
                            <div className='d-flex justify-content-center'>
                                <div className={sorphirdaStyle.trashList}><h6>Grá og Brúntunnur</h6>
                                    <TrashList trashDates={trashDates[0]} counter={counterGrey} />      
                                </div>
                                <div className={sorphirdaStyle.trashList}><h6>Blátunnur</h6>
                                    <TrashList trashDates={trashDates[1]} counter={counterBlue} />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                </div>
            </div>
            </div>
        </main>
    )      
}