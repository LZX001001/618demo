import React, { Component } from 'react';
import gift from './gift.png';
import empty from './empty.png'
import click from './click.png'
import './index.css'

class index extends Component<any,any>{

   
    click = ()=>{
           
        //制作一个抽奖的弹窗
        alert('抽奖开始~~~~')



    }

    render() {

        const {isEmpty} = this.props

        return (
            <div className="container">
                <div className="gift">
                    <img src={gift} alt="gift" />
                    {
                        isEmpty ?  <button  className= "empty"  /> :  <button  className= "click" onClick={this.click}  />
                    }  
                    
                    <div className="giftResult" >
                        <p>恭喜你，中奖啦！</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default index;