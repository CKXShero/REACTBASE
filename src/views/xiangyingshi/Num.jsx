import React,{Component} from 'react'
class Num extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            num:0,
         };
    }
    handleCount = (num)=>{
        num = num+1;
        this.setState({
            num:num
        })
    }
    render() {
        let {num} = this.state;
        return (
            <div>
                <h3>{num}</h3>
                <button onClick={()=>{this.handleCount(num)}}>一共点击了{num}次</button>
            </div>
        );
    }
}

export default Num;