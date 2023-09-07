const express = require("express");
const app = express();
const getDayOfWeek = require("./utils/getDay");

//set port
const port = process.env.PORT || 3000;

const currentDate = new Date();
// const utcTime = currentDate.toISOString();
const current_day = getDayOfWeek();

app.get("/hngX-1", (req, res) => {
	const slack_name = req.query.slack_name;
	const track = req.query.track;

	// Check if both parameters are provided
	if (!slack_name || !track) {
		return res
			.status(400)
			.json({ error: "Both slack_name and track are required" });
	}

	// Create a JSON object
	const jsonObject = {
		slack_name,
		current_day,
		utc_time: currentDate.toISOString(),
		track,
		github_file_url:
			"https://github.com/nwekeKent/hngx-stage1/blob/main/app.js",
		github_repo_url: "https://github.com/nwekeKent/hngx-stage1",
		status_code: 200,
	};

	// Send the JSON object as the response
	res.json(jsonObject);
});

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
});
