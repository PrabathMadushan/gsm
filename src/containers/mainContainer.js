import React from "react";
import "./mainContainer.scss";
import Header from "../components/header/Header";
import List from "../components/list/List";
import NewList from "../components/new-list/NewList";

const MainContainer = () => {
 return(
   <div className="main-container-wrapper">
     <Header/>
     <div className="list-container">
        <List title='Backlogs'/>
        <List title='Current Sprint'/>
        <List title='Inprogress'/>
        <List title='block'/>
        <List title='bags'/>
        <List title='Tessting'/>
        <List title='Ready for verification'/>
        <List title='verified'/>
        <List title='done'/>
        {/* <NewList/> */}
     </div>
   </div>
 )
}

export default MainContainer;
