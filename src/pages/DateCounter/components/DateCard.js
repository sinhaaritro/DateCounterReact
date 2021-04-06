import React from "react";

const DateCard = (props) => {
    const currentDay = props.currentDay;
    const currentMonth = props.currentMonth;
    const currentYear = props.currentYear;
    return (
        <div className="flex m-4 rounded bg-gray-900">
            <button type="button" className="p-4" onClick={props.dateDecreased}>
                -
            </button>

            <div>
                <div className="mt-4 mx-4 flex justify-between">
                    <button type="button" onClick={props.dateReset}>
                        Refresh Date
                    </button>
                    <div>DATE</div>
                </div>
                <div className="flex justify-center text-5xl">
                    <div className="p-4">{currentDay}</div>
                    <div className="py-4">-</div>
                    <div className="p-4">{currentMonth}</div>
                    <div className="py-4">-</div>
                    <div className="p-4">{currentYear}</div>
                </div>
            </div>
            <button type="button" className="p-4" onClick={props.dateIncreased}>
                +
            </button>
        </div>
    );
};

export default DateCard;
