import React from "react";
import Header from "../Header";
import Chart from "react-apexcharts";
let json_data = require("../person10.json");

export default function Guess() {
	React.useEffect(() => {
		const searchSimilar = async () => {
			const data = await (await fetch(
				"https://declarator.org/api/v1/search/sections/?person=100"
			)).json();
			console.log(data.results[0].main.person);
			console.log(data.results.length);
		};
	}, []);

	return (
		<div>
			<Header></Header>
			<div className="visual-data">
				<h2 className="h2-visual" style={{ textAlign: "center" }}>
					Guess Income on Real Declaration Data
				</h2>
			</div>
			<Game></Game>
		</div>
	);
}

class Game extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userGuess: "",
			rightGuess: 4875,
			difference: 999,
			okay: false,
			options: {
				chart: {
					id: "guess income"
				},
				xaxis: {
					categories: [2006, 2009, 2010, 2011, 2012, 2013, 2014]
				}
			},
			series: [
				{
					name: "Задекларированный доход в тыс.рублей",
					data: [1224, 2077, 2078, 2083, 2114, 3655, 3990]
				}
			]
		};
	}
	componentDidMount() {
		const fetchData = async () => {
			let data = await (await fetch(
				"https://api.jsonbin.io/b/5db5276fade7b423ecadb130",
				{
					headers: {
						secret_key:
							"$2b$10$cQ1FHKToUeiBDvTEsMt8u.TnsQz6E2tUKIceKGx1vCV2wi7Wyw9Ae"
					}
				}
			)).json();
			console.log(data);
		};
		fetchData();
	}
	clicker = () => {
		let joker = [];
		for (let i = 0; i < this.state.series[0].data.length; i++) {
			joker.push(this.state.series[0].data[i] * 0);
		}
		let calculatedDifference = this.state.rightGuess - this.state.userGuess;
		this.setState({
			difference: calculatedDifference,
			okay: true,
			options: {
				...this.state.options,
				xaxis: {
					categories: [...this.state.options.xaxis.categories, 2015]
				}
			},
			series: [
				{
					...this.state.series[0],
					data: [...this.state.series[0].data, this.state.rightGuess]
				},
				{
					name: "Вы предположили",
					data: [...joker, this.state.userGuess]
				}
			]
		});
	};
	inputHandler = evt => {
		this.setState({ ...this.state, userGuess: evt.target.value });
	};
	restart = () => {
		this.setState({
			userGuess: "",
			difference: 999,
			okay: false,
			options: {
				chart: {
					id: "guess income"
				},
				xaxis: {
					categories: [2006, 2009, 2010, 2011, 2012, 2013, 2014]
				}
			},
			series: [
				{
					name: "Задекларированный доход в тыс.рублей",
					data: [1224, 2077, 2078, 2083, 2114, 3655, 3990]
				}
			]
		});
	};
	render() {
		console.log(this.state.userGuess);
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
					paddingTop: "40px"
				}}
			>
				<Chart
					options={this.state.options}
					series={this.state.series}
					type="bar"
					width={500}
					height={320}
				/>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-around"
					}}
				>
					<h2 style={{ fontSize: "20px" }} className="h2-text">
						Try to guess Vasya Pupkin`s income in 2015 year
					</h2>
					<input
						value={this.state.userGuess}
						onChange={this.inputHandler}
						style={{ outline: "0" }}
					></input>
					<button
						style={{ height: "50px" }}
						style={this.state.okay ? { visibility: "hidden" } : {}}
						onClick={this.clicker}
						className="primary-button"
					>
						GUESS
					</button>
					{this.state.difference !== 999 &&
					(this.state.difference > -200 && this.state.difference < 200) ? (
						<div className="p-questions ">
							Вы угадали!
							<button className="primary-button" onClick={this.restart}>
								Сыграть ещё?
							</button>
						</div>
					) : (
						""
					)}
					{this.state.difference !== 999 &&
					(this.state.difference <= -200 || this.state.difference >= 200) ? (
						<div className="p-questions ">
							Увы, не близко!
							<button className="primary-button" onClick={this.restart}>
								Сыграть ещё?
							</button>
						</div>
					) : (
						""
					)}
				</div>
			</div>
		);
	}
}
