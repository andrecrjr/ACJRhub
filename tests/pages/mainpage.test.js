import React from "react";
import { render, screen } from '../test-utils'
import MainPage from '../../components/Pages/MainPage';


describe("Main page component test", () => {
  it("should have hello world title", () => {
    const { container } = render(<MainPage />);
    const titleBanner = container.querySelector(".presentation--world")
    expect(titleBanner.textContent).toMatch(/Hello world/)
  })
})