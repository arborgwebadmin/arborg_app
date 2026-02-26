index.js skráin

import React, { useEffect, useState } from 'react';
import PageHead from '../../components/page-head';
import styles from '../../styles/Home.module.css';
import sorphirdaStyle from '../../styles/Sorphirda.module.css';
import temp_JSON from "../../constants/trashDates";
import { formatDateRange } from '../../helpers/formatDateRange';
import  Select from 'react-select';

// for the suggested streets to fill in the search field.
var streets = temp_JSON.hverfi_1.streets.concat(temp_JSON.hverfi_2.streets, temp_JSON.hverfi_3.streets, temp_JSON.hverfi_4.streets).sort();

export default function Sorphirda() {
    const [nextBlue, setNextBlue] = useState([])
    const [nextGrey, setNextGrey] = useState([])
    const [futureBlue, setFutureBlue] = useState([])
    const [futureGrey, setFutureGrey] = useState([])
    const [prevBlue, setPrevBlue] = useState([])
    const [prevGray, setPrevGray] = useState([])
    const [selectedStreet, setSelectedStreet] = useState(null)


    const groupDates = (dates) => {
        return dates.reduce((accumulator, currentValue, currentIndex, array) => {

            // if the currentValue is close to the last date in the last list in the accumulator then add currentValue to the last list in accumulator
            if ( currentIndex && accumulator.at(-1).at(-1).getTime() + (1000*86400*5) >= currentValue.getTime() ) {

                accumulator.at(-1).push(currentValue);
            } // else add new list with the currentValue to the accumulator 
            else {
                accumulator.push([currentValue])
            }
            return accumulator;
        }, []);
    }

    const handleChange = (e) => {
        setSelectedStreet(e);
        if(e && e.value !== 0) {
            var address = e.value.toString()
            var current_date = new Date()
            current_date.setDate(current_date.getDate() -1)
            var prev_date=new Date()
            prev_date.setDate(prev_date.getDate() - 50)
            var bd = []
            var gd = []
            
            // Loop through the neighbourhoods
            for(const neighbourhood in temp_JSON){
                // if address in streets
if (temp_JSON[neighbourhood].streets.some(s => s.trim() === address.trim())) {
  // Helpers that work everywhere (avoid Array.prototype.at for older browsers)
  const last = (arr) => (arr && arr.length ? arr[arr.length - 1] : undefined);

  const toMidnight = (d) => {
    const x = new Date(d);
    x.setHours(0,0,0,0);
    return x;
  };

  // Pull arrays and ensure Date instances
  let bd = (temp_JSON[neighbourhood].blue_dates || []).filter(d => d instanceof Date);
  let gd = (temp_JSON[neighbourhood].gray_dates || []).filter(d => d instanceof Date);

  // Normalize to midnight & sort ascending
  const norm = (d) => toMidnight(d);
  const sortAsc = (a, b) => a - b; // Date subtraction coerces to ms

  bd = bd.map(norm).sort(sortAsc);
  gd = gd.map(norm).sort(sortAsc);

  // --- Robust grouping by 5-day windows ---
  const groupBy5d = (dates) => {
    const groups = [];
    for (const cur of dates) {
      if (groups.length &&
          last(groups[groups.length - 1]).getTime() + 5*24*3600*1000 >= cur.getTime()) {
        groups[groups.length - 1].push(cur);
      } else {
        groups.push([cur]);
      }
    }
    return groups;
  };

  const gBD = groupBy5d(bd);
  const gGD = groupBy5d(gd);

  // Target boundary = "yesterday at midnight" to include ongoing windows
  const todayMid = toMidnight(new Date());
  const yesterday = new Date(todayMid); yesterday.setDate(todayMid.getDate() - 1);

  // First group whose LAST date is >= yesterday
  let idxBD = gBD.findIndex(g => last(g).getTime() >= yesterday.getTime());
  let idxGD = gGD.findIndex(g => last(g).getTime() >= yesterday.getTime());

  // ---- Fallback: if not found but there ARE future dates, locate by the first date >= yesterday and map to its group ----
  const fallbackIdx = (groups, flat) => {
    if (!flat.length) return -1;
    const i = flat.findIndex(d => d.getTime() >= yesterday.getTime());
    if (i === -1) return -1;
    const target = flat[i];
    return groups.findIndex(g => g.some(x => x.getTime() === target.getTime()));
  };

  if (idxBD === -1 && bd.length && last(bd).getTime() >= yesterday.getTime()) {
    idxBD = fallbackIdx(gBD, bd);
  }
  if (idxGD === -1 && gd.length && last(gd).getTime() >= yesterday.getTime()) {
    idxGD = fallbackIdx(gGD, gd);
  }

  // Previous / Next / Future
  const prevBD = idxBD !== -1 ? (idxBD > 0 ? gBD[idxBD - 1] : gBD[gBD.length - 1]) : (gBD[gBD.length - 1] || null);
  const prevGD = idxGD !== -1 ? (idxGD > 0 ? gGD[idxGD - 1] : gGD[gGD.length - 1]) : (gGD[gGD.length - 1] || null);

  const nextBD = idxBD !== -1 ? gBD[idxBD] : null;
  const nextGD = idxGD !== -1 ? gGD[idxGD] : null;

  const futBD  = idxBD !== -1 ? gBD.slice(idxBD + 1) : [];
  const futGD  = idxGD !== -1 ? gGD.slice(idxGD + 1) : [];

  // Optional one‑time diagnostics (remove after verification)
  console.table({
    address, neighbourhood,
    today: todayMid.toDateString(),
    yesterday: yesterday.toDateString(),
    gd_len: gd.length, gd_first: gd[0]?.toDateString(), gd_last: last(gd)?.toDateString(), idxGD,
    bd_len: bd.length, bd_first: bd[0]?.toDateString(), bd_last: last(bd)?.toDateString(), idxBD,
    nextGD_last: last(nextGD || [])?.toDateString(),
    nextBD_last: last(nextBD || [])?.toDateString(),
  });

  // Apply to state (each of these is an array of dates or null)
  setNextBlue(nextBD);
  setNextGrey(nextGD);
  setFutureBlue(futBD);
  setFutureGrey(futGD);
  setPrevBlue(prevBD || []);
  setPrevGray(prevGD || []);
}            
            }

        } 

    }

    return(
        <main>   
            <div className={styles.container}>
                <PageHead>Sorphirðudagatal Árborg</PageHead>
                    <main className={styles.main}>
                        <div className={`container ${sorphirdaStyle.containerWidth}`} >
                            <p style={{paddingTop: '10px', fontWeight: 'bold'}}>Veldu götuheiti:</p> 
                            <div className='d-flex flex-row justify-content-end' style={{paddingBottom: '10px'}} >
                                <input className="btn btn-primary mr-1" type="button" onClick={() => handleChange({label: 'Fjölbýli', value: 'Fjölbýli'}) } value="Fjölbýli"/>
                                <input className="btn btn-primary ml-1" type="button" onClick={() => handleChange({label: 'Dreifbýli', value: 'Dreifbýli'}) } value="Dreifbýli"/>
                            </div>
                            <Select
                                className={sorphirdaStyle.input}
                                isClearable={true}
                                isSearchable={true}
                                options={streets.map((v) => ({value: v, label: v}))}
                                onChange={(e) => handleChange(e)}
                                value={selectedStreet}
                                placeholder="Veldu götuheiti..."
                            />
                            <div>
                                <li className={sorphirdaStyle.trashFontSize} style={{fontStyle: 'italic', paddingTop: '0'}}>Smella þarf á „Fjölbýli“ þegar tunnur eru 660l eða stærri sorptunnur. </li>
                                <li className={sorphirdaStyle.trashFontSize} style={{fontStyle: 'italic', paddingBottom: '10px'}}>Smella þarf á „Dreifbýli“ þegar viðkomandi býr í dreifbýli. </li>
                                <p className={sorphirdaStyle.trashFontSize} style={{fontStyle: 'italic'}}><strong>Fyrirvari: </strong>Líta skal á sorphirðudagatalið sem viðmiðunardagatal.  Veðurfar, veikindi og bilanir geta haft áhrif en almennt ætti ekki að skeika meiru en 1/2 til 1 degi á sorphirðu.</p><br/>
                            </div>
                        {selectedStreet && 
                            <div id="grid-container">     
                                <div className="d-flex justify-content-around">
                                    <h5>{selectedStreet.label}</h5>
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
                                                nextGrey?.length ?

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
                                            { nextBlue?.length ?
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
                                                { futureGrey &&
                                                    futureGrey.map((d, i) => <li key={i}>{formatDateRange(d)}</li>)
                                                }
                                            </ul>
                                        </div>
                                        <div className={sorphirdaStyle.trashList}><h6 className={sorphirdaStyle.h6Style}>Fjólublá- og Blátunnur</h6>
                                            <ul>
                                                { futureBlue &&
                                                    futureBlue.map((d, i) => <li key={i}>{formatDateRange(d)}</li>)
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

