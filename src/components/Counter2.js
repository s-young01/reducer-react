import React, { useReducer } from 'react';

function reducer(state, action) {
    // 여러 action에 따라 상태를 업데이트 할 조건문 작성(if / switch)
    // action객체의 type이라는 key이름으로 접근(이 때, key이름은 마음대로 지정 가능!)
    switch(action.type) {
        case 'increase': // action객체의 type이 'increase'면
            return state + 1; // number + 1을 반환
        case 'decrease': // action객체의 type이 'increase'면
            return state - 1; // number - 1을 반환
        default: // 어느case에도 해당하는게 없으면 
            return state; // number 반환
    }
}

const Counter2 = () => {
    const [number, dispatch] = useReducer(reducer,0);
    // useReducer을 사용하기 위해 reducer함수를 생성해야 한다!
    const onIncrease = () => {
        // dispatch함수는 reducer함수의 action객체를 받아와 
        // 업데이트 된 상태 값을 대신 넘겨준다
        dispatch({
            type: 'increase'
        })
    }
    const onDecrease = () => {
        dispatch({
            type: 'decrease'
        })
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter2;