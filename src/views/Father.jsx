import React,{Component} from 'react'
import Child from './Child'
import FChild from './FChild'
class Father extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                {/* //通过类组件进行父子通信 */}
                <Child jobname="前端开发" salary="8000"/>
            {/* 通过函数式组件进行父子通信 */}
                <FChild jobname="切图在" salary="7000"/>
            </div>
        );
    }
}

export default Father;