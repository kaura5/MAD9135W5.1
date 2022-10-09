import React from 'react';
import { useParams } from 'react-router-dom';

function Project() {
    let param = useParams();

    return (<h1>Project {param.x}</h1>)
}

export default Project;