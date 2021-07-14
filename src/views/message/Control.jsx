import React,{Component} from 'react'
//受控组件是通过value和onChange事件共同控制，与v-model原理相同
// onChange制作一件事，就是将value值响应给state
class Control extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'',
            msgList:[]
         };
    }
    
    handleVal=(e)=>{
        // 设置state中的msg
        this.setState({
            msg:e.target.value
        })

    }
    sendMsg=(e)=>{
        if(e.keyCode === 13){
            let {msg,msgList} = this.state;
            msgList.push(msg);
            this.setState({
                msgList
            })
        }
        
    }
    render() {
        let{msg,msgList}  = this.state;
        return (
            <div>
                <input type="text" value={msg} onChange={this.handleVal} onKeyUp={this.sendMsg}/>
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

export default Control;