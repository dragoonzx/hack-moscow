import React from "react";
import Header from "./Header";

export default function Contribution() {
	return (
		<div>
			<Header active2></Header>
			<div className="contribution-header">
				<h2 className="contribution-text" style={{ textAlign: "center" }}>
					Donate to support our non-commercial project
				</h2>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "250px"
				}}
			>
				<iframe
					src="https://money.yandex.ru/quickpay/button-widget?targets=Transparency%20International&default-sum=100&button-text=14&yamoney-payment-type=on&button-size=l&button-color=white&successURL=&quickpay=small&account=410014758296848&"
					width="287"
					height="48"
					frameborder="0"
					allowtransparency="true"
					scrolling="no"
				></iframe>
			</div>
		</div>
	);
}
