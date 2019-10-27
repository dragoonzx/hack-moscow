import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			const scrollCheck = window.scrollY > 30;
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck);
			}
		});
	});
	return (
		<div style={{ height: "125px" }}>
			<div className={scroll ? "scroll-top" : "fixed-top"}>
				<div className="App">
					<img
						alt="logo"
						title="HackMoscow2019;)"
						src={require("./logomontazh.svg")}
					></img>
					<div className="menu">
						<ul className="menu-list">
							<Link to="/">
								<li
									className={props.active0 ? "active" : ""}
									onClick={() => console.log("about")}
								>
									About
								</li>
							</Link>
							<Link to="data">
								<li
									className={props.active1 ? "active" : ""}
									onClick={() => console.log("data")}
								>
									Visual Data
								</li>
							</Link>
							<Link to="contribute">
								<li
									className={props.active2 ? "active" : ""}
									onClick={() => console.log("contribution")}
								>
									Become a Donator
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
