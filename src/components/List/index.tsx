import React, { Component } from 'react';
import Item from '../Item'
import './index.css'

class index extends Component {

    readonly  state = {
        items:[
           {id:'001', isEmpty: false, sum:100 },
           {id:'002',  isEmpty: true, sum:0},
           {id:'003', isEmpty: false, sum:100},
           {id:'004', isEmpty: false, sum:100},
           {id:'005', isEmpty: false, sum:100},
           {id:'006', isEmpty: false, sum:100},
           {id:'007',  isEmpty: true, sum:0},
           {id:'008', isEmpty: false, sum:100},
           {id:'009', isEmpty: false, sum:100},
           {id:'010', isEmpty: false, sum:100},
           {id:'011', isEmpty: false, sum:100},
        ]
    }

    addItem = (item: any)=>{
		const {items} = this.state
		const newItems = [item,...items]
		this.setState({items:newItems})
	}
  
//    updateItem = (id, num) =>{
//        const {items} = this.state
//        const newItems = items.map((item)=>{
//            if(item.id === id ){
//                item.sum += num
//                if(item.sum >= 0)    return item
//                else console.log('Error: sum should not smaller than 0')
//            } 
//        })
//        this.setState({items:newItems})
//    }

//    delItem = (id: string) =>{
//        const {items} = this.state
//        const {newItems} = items.filter(item => {
//            return item.id !== id
//        })
//        this.setState({items:newItems})
//    }



    render() {

        const {items} = this.state

        return (
            <div className="list">
                {
					items.map( item =>{
						return <Item  {...item} />
					})
				}
            </div>
        );
    }
}

export default index;