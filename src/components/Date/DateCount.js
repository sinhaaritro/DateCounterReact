import React from "react";

const DateCount = (props) => {
    const dayCount = props.dayCount;
    const suffix = "th";
    return (
        <div className="m-4 p-4 rounded bg-gray-900">
            <div className="flex justify-center text-5xl">
                <div className="py-2 pl-4">{dayCount}</div>
                <div className="py-2">{suffix}</div>
                <div className="p-2">day</div>
            </div>
            <div className="flex justify-center text-3xl">
                <div className="">of the year</div>
            </div>
        </div>
    );
};

export default DateCount;
