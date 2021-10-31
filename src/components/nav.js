import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useState } from "react";
import Hamburger from "./hamburger";



const Nav = (props) => {





    return (
        <div className="nav">
            <Hamburger />
            <Link className="nav-link" to="/">
                <div>Home</div>
            </Link>
            <Link className="nav-link" to="/about">
                <div>About</div>
            </Link>
            <Link className="nav-link" to="/stocks">
                <div>Stocks</div>
            </Link>
            <Link className="nav-link" to="/search">
                <div>Search</div>
            </Link>

            
        </div>
    )
}

export default Nav