import React from "react";

const DateCard = (props) => {
    const currentDay = props.currentDay;
    const currentMonth = props.currentMonth;
    const currentYear = props.currentYear;
    return (
        <div className="m-4 rounded bg-gray-900">
            <div className="mt-4 mx-4 flex justify-between">
                <div>Refresh Btn</div>
                <div>CURRENT DATE</div>
            </div>
            <div className="flex justify-center text-5xl">
                <div className="p-4">{currentDay}</div>
                <div className="py-4">-</div>
                <div className="p-4">{currentMonth}</div>
                <div className="py-4">-</div>
                <div className="p-4">{currentYear}</div>
            </div>
        </div>
    );
};

export default DateCard;
