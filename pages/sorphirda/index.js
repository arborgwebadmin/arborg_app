import React, { useEffect, useState } from 'react';
import PageHead from '../../components/page-head';
import styles from '../../styles/Home.module.css';
import { Typeahead } from 'react-bootstrap-typeahead';
import Data from '../../json/hverfi.json';
import '../../styles/Sorphirda.module.css'
import GetTrashDates from '../../components/trash-dates';
import TrashNextEmpty from '../../components/trash-next-empty';
import { Row, Col } from 'react-bootstrap';
import TrashList from '../../components/trash-list';

export default function Sorphirda() {
    React.useLayoutEffect = React.useEffect 
    const [getAddress, setAddress] = useState([]);
    const [trashDates, setTrashDates] = useState([]);
    const [home, setHome] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [nextBlue, setNextBlue] = useState([])
    const [nextGrey, setNextGrey] = useState([])
    const [counterBlue, setCounterBlue] = useState(0)
    const [counterGrey, setCounterGrey] = useState(0)
    const handleSubmit = event => {
        if(getAddress.length !== 0){            
            setTrashDates(GetTrashDates(getAddress.toString()))
            setHome(getAddress)
            event.preventDefault();
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
        <div className={styles.container}>
            <PageHead>Sorphirðudagatal Árborg</PageHead>
            <div className={styles.main}>
            <div className='container'>
                <h1>Sorphirðudagatal</h1>
            </div>
            <div className={styles.main}>
                <form className='container' onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <p style={{paddingTop: '10px', fontWeight: 'bold'}}>Sláðu inn götuheiti:</p>
                    </Col>
                    <Col>
                        <div className='d-flex flex-row-reverse' style={{paddingBottom: '10px' }} >
                            <input type="submit" onClick={() => setAddress(['Dreifbýli'])} name="blocks" value="Dreifbýli" className="btn btn-primary"></input>
                        <input type="submit" style={{marginRight: '5px'}} onClick={() => setAddress(['Blokkir'])} name="blocks" value="Blokkir" className="btn btn-primary"></input>
                        </div>
                    </Col>
                </Row>
                    <Typeahead
                        id="basic-typeahead-single"
                        onChange={setAddress}
                        options={Data.Hverfi.sort()}
                        selected={getAddress}
                        minLength={2}
                        />
                    <div className="d-flex" style={{paddingTop: '10px', paddingBottom: '10px'}}>
                        {<div style={{marginRight: "10px"}}>
                            <input type="submit" name="street" value="Finna sorphirðudaga" className="btn btn-primary"></input>
                        </div>}
                    </div>
                    <div style={{width: '35rem'}}>
                        <p><strong>Fyrirvari: </strong>Líta skal á sorphirðudagatalið sem viðmiðunardagatal.  Veðurfar, veikindi og bilanir geta haft áhrif en almennt ætti ekki að skeika meiru en 1/2 til 1 degi á sorphirðu milli hverfa.</p><br/>
                    </div>
                </form>
            {isValid && 
                <div id="grid-container">     
                    <div className="d-flex justify-content-around">
                        <h5>{home}</h5>
                    </div>
                    <div className="d-flex justify-content-around">
                        <div className="d-flex">
                            <div className="card text-center" style={{ width: '18rem', border: 'none' , margin: "5px", marginTop: "15px"}}>
                                <div> 
                                    <img src="/grey-bin.png" alt="Grátunna" style={{height: '150px'}} />
                                    <img src="/brown-bin.png" alt="Brúntunna" style={{height: '150px'}} />
                                </div>
                                <br/><h5 >Næsta losun:<br/></h5>
                                <h5>
                                    <TrashNextEmpty nextTrashDates={nextGrey} />
                                </h5>
                            </div>
                            <div className="card text-center" style={{ width: '18rem', border: 'none', margin: "5px", marginTop: "15px"}}>
                                <div> 
                                    <img src="/blue-bin.png" alt="Blátunna" style={{height: '150px'}} />
                                </div>
                                <br/><h5>Næsta losun:<br/></h5>
                                <h5>
                                    <TrashNextEmpty nextTrashDates={nextBlue} />
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className='d-flex justify-content-center'>
                            <div className="grid-item" style={{padding: "30px"}}><h6>Grá og Brúntunnur</h6>
                                <TrashList trashDates={trashDates[0]} counter={counterGrey} />
                            </div>
                            <div className="grid-item" style={{padding: "30px"}}><h6>Blátunnur</h6>
                                <TrashList trashDates={trashDates[1]} counter={counterBlue} />
                            </div>
                        </div>
                    </div>
                </div>
            }
            </div>
        </div>
        </div>
    )      
}