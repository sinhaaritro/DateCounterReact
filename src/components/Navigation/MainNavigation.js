import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import NavigationList from "./NavigationList";

const MainNavigation = () => (
    <div className="lg:flex lg:justify-between lg:items-center">
        <NavLink to="/">
            <img
                src={logo}
                className="mx-auto lg:mx-0"
                alt="Date Counter logo"
            />
        </NavLink>
        <div className="hidden lg:block">
            <NavigationList />
        </div>
    </div>
);

export default MainNavigation;
