import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  wait
} from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import App from "./App";

jest.mock("./api/fetchShow");
console.log(mockFetchShow);

const episodes = {
  season1: [{ number: 1 }, { number: 2 }, { number: 3 },{number: 4},{number: 5},{number: 6},{number: 7},{number: 8},]
};

// use async/await
test("App fetches Show data and render data", async () => {
  mockFetchShow.mockResolvedValueOnce(episodes);

  const { getByText, queryAllByTestId, getByTestId } = render(<App />);

  const button = getByText(/select a season/i);
  fireEvent.click(button);

    await wait(() => {
      getByTestId("episodes");
    });
    expect(queryAllByTestId("episodes")).toHaveLength(8);
  });
