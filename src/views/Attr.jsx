import React from 'react'
import '../assets/attr.css'
let isActive = true
let skill = 'react'
let isCheck = true
class Attr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            // <div className="box">
            //     JSX元素className操作
            // </div>
            // <div className={`box ${isActive ? 'active' : ''}`} >
            //     JSX元素className操作
            // </div>
            <div>
                  <div className={"box "+(isActive?'active':'')}></div>
                  <input type="text" value={skill}/>
                  <input type="text" defaultValue={skill}/>
                  <input type="checkbox" checked={isCheck}/>
                  <input type="checkbox" defaultChecked={isCheck}/>
            </div>
            
        );
    }
}

export default Attr;