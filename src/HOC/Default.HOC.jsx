import React from "react";
import { Route } from "react-router-dom";       
import DefaultLayout from "../layouts/Default.layout";
const DefaultHOC =({component:Components,...rest}) =>{
    return (
   <div>
    <Route {...rest} component={(props)=>(
    <DefaultLayout>
        <Components{...props}/>
    </DefaultLayout>
    )}
    />
   </div>
    );
}

export default DefaultHOC;