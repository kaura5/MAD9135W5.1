import React from 'react';

import { Link, Outlet } from 'react-router-dom';

function ProjectList() {

    return (
        <>
            <nav>
                <Link to="/projects/1">Project 1</Link>
                <Link to="/projects/2">Project 2</Link>
                <Link to="/projects/3">Project 3</Link>
            </nav>
            <Outlet />
        </>


    )
}

export default ProjectList;