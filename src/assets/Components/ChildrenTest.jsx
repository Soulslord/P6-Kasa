import React, { useEffect } from 'react';

const ChildrenTest = ({propsTest, propsTestFunc}) => {

    console.log(propsTestFunc);

    useEffect(() => {
        console.log("use effect appelé");
        propsTestFunc('new value 84549');
    }, []);


    return (
        <div>
            <h1>SALUT</h1>
            <h2>{propsTest}</h2>
        </div>
    );
};

export default ChildrenTest;