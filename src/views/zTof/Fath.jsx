import React,{Component} from 'react'
import Chil from './Chil'
class Fath extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            joblist:[
                {job:'初级前端工程师',salary:8000},
                {job:'中级前端工程师',salary:12000},
                {job:'高级前端工程师',salary:18000}
            ]
         };
    }
    // 子父通信，父级通过props将事件在调用子组件时传给子组件，子组件从props中提取事件，事件的相关操作在父组件中进行
    addSalary(idx){
        let {joblist} = this.state;
        joblist[idx].salary += 2000;
        this.setState({
            joblist:joblist
        })
       
    }
    render() {
        let {joblist} = this.state;
        return (
            <div>
                {
                    joblist.map(({job,salary},index)=>{
                        return <Chil job={job} salary={salary} key ={index} handleSalary={()=>{this.addSalary(index)}} idx={index}/>
                    })
                }
                
            </div>
        );
    }
}

export default Fath;