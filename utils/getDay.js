// Convert the integer to the name of the day
const daysOfWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const getDay = () => {
	// Create a new Date object
	const currentDate = new Date();

	// Get the current day as an integer (0 for Sunday, 1 for Monday, etc.)
	const currentDay = currentDate.getDay();

	let currentDayName = daysOfWeek[currentDay];

	return currentDayName;
};

module.exports = getDay;
