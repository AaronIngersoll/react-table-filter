import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Aarons react header", () => {
	render(<App />);
	const headerElement = screen.getByText(/Welcome to Aaron's assessment/i);
	expect(headerElement).toBeInTheDocument();
});
