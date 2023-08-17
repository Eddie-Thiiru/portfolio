import { describe, expect, it, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import LandingPage from "../Landing";
import About from "../About";
import Projects from "../Projects";
import Footer from "../Footer";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,

    ScrollRestoration: () => vi.fn(),
  };
});

describe("App component", () => {
  it("should render app", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });

  it("should render landing page", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>,
    );

    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
      /et/i,
    );
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
      /eddiethiiru/i,
    );
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("should render About section", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );

    expect(screen.getByRole("heading", { name: "-About" })).toBeInTheDocument();
  });

  it("should render projects section", () => {
    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "-Projects" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3);
    expect(screen.getAllByRole("link", { name: "Live Site" })).toHaveLength(3);
    expect(screen.getAllByRole("link", { name: "Github" })).toHaveLength(3);
    expect(
      screen.getByRole("link", { name: "Explore more" }),
    ).toBeInTheDocument();
  });

  it("should render footer", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(screen.getByRole("heading").textContent).toMatch(/let'sconnect/i);
    expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument();
    expect(screen.getByText(/eddiewachaga6@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
  });
});
