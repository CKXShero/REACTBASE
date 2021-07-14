import React,{Component,createRef} from 'react'
//非受控组件通过createRef操作真实DOM
// createRef使用，先在constructor中定义，再在dom中进行绑定，最后再调用
class NoControl extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msgList:['您好！','您在干嘛？']
         };
        this.OInput = createRef();
    }
    sendMsg = (e)=>{
        if(e.keyCode === 13){
            let val = this.OInput.current.value;
            let {msgList} = this.state
            msgList.push(val);
            this.setState({
                msgList
            })
            console.log(this.OInput.current.value);

        }
    }
    render() {
        let {msgList} = this.state;
        return (
           <div>
               <input type="text" ref={this.OInput} onKeyUp={this.sendMsg}/>
               <ul>
                   {
                       msgList.map((item,index)=>{
                           return <li key={index}>{item}</li>
                       })
                   }
               </ul>
           </div> 
        );
    }
}

export default NoControl;