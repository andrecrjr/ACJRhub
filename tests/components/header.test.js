import React from "react";
import { render, screen } from '../test-utils'
import Header from '../../components/Layout/Header';


describe("Header component", () => {

  it("should render logo component", () => {
    const { container } = render(<Header />)
    
    const heading = container.querySelector(".header--logo");
    expect(heading.textContent).toBe("ACJRHUB")
  })
  it("should render two menu options component", () => {
    const { container } = render(<Header />)
    const menu = container.querySelector(".header--menu");
    expect(menu.children).toHaveLength(2)
  })

})
