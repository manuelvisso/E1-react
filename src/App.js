import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { TitleComponent } from "./components/TitleComponent";
import { FormComponent } from "./components/FormComponent";

function App() {
  return (
    <>
      <TitleComponent />
      <FormComponent />
    </>
  );
}
export default App;
