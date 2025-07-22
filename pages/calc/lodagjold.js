import React from 'react';
import styles from '../../styles/Home.module.css';
import FormGroup from '../../components/form-group';
import PageHead from '../../components/page-head';
import {currencyFormat, inputFormat, formatedToInt} from '../../components/functions.js';
import CheckFormGroup from '../../components/check-form-group';
import { lodagjöldVars as calcMap } from '../../constants/index.js';

const idsMap = {
    SIZE: 'size',
    EINBYLI: 'EINBYLI',
    PAR: 'PAR',
    RAD: 'RAD',
    FJOLBYLI: 'FJOLBYLI',
    VERSLUN: 'VERSLUN',
    IDNADUR: 'IDNADUR',
    ATHAFNASVAEDI: 'ATHAFNASVAEDI',
    TEGUND: 'type',
}

class Lodagjold extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            field: {
                type: idsMap.EINBYLI,
                size: '',
            },
            total: 0,
            tGatnagerd: 0,
            percentage: 0,
        };
    }

    handleChange = (e) => {
        let fields = this.state.field;
        let value = e.target.type === "text" ? e.target : e.target.value;
        fields[e.target.id] = value;
        this.setState({
            field: fields,
            total: 0,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let tegund = this.state.field.type;
        let alagning = calcMap[tegund];
        let size = this.state.field.size;
        let perSqMeter = calcMap.PER_SQ_METER;
        let total = size*perSqMeter;
        let tgatnagerd = total*alagning;
        let percentage = alagning*100
        this.setState({
            total: total,
            tGatnagerd: tgatnagerd,
            percentage: percentage,
        });
    }

    render() {
        return (
            <main>
                <div className={ styles.container }>
                    <PageHead title="Reiknivél gatnagerðargjalda"></PageHead>
                        <div className={ styles.main }>
                            <div className="container">
                                <h1>Reiknivél gatnagerðargjalda</h1>
                            </div>
                            <div className="containter">
                                <form onSubmit={ this.handleSubmit }>
                                    <div className="form-group">
                                        <label htmlFor={ idsMap.TEGUND }>Tegund húsnæðis: </label>
                                        <CheckFormGroup id={ idsMap.TEGUND } label="Einbýlishús" type="radio" value={ idsMap.EINBYLI } change={ this.handleChange } checked={ this.state.field.type === idsMap.EINBYLI }></CheckFormGroup>
                                        <CheckFormGroup id={ idsMap.TEGUND } label="Parhús" type="radio" value={ idsMap.PAR } change={ this.handleChange } checked={ this.state.field.type === idsMap.PAR }></CheckFormGroup>
                                        <CheckFormGroup id={ idsMap.TEGUND } label="Raðhús" type="radio" value={ idsMap.RAD } change={ this.handleChange } checked={ this.state.field.type === idsMap.RAD }></CheckFormGroup>
                                        <CheckFormGroup id={ idsMap.TEGUND } label="Fjölbýlishús" type="radio" value={ idsMap.FJOLBYLI } change={ this.handleChange } checked={ this.state.field.type === idsMap.FJOLBYLI }></CheckFormGroup>
                                        <CheckFormGroup id={ idsMap.TEGUND } label="Verslun og þjónusta" type="radio" value={ idsMap.VERSLUN } change={ this.handleChange } checked={ this.state.field.type === idsMap.VERSLUN}></CheckFormGroup>
                                        <CheckFormGroup id={ idsMap.TEGUND } label="Iðnaðarhúsnæði" type="radio" value={ idsMap.IDNADUR } change={ this.handleChange } checked={ this.state.field.type === idsMap.IDNADUR}></CheckFormGroup>
                                        <CheckFormGroup id={ idsMap.TEGUND } label="Athafnasvæði og aðrar byggingar" type="radio" value={ idsMap.ATHAFNASVAEDI } change={ this.handleChange } checked={ this.state.field.type === idsMap.ATHAFNASVAEDI}></CheckFormGroup>
                                    </div>
                                    <FormGroup id={ idsMap.SIZE } label="Byggingarmagn lóðar skv. heimilu nýtingarhlutfalli í fermetrum" type="number" value={ this.state.field.size } change={ this.handleChange } required={true}></FormGroup>
                                    <input type="submit" value="Reikna" className="btn btn-primary"></input>
                                </form>
                                <div className={this.state.total==0 ? styles.hidden + " card mt-3" : styles.visible + " card mt-3"}>
                                    <div className="card-body">
                                        <h5 className="card-title">Áætluð gatnagerðargjöld: {currencyFormat(this.state.tGatnagerd)}</h5>
                                        <p className="card-text">
                                            <b>Sundurliðun:</b><br></br>
                                            Gert er ráð fyrir að verðmat húsnæðis nemi {currencyFormat(this.state.total)} miðað við núverandi fermetraverð {currencyFormat(calcMap.PER_SQ_METER)}<br></br>
                                            Af því reiknast {this.state.percentage}% álagning sem nemur {currencyFormat(this.state.tGatnagerd)} 
                                        </p>
                                        <h6 className="card-subtitle mb-2 text-muted">Fyrirvari: </h6>
                                        <p className="card-text">
                                            Eingöngu er um áætlun að ræða miðað við þær forsendur sem slegnar eru inn.<br></br>
                                            Fermetraverð miðast við vísitölu frá {calcMap.VISITOLU_TXT}.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </main>
        )
    }
}

export default Lodagjold;
