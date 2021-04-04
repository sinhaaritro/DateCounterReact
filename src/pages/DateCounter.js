import DateCard from "../components/Date/DateCard";
import DateCount from "../components/Date/DateCount";
import DaysLeft from "../components/Date/DaysLeft";

const DateCounter = () => (
    <div className="flex flex-col h-full justify-center items-center text-center text-gray-200">
        <div className="h-8 invisible">Nothing Here</div>
        <DateCard currentDay="03" currentMonth="04" currentYear="2021" />
        <div className="flex flex-wrap justify-center">
            <DateCount dayCount={92} />
            <DaysLeft numberOfDays={272} />
        </div>
    </div>
);

export default DateCounter;
