import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from '../components/Counter';
import Caculator from '../components/Caculator';

// const mapStateToProps = (state) => {
//     return {
//         value: state
//     };
// };
// const mapDispatchtoProps = (dispatch) => {
//     return {
//         onIncrement: (event) => {
//             dispatch({ type: 'INCREMENT' })
//         },
//         onDecrement: (event) => {
//             dispatch({ type: 'DECREMENT' })
//         }
//     };
// };
// const RootApp = connect(mapStateToProps, mapDispatchtoProps)(Counter);

const mapStateToProps = (state) => {
    console.log('1111111111111111111');
    console.log(state);
    return {
        data: state
    };
};
const mapDispatchtoProps = (dispatch) => {
    return {
        onCaculate: (event) => {
            dispatch({ type: 'CACULATE' });
        },
        onSelect: (event) => {
            dispatch({ type: 'CHANGE', calType: event.target.value});
        },
        onInput1: (event) => {
            console.log(event);
            dispatch({ type: 'INPUT1', param1: event.target.value});
        },
        onInput2: (event) => {
            dispatch({ type: 'INPUT2', param2: event.target.value});
        }
    };
};

const RootApp = connect(mapStateToProps, mapDispatchtoProps)(Caculator);

export default RootApp;
