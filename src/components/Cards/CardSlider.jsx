import { styled } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import sl1 from '../../images/sl1.png'
import sl2 from '../../images/sl2.png'
import sl3 from '../../images/sl3.png'
import style from './style.module.css'
import { Divider } from '@material-ui/core';
import logo1 from '../../images/logo1.png'
import logo2 from '../../images/logo2.png'
import logo3 from '../../images/logo3.png'
import logo4 from '../../images/logo4.png'
import logo5 from '../../images/logo5.png'
import logo6 from '../../images/logo6.png'
export default function CardSlider(){
    const cards = [sl1,sl2,sl3,sl1,sl2,sl3,sl1,sl2,sl3,sl1,sl2,sl3]
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const platforms = [
        {id:1,image:logo1, title:'Dribble subscr...',price:'15'},
        {id:2,image:logo2, title:'Icloud 50gb',price:'12.5'},
        {id:3,image:logo3, title:'Netflix subscr...',price:'59'},
        {id:4,image:logo4, title:'PayPal',price:'2.509'},
        {id:5,image:logo5, title:'Instagram',price:'11.658'},
        {id:6,image:logo6, title:'Danny M',price:'5.500'},
      ]
      
    return(
      <>
      <div className={style.card_slider} > 
        <Carousel responsive={responsive}>
            {
              cards.map(item=>{
                return <div key={item+Math.random()*255} className={style.card} style={{backgroundImage:`url(${item})`}}></div>
              })
            }
        </Carousel>
      </div>
      <Divider/>
      <div className={style.platforms}>
        {
          platforms.map(item=>{
            return(
              <div key={item.id} className={style.platform}>
                <img src={item.image} alt="" />
                <div>
                  <p>{item.title}</p>
                  <span>$ {item.price}</span>
                </div>
              </div>
            )
          })
        }
      </div>
      </>
    )
}