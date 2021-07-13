import React from 'react';
import '../assets/base.css'
let str = '学习react项目'
class Base extends React.Component {
    render() {
        return (
            <div>
                <h3>{str}</h3>
            </div>
        );
    }
}

export default Base;