import React, { Component } from 'react';
import head from './head.png';
import record from './record.png';
import './index.css'

class Header extends Component {

    state = {currentScore:299999, useScore:1000 }

    render() {

        const {currentScore,useScore} = this.state
        return (
            <div>
                 <img src={head} className='head'  alt="head" />
                <img src={record} className='record' alt="record" />     
                <br />
                <hr     className='hrdot' />
                <div className='text'>
                  <span style={{color: '#5B6068',fontSize:'20px'}}>当前积分剩余 : {currentScore}  &nbsp; &nbsp;</span> <span style={{color:'#E96648',fontSize:'20px'}}>每抽一次消耗{useScore}积分</span>
                </div>
            </div>
        );
    }
}

export default Header;