import { screen, render } from "@testing-library/react";
import UsersPage from "../../../../pages/UsersPage/UsersPage";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// setting up Mock in axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("UsersPage", () => {
  // POSITIVE SCENARIO
  it("renders UsersPage component properly with api data [MOCKING]", async () => {
    // Let's have the mock data similar to that of response
    const userList = [
      {
        id: 1,
        name: "John",
        phone: "23452353245"
      },
      {
        id: 2,
        name: "Steve",
        phone: "5646776"
      }
    ];

    mockedAxios.get.mockResolvedValue({ data: userList });
    render(
      <BrowserRouter>
        <HelmetProvider>
          <UsersPage />
        </HelmetProvider>
      </BrowserRouter>
    );

    expect(await screen.findByText(/John/i)).toBeInTheDocument();
    expect(await screen.findByText(/23452353245/)).toBeInTheDocument();

    expect(await screen.findByText(/Steve/i)).toBeInTheDocument();
    expect(await screen.findByText(/5646776/)).toBeInTheDocument();
  });

  // NERGATIVE TESTING
  it("renders error in users comp when API throws error [MOCKING]", async () => {
    mockedAxios.get.mockRejectedValue("");
    render(
      <BrowserRouter>
        <HelmetProvider>
          <UsersPage />
        </HelmetProvider>
      </BrowserRouter>
    );

    expect(
      await screen.findByText(/Some Error occurred! Try again later!/i)
    ).toBeInTheDocument();
  });
});