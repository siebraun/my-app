import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

let btn = document.getElementById("btn"),
  count = 0;

btn.onclick = function () {
  count += 1;

  console.log(count);
};
