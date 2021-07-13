import React from 'react';

function FChild(props) {
    return (
        <div>
            函数式组件父子通信通过props参数
            <h3>部门名称：{props.jobname}</h3>
            <h6>工资：{props.salary}</h6>
        </div>
    );
}

export default FChild;