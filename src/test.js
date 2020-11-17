import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Test() {
    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };
    const element = (
        <h1>
            Hello, {user.firstName},{user.lastName}!
        </h1>
    );
    return (
        element
    );

}
export default Test;

