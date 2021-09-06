import React from "react";
import Table from "./Table";
import style from './style.module.css'
import Statistic from "./Statistic";
import v1 from '../../images/v1.png'
import v2 from '../../images/v2.png'
export default function Transactions(){
    const data = [
        {date:'Today',image:v1,name:'Starbucs cafe',type:'Cafe',transaction:250,color:'#A162F7'},
        {date:'20.05',image:v2,name:'Apple store',type:'Other',transaction:350,color:'#FF8743'},
        {date:'21.05',image:v1,name:'Apple store',type:'Other',transaction:650,color:'#FF8743'},
        {date:'18.05',image:v2,name:'Spar',type:'Foods',transaction:450,color:'#FF5CAA'},
        {date:'19.05',image:v1,name:'Spar',type:'Foods',transaction:450,color:'#FF5CAA'},
        {date:'15.05',image:v2,name:'Pharmacy',type:'Market',transaction:440,color:'#24CA49'},
        {date:'16.05',image:v1,name:'Pharmacy',type:'Market',transaction:440,color:'#24CA49'},
        {date:'15.04',image:v2,name:'Dany M',type:'Transfer',transaction:896,color:'#0062FF'},
        {date:'14.04',image:v1,name:'Dany M',type:'Transfer',transaction:896,color:'#0062FF'},
        {date:'06.05',image:v2,name:'Starbucs cafe',type:'Cafe',transaction:740,color:'#A162F7'},
    ]
    return(
        <div className={style.transactions}>
            <Table data={data}/>
            <Statistic transactions={data}/>
        </div>
        
    )
}