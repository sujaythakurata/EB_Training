import React from "react";
import { Routes, Route } from "react-router-dom";

const Main  = React.lazy(()=>import("./main/Main"));
const ErrorHandeling  = React.lazy(()=>import("./errorHandeling/ErrorHandeling"));
const Form  = React.lazy(()=>import("./form/Form"));
const ReactPage  = React.lazy(()=>import("./react/ReactPage"));
const ReduxMain  = React.lazy(()=>import("./redux/ReduxMain"));
const Html  = React.lazy(()=>import("./html/Html"));
const Js  = React.lazy(()=>import("./js/Js"));
const CardMenu  = React.lazy(()=>import("./cardmenu/CardMenu"));
const ReduxPage  = React.lazy(()=>import("./redux/Redux"));
const ReduxThunk  = React.lazy(()=>import("./redux/ReduxThunk"));


export const Home = ()=>{
  return (
    <Routes>
        <Route path="/" element={<Main/>}>
          <Route index  element={<CardMenu/>}></Route>
          <Route path="react"  element={<ReactPage/>}></Route>
          <Route path="form"   element={<Form/>}></Route>
          <Route path="html"  element={<Html/>}></Route>
          <Route path="js"    element={<Js/>}></Route>
          <Route path="error"  element={<ErrorHandeling/>}></Route>
          <Route path="redux"  element={<ReduxMain/>}>
            <Route path="basic" element={<ReduxPage/>}/>
            <Route path="thunk" element={<ReduxThunk/>}/>
          </Route>       
        </Route>
    </Routes>

  );
};