import React from 'react'
import '../assets/tab.css'
class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isActive:true
         };
    }
    handleTab = (bool=true)=>{
       this.setState({
           isActive:bool
       })
    }
    render() {
        let {isActive}= this.state;
        return (
            <div>
                <ol>
                    <li className={isActive?'active':''} onClick={()=>{this.handleTab()}}>导航一</li>
                    <li className={!isActive?'active':''} onClick={()=>{this.handleTab(false)}}>导航二</li>
                </ol>
                <ul>
                    {
                      isActive?
                      <li>内容一</li>
                      :
                      <li>内容二</li>
                    }
                </ul>
            </div>
        );
    }
}

export default Tab;