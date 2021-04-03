import React from "react";
import { NavLink } from "react-router-dom";

const NavigationList = () => {
    return (
        <nav className="lg:my-auto">
            <ul className="text-lg text-gray-100 flex justify-evenly">
                <li className="flex">
                    <NavLink
                        className="flex-1 hover:underline p-6 lg:text-2xl"
                        to="/customdate"
                    >
                        Counter
                    </NavLink>
                </li>
                <li className="flex">
                    <NavLink
                        className="flex-1 hover:underline p-6 lg:text-2xl"
                        to="/stats"
                    >
                        Stats
                    </NavLink>
                </li>
                <li className="flex">
                    <NavLink
                        className="flex-1 hover:underline p-6 lg:text-2xl"
                        to="/about"
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationList;
