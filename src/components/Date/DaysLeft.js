import React from "react";

const DaysLeft = (props) => {
    const numberOfDays = props.numberOfDays;
    const dayOrDays = numberOfDays === 1 ? "day" : "days";
    return (
        <div className="m-4 p-4 rounded bg-gray-900">
            <div className="flex justify-center text-5xl">
                <div className="py-2 pl-4">{numberOfDays}</div>
                <div className="p-2">{dayOrDays}</div>
            </div>
            <div className="flex justify-center text-3xl">
                <div className="">left</div>
            </div>
        </div>
    );
};

export default DaysLeft;
