import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
	console.log(wrapper.debug());
});

test("get item by id", () => {
	const { getByTestId } = render(<App />);
	expect(getByTestId(/app/i)).toBeInTheDocument();
});
