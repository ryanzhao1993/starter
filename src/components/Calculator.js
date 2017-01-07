import React, { Component, PropTypes } from 'react';

class Calculator extends Component {
    render() {
        console.log('this.props====================');
        console.log(this.props);
        let { onCaculate, onSelect, data } = this.props;
        return (
            <div>
                <h1>计算器:</h1>
                <input type="text" defaultValue={data.param1} />
                <select onChange={ onSelect }>
                    <option value="0">+</option>
                    <option value="1">-</option>
                    <option value="2">*</option>
                    <option value="3">/</option>
                </select>
                <input type="text" defaultValue={data.param2} />
                <button className="btn btn-success" onClick={ onCaculate }>=</button>
                <span>{ data.result }</span>

            </div>
        );
    }
}

Calculator.propTypes = {

};
export default Calculator;
