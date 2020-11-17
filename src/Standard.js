import React, {useEffect,useState} from "react";
//import {useDispatch} from 'react-redux';
import axios from 'axios';
//import {useState} from 'react';
//import React from "react";
//import React ,{useEffect} from 'react';

// axios.defaults.headers.post['Content-Type'] = 'application/json';

function Standard() {
    const [code,setCode]=useState(500);
    const [data,setData]=useState(0);
    useEffect(()=>{
            axios.post('/quality/v1/standard/save',{
                columnCName:'名称',
                columnName:'ss',
                columnType:0,
                remark:'备注'
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








