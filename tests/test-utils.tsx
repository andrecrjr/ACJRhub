import { render } from "@testing-library/react";
import { ReactElement, FC } from "react";
import { theme } from "../styles/theme";
import { ThemeProvider } from 'styled-components'

// Add in any providers here if necessary:
// (ReduxProvider, ThemeProvider, etc)
const Providers:FC = ({ children }) => {
  return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };