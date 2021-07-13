import React,{Component} from 'react'
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                {/* //通过类组件进行父子通信 */}
                类组件父子通信通过this.props
                <h3>部门名称：{this.props.jobname}</h3>
                <h6>工资：{this.props.salary}</h6>
            </div>
        );
    }
}

export default Child;