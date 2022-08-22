import React, { useState,useEffect } from "react";
import {WithLoading} from '../../hoc/WithLoading';
import {Employee} from '../pages/Employee';

const LoadingUser=WithLoading(Employee);

export const Department=()=>{

    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000);
    })

    return(
        <>
            <LoadingUser loading={loading}/>
        </>
    )

}