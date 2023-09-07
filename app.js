const express = require("express");
const app = express();
const port = 3000;
const getDayOfWeek = require("./utils/getDay");

const currentDate = new Date();
// const utcTime = currentDate.toISOString();
const current_day = getDayOfWeek();

app.get("/hng-1", (req, res) => {
	const slack_name = req.query.slack_name;
	const track = req.query.track;

	// Check if both parameters are provided
	if (!slack_name || !track) {
		return res
			.status(400)
			.json({ error: "Both param1 and param2 are required" });
	}

	// Create a JSON object
	const jsonObject = {
		slack_name,
		current_day,
		utc_time: currentDate,
		track,
		status: 200,
	};

	// Send the JSON object as the response
	res.json(jsonObject);
});

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
});
