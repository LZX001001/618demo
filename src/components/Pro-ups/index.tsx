import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
  
    // 这是一个自定义内容的弹框
  export default  class SigoModal extends Component<any,any> {
      static propTypes: {content: PropTypes.Validator<(...args: any[]) => any>; okbtn: PropTypes.Validator<(...args: any[]) => any>; onClose: PropTypes.Validator<(...args: any[]) => any>; styles: PropTypes.Requireable<object>; };
      constructor(props:any) {
        super(props)
        this.state = {}
      }
    
    
      onClose = () => {
        // 执行关闭的回调
        this.props.onClose()
        //  移除模态框
        const modal : any = document.getElementById('condiv1')
        document.body.removeChild(modal)
      }
    
      render() {
        let { content,okbtn,marginTop,hasBottom,styles,showX } = this.props;
        return (
          <div className='mask'>
           {hasBottom?hasBottom():null}
            <div className="modal" style={styles || {marginTop:marginTop?marginTop:'1.6rem'}}>
              <div className='content'>{content()}
              <button onClick={this.onClose} className="icon_x">我知道了</button>
              </div>
              <div className='btn' onClick={this.onClose}>{okbtn()}</div>
            
             
            </div>
            </div>
        )
      }
    }
    
    // props类型检查
    SigoModal.propTypes  = {
      content: PropTypes.func.isRequired,
      okbtn: PropTypes.func.isRequired,
      onClose: PropTypes.func.isRequired,
      styles: PropTypes.object
    }
    
    export function sigomodal(obj:any) {
      let ConDiv = document.createElement('div');
      ConDiv.id = 'condiv1'
      document.body.appendChild(ConDiv);
      let props = {
        content: obj.content,
        okbtn:obj.okbtn,
        onClose:obj.onClose,
        marginTop: obj.marginTop,
        hasBottom: obj.hasBottom,
        styles:obj.styles,
        showX:obj.showX,
        timeout: obj.timeout
      }
      ReactDOM.render(<SigoModal {...props} />, ConDiv);
    }
