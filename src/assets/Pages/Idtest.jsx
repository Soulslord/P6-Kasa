import React, { useState } from 'react';
import ChildrenTest from '../Components/ChildrenTest';

const Idtest = () => {

    const [state1, setState1] = useState("test1");

    const modifyState = (valFromChildren) => {
        setState1(valFromChildren)
    };

    return (
        <div>
            <h1>TITTIE</h1>
            {/* <button>Modify state</button> */}
            <ChildrenTest propsTest={state1} propsTestFunc={modifyState} />
        </div>
    );
};

export default Idtest;