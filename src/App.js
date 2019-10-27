import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contribution from "./Contribution";
import VisualData from "./VisualData";
import Genius from "./games/Genius";
import Twin from "./games/Twin";
import Guess from "./games/Guess";

function About() {
	const games = React.useRef(null);
	return (
		<div>
			<Header active0></Header>
			<div className="mainInfo">
				<h1
					style={{
						color: "#2c302f",
						fontWeight: "800",
						fontSize: "2.25rem",
						lineHeight: "3rem",
						letterSpacing: ".01875rem",
						fontFamily: "'Montserrat', sans-serif"
					}}
				>
					Visual Stories
				</h1>
				<p
					style={{
						margin: "15px 30px 30px 0px",
						color: "#606665",
						width: "30%"
					}}
					className="mainText"
				>
					Welcome to Visual Stories, where everyone can see visualisation of the
					data on income and asset of Russian officials, provided by
					declarator.org!
				</p>
				<button
					style={{ width: "15%" }}
					onClick={() => games.current.scrollIntoView()}
					className="primary-button"
				>
					Go!
				</button>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "350px",
					textAlign: "center",
					color: "#606665"
				}}
			>
				<img className="picture-1" src={require("./picture1.png")}></img>
			</div>

			<div
				ref={games}
				className="section-stories "
				style={{ height: "200px", position: "relative" }}
			>
				<div
					style={{
						position: "relative",
						color: "#fff",
						padding: "40px 30px 30px 30px"
					}}
					className="cases"
				>
					<h2 className="h2-text">Featured Games</h2>
					<a className="link-icon" title="View more Cases">
						View more games
					</a>
				</div>
				<div className="cards" style={{ color: "#606665" }}>
					<Link to="guess">
						<div className="card">
							<div className="cardJ">
								<div className="card-top0"></div>
								<div className="card-middle0"></div>
								<div className="card-bottom">
									<h3 style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
										Guess Income
									</h3>
								</div>
							</div>
						</div>
					</Link>
					<Link to="twin">
						<div className="card">
							<div className="cardJ">
								<div className="card-top1"></div>
								<div className="card-middle1"></div>
								<div className="card-bottom">
									<h3 style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
										Deputat`s twin
									</h3>
								</div>
							</div>
						</div>
					</Link>
					<Link to="genius">
						<div className="card">
							<div className="cardJ">
								<div className="card-top2"></div>
								<div className="card-middle2"></div>
								<div className="card-bottom">
									<h3 style={{ fontFamily: '"Source Sans Pro", sans-serif' }}>
										Fun Facts
									</h3>
								</div>
							</div>
						</div>
					</Link>
				</div>
			</div>
			<div style={{ height: "550px" }}></div>
			<div className="benefits-section">
				<div style={{ width: "40%" }}>
					<span className="ben-text">Benefits</span>
					<h2 className="hero-text">Why we need It?</h2>
					<p className="p-hero-text">
						Our goal is to create a simple and effective tool for journalists
						and activists involved in public control. We want to be sure that
						income and property are fully declared and that the increase in
						property is comparable to official income.
					</p>
				</div>
				<div className="benefits-explain" style={{ paddingTop: "0px" }}>
					<div className="benefits-0">
						<div>
							<img
								style={{ width: "70px", height: "70px" }}
								src={require("./open_data.svg")}
							></img>
							<h5 className="h5-ben">Open Data/API</h5>
							<p className="p-ben-text">
								People should have access to knowledge, especially to those
								related to public administration
							</p>
						</div>
						<div style={{ marginTop: "50px" }}>
							{" "}
							<img
								style={{ width: "70px", height: "70px" }}
								src={require("./voice.svg")}
							></img>
							<h5 className="h5-ben">Everybody Have a Voice</h5>
							<p className="p-ben-text">
								We have the right to show our active citizenship, our service
								simplify and help to do this.
							</p>
						</div>
					</div>
					<div className="benefits-1" style={{ paddingLeft: "30px" }}>
						<div>
							{" "}
							<img
								style={{ width: "70px", height: "70px" }}
								src={require("./easy_access.svg")}
							></img>
							<h5 className="h5-ben">Easy Access</h5>
							<p className="p-ben-text">
								If you are a professional journalist or just want to see
								beautiful graphs and charts, then here you will find exactly
								what you are looking for
							</p>
						</div>
						<div style={{ marginTop: "50px" }}>
							{" "}
							<img
								style={{ width: "70px", height: "70px" }}
								src={require("./share_inj.svg")}
							></img>
							<h5 className="h5-ben">Share Injustice</h5>
							<p className="p-ben-text">
								The more people involved in the project, the closer we are to a
								fair future
							</p>
						</div>
					</div>
				</div>
			</div>
			<div style={{ height: "150px" }}></div>
			<div className="testimonials">
				<div className="testi-left">
					<span className="testi-text">Prototype</span>
					<h2 className="testi-hero">Try and Help Us</h2>
					<p className="p-testi-text">
						Play in our data visualisation games, look at open data and
						participate in contribution
					</p>
				</div>
			</div>
			<div style={{ height: "300px" }}></div>
			<div className="contributor">
				<div className="author">
					<h2 className="contri-hero">Check an Offician</h2>
					<p className="p-contri-text">
						You can check an official governor by predicting their income and
						checking it with our Data
					</p>
					<Link to="guess">
						<button className="primary-button">Go and Check!</button>
					</Link>
				</div>
				<img className="picture-2" src={require("./picture2.png")}></img>
			</div>
			<div style={{ height: "100px" }}></div>
			<div className="footer">
				<div className="footer-logo">
					<p className="p-footer">
						Powered by{" "}
						<a href="https://beta.russianhackers.org/">
							<img src={require("./footer__logo.svg")}></img>
						</a>
					</p>
				</div>
				<p className="contact">
					Contact us: <span className="email">Hello@DataStories.ru</span>
				</p>
				<div className="social">
					<a href="https://facebook.com">
						<img src={require("./facebook.svg")}></img>
					</a>
					<a href="https://twitter.com">
						<img src={require("./twitter.svg")}></img>
					</a>
					<a href="https://vk.com">
						<img src={require("./vk.svg")}></img>
					</a>{" "}
				</div>
			</div>
		</div>
	);
}

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/data">
					<VisualData />
				</Route>
				<Route path="/contribute">
					<Contribution />
				</Route>
				<Route path="/guess">
					<Guess />
				</Route>
				<Route path="/twin">
					<Twin />
				</Route>
				<Route path="/genius">
					<Genius />
				</Route>
				<Route path="/">
					<About />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
