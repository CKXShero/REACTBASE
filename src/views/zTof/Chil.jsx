import React,{Component} from 'react'
class Chil extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h3>部门名称：{this.props.job}</h3>
                <h4>工资待遇：{this.props.salary}</h4>
                <button onClick={()=>{this.props.handleSalary(this.idx)}}>提薪</button>
            </div>
        );
    }
}

export default Chil;