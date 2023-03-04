import React from "react";
import {AppBar, Toolbar, Typography, styled} from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBar = ()=>{
    const Header = styled(AppBar)`
    background: rgb(123,7,7);
    background: linear-gradient(90deg, rgba(123,7,7,1) 4%, rgba(239,49,6,1) 100%, rgba(0,212,255,1) 100%);
    `

    const Tabs = styled(NavLink)`
        font-size: 20px;
        margin-right: 20px;
        color: inherit;
        text-decoration: none;
    `
    return(
        <>
            <Header position="static">
                <Toolbar>
                    <Tabs to="/">Student List</Tabs>
                    <Tabs to="/all">All Students</Tabs>
                    <Tabs to="/add">Add Students</Tabs>
                </Toolbar>
            </Header>
        </>
    );
}

export default NavBar;