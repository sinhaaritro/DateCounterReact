import DateCard from "./components/DateCard";
import DateCount from "./components/DateCount";
import DaysLeft from "./components/DaysLeft";
import React, { useState, useEffect } from "react";
import {
    getDateCounts,
    createDateFromDayMonthFullYear,
} from "../../helper/DateCalculator";

function DateCounter() {
    const [currentDate, setCurrentDate] = useState(0);
    const [currentMonth, setCurrentMonth] = useState(0);
    const [currentYear, setCurrentYear] = useState(0);
    const [diffDays, setDiffDays] = useState(0);
    const [diffLeft, setDiffLeft] = useState(0);

    const setDateMonthYear = (date) => {
        setCurrentDate(date.getDate());
        setCurrentMonth(date.getMonth());
        setCurrentYear(date.getFullYear());
    };

    useEffect(() => {
        const date = createDateFromDayMonthFullYear({});
        setDateMonthYear(date);
    }, []);

    useEffect(() => {
        const { diffDays, diffLeft } = getDateCounts({
            currentDate,
            currentMonth,
            currentYear,
        });
        setDiffDays(diffDays);
        setDiffLeft(diffLeft);
    }, [currentDate, currentMonth, currentYear]);

    const dateIncreased = () => {
        const fullDate = createDateFromDayMonthFullYear({
            currentDate,
            currentMonth,
            currentYear,
        });
        fullDate.setDate(fullDate.getDate() + 1);
        setDateMonthYear(fullDate);
    };

    const dateDecreased = () => {
        const fullDate = createDateFromDayMonthFullYear({
            currentDate,
            currentMonth,
            currentYear,
        });
        fullDate.setDate(fullDate.getDate() - 1);
        setDateMonthYear(fullDate);
    };

    const dateReset = () => {
        const fullDate = createDateFromDayMonthFullYear({});
        setDateMonthYear(fullDate);
    };

    return (
        <div className="flex flex-col h-full justify-center items-center text-center text-gray-200">
            <div className="h-8 invisible">Nothing Here</div>
            <DateCard
                currentDay={currentDate}
                currentMonth={currentMonth + 1}
                currentYear={currentYear}
                dateDecreased={dateDecreased}
                dateIncreased={dateIncreased}
                dateReset={dateReset}
            />
            <div className="flex flex-wrap justify-center">
                <DateCount dayCount={diffDays} />
                <DaysLeft numberOfDays={diffLeft} />
            </div>
        </div>
    );
}

export default DateCounter;
