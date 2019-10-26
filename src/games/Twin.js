import React from "react";
import Header from "../Header";

export default function Twin() {
	const [state, changeState] = React.useState();

	const handleNameChange = evt => {
		changeState(evt.target.value);
	};

	const searchSimilar = async () => {
		const data = await (await fetch(
			`https://declarator.org/api/v1/search/person-sections/?name=${state}`
		),
		{
			headers: [
				["Content-Type", "application/x-www-form-urlencoded"],
				["Content-Type", "multipart/form-data"],
				["Content-Type", "text/plain"]
			]
		}).json();
		console.log(data);
	};
	console.log(state);
	return (
		<div>
			<Header></Header>
			<div className="visual-data">
				<h2 className="h2-visual" style={{ textAlign: "center" }}>
					Twin Game
				</h2>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					paddingTop: "100px"
				}}
			>
				<label>
					Name:
					<input
						type="text"
						value={state}
						onChange={handleNameChange}
						name="name"
					/>
				</label>
				<button onClick={searchSimilar}>Send</button>
			</div>
		</div>
	);
}
