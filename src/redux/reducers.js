// reducer 纯函数
// initState, action
const counter = (count = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return count + 1;
        case 'DECREMENT':
            return count - 1;
        default:
            return count;
    }
};

const calculator = (data = {param1: 0, param2: 0, calType: 0, result: 0}, action) => {
    switch (action.type) {
        case 'CACULATE':
            let calType = Number(data.calType);
            if (calType === 0) {
                data.result = data.param1 + data.param2;
            } else if (calType === 1) {
                data.result = data.param1 - data.param2;
            } else if (calType === 2) {
                data.result = data.param1 * data.param2;
            } else if (calType === 3) {
                data.result = data.param1 / data.param2;
            }
            console.log(data);
            return data;
        case 'CHANGE':
            data.calType = Number(action.calType);
            console.log(data);
            return data;
        case 'INPUT1':
            data.param1 = Number(action.param1);
            console.log(data);
            return data;
        case 'INPUT2':
            data.param2 = Number(action.param2);
            console.log(data);
            return data;
        default:
            return data;
    }
};

// export default counter;
export default calculator;
