import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import {NavBar} from "./components/NavBar.tsx";

export default function App() {
  return <MantineProvider theme={theme}>
    <NavBar />
  </MantineProvider>;
}
