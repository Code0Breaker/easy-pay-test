import { Typography } from "@material-ui/core"
import React from "react"
import style from './style.module.css'
export default function Table({data}){
   
    return(
        <div className={style.data_table}>
        <Typography variant={'h3'}>Last transactions</Typography>
        <table className={style.table}>
            <tbody>
                {
                    data&&data.map(item=>{
                        return(
                            <tr key={Math.random()*2555}>
                              <td>{item.date}</td>
                              <td><img src={item.image}/></td>
                              <td>{item.name}</td>
                              <td><span style={{color:item.color}}>{item.type}</span></td>
                              <td>$ -{item.transaction}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )
}