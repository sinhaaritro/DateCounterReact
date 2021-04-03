import React from "react";
import logo from "../../logo.svg";

const MainNavigation = () => (
    <header className="w-1/3 flex flex-col">
        <img src={logo} className="" alt="Date Counter logo" />
        <nav className="flex-grow bg-gray-900 bg-opacity-25 rounded-r-xl w-3/4 my-8 pl-8 py-16">
            <ul className="text-6xl text-gray-100 h-full flex flex-col justify-evenly">
                <li>Counter</li>
                <li>Stats</li>
                <li>FAD</li>
                <li>About</li>
            </ul>
        </nav>
    </header>
);

export default MainNavigation;
