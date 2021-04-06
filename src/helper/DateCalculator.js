export const getDateCounts = (currentDate, currentMonth, currentYear) => {
    const fullDate = createDateFromDayMonthFullYear(
        currentDate,
        currentMonth,
        currentYear
    );

    const newYear = "1/1/" + fullDate.getFullYear();
    const newYearDate = new Date(newYear);
    const nextNewYear = "1/1/" + (fullDate.getFullYear() + 1);
    const nextNewYearDate = new Date(nextNewYear);
    const diffDays = Math.ceil(
        Math.abs(newYearDate - fullDate) / (1000 * 60 * 60 * 24)
    );
    const diffLeft = Math.ceil(
        Math.abs(nextNewYearDate - fullDate) / (1000 * 60 * 60 * 24)
    );
    return {
        diffDays: diffDays,
        diffLeft: diffLeft,
    };
};

export const createDateFromDayMonthFullYear = ({
    currentDate,
    currentMonth,
    currentYear,
}) => {
    var createdDate = new Date();
    createdDate.setFullYear(currentYear || createdDate.getFullYear());
    createdDate.setMonth(currentMonth || createdDate.getMonth());
    createdDate.setDate(currentDate || createdDate.getDate());
    return createdDate;
};
