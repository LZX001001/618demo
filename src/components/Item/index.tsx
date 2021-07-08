import React, { Component } from 'react';
import gift from './gift.png';
import './index.css'
import { sigomodal } from '../Pro-ups';
class index extends Component<any,any>{

     
        // //制作一个抽奖的弹窗
    handleClick =()=>{
        return sigomodal({
            marginTop: '20%',
            title:()=>{},
            content:()=>{
              return (
                <div style={{textAlign:'center',padding:'1.333vw 0'}}>
                  <img src={gift} style={{width:'12vw',height:'12vw'}} alt="gift"/>
                  <p style={{fontWeight:700,fontSize:'2.667vw',color:'red',margin:'.16rem 0 1.067vw'}}>啊哦，积分不足</p>
                 
                </div>
              )
            },
            okbtn:()=>{},
            onClose:()=>{},
            showX: true,
            timeout: 3000
          })
    }
    

    render() {

        const {isEmpty} = this.props

        return (
            <div className="container">
                <div className="gift">
                    <img src={gift} alt="gift" />
                    {
                        isEmpty ?  <button  className= "empty"  /> :  <button  className= "click" onClick={this.handleClick}  />
                    }  

                </div>
            </div>
        );
    }
}

export default index;
