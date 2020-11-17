import React, {useEffect,useState} from "react";
//import {useDispatch} from 'react-redux';
import axios from 'axios';
//import {useState} from 'react';
//import React from "react";
//import React ,{useEffect} from 'react';

// axios.defaults.headers.post['Content-Type'] = 'application/json';

function Standard() {
    //const dispatch=useDispatch();
    //const code=null;
    const [code,setCode]=useState(500);
    const [data,setData]=useState(0);
    useEffect(()=>{
            axios.post('/quality/v1/standard/save',{
                columnCName:'十多素2',
                columnName:'ss',
                columnType:0,
                remark:'sdsdsdsd'
            })
                .then(function (response) {
                    console.log(response);
                    console.log(response.data);
                    console.log(response.code);
                    //const {itme,setItem}=useState(4);
                    //setCode(response.data);
                    //setData(response.data);
                    //code=response.code;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },[]

    );
    return(
        //this.response.data;
        <div>{data}</div>


    );
}

export default Standard;








