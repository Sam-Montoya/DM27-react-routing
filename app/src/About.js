import React from 'react';
import { Link } from 'react-router-dom';

export default function (props) {
    return (
        <div>
            <h1>This is the about page</h1>
            <h3>I do nothing all day.</h3>
            <Link to='/about/faq'>FAQ</Link>
            <Link to='/about/company'>Company</Link>
            {props.children}
        </div>
    )
}