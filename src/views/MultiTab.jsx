import React,{Component} from 'react'
import '../assets/tab.css'
class MultiTab extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tabs:['首页','产品介绍','上品折扣','公司简介','联系我们'],
            curTabIdx:0
         };
    }
    handleTab=(index)=>{
        this.setState({
            curTabIdx:index
        })
    }
    render() {
        let {tabs,curTabIdx} = this.state;
        
        return (
            <div>
               <ol>
                  {
                      tabs.map((item,index)=>{
                          return <li key={index} className={index===curTabIdx?'active':''} onClick={()=>{this.handleTab(index)}}>
                              {item}
                          </li>
                      })
                  }
               </ol>
               <ul>
                   {
                       tabs.map((item,index)=>{
                          let ele = index === curTabIdx?
                           <li>{item}的内容</li>
                           :''
                           return ele;
                       })
                   }
               </ul>
            </div>
        );
    }
}

export default MultiTab;