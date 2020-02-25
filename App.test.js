import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  wait,
} from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import App from "./App";

jest.mock("./api/fetchShow");
console.log(mockFetchShow);

// use async/await
test("App fetches Show data and render data", async () => {
  mockFetchShow.mockResolvedValueOnce();

  const { getByText, queryAllByTestId, getByTestId } = render(<App />);

  const button = getByText(/select a season/i);
  fireEvent.click(button);

//   getByText(/we are fetching data/i);
//   await wait(() => {
//     getByTestId("mission-list");
//   });
//   expect(queryAllByTestId("mission")).toHaveLength(2);
// });
});