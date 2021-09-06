import { Typography } from "@material-ui/core";
import React from "react";
import style from './style.module.css'
import { Doughnut, defaults } from "react-chartjs-2";
console.log(defaults);
defaults.plugins.legend.position=false
// defaults.plugins.legend.position='bottom'
// defaults.plugins.legend.labels.boxHeight=0.5
// defaults.plugins.legend.labels.boxWidth=0.5


export default function Statistic({transactions}){
  

  const result = {};
  
  transactions.forEach(obj => {
    const type = obj.type;
    const currentCategory = result[type] || [];
  
    currentCategory.push(obj);
    result[type] = currentCategory;
  });

  const newArr = []
  for(let key in result){
    newArr.push({type:key,total:result[key].length===1?result[key][0].transaction :result[key].reduce((a,b)=>a.transaction+b.transaction),color:result[key][0].color})
  }

console.log(newArr);
    
const data = {
  labels: [...newArr.map(item=>item.color)],
  datasets: [
    {
      label: '# of Votes',
      data: [...newArr.map(item=>item.total)],
      backgroundColor: [...newArr.map(item=>item.color)],
      borderColor: [...newArr.map(item=>item.color)],
      borderWidth: 10,
    },
  ],
};
let total = 0
newArr.map(item=>{
  total+=item.total
})

    return(
        <div className={style.stata}>
            <Typography variant={'h3'}>Statistic</Typography>
            <div style={{position:'relative'}}>
                <div className={style.stata_diagram}>
                  <div className={style.stata_result}>
                    <Typography variant={'h4'}>$ {parseInt(total)}</Typography>
                    <span>Total expences per month</span>
                  </div>
                </div>
                <Doughnut data={data} />
                <div className={style.stata_points}>

                {
                    newArr.map(item=>{
                      return(
                        <div key={Math.random()*2555}>
                          <div style={{backgroundColor:item.color, borderRadius:'50%',width:'6px', height:'6px', marginRight:10}}></div>
                          <div>{item.type} - ${item.total}</div>
                        </div>
                      )
                    })
                }
                </div>
            </div>
        </div>
    )
}