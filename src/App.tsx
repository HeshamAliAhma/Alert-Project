import { Ban, BellRing, CircleCheckBig, FileWarning, OctagonAlert } from "lucide-react";
import "./App.css";
import Alert from "./components/ui/Alert";
function App() {

  return (
    <>
    <Alert type={"alert-default"} headerIcon={<BellRing />} title={"Upgrade Your Plan"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam explicabo aliquid dolore dolorum repellat at pariatur "}/>

    <Alert type={"alert-info"} headerIcon={<OctagonAlert />} title={"Note"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam explicabo aliquid dolore dolorum repellat at pariatur "}/>

    <Alert type={"alert-warning"} headerIcon={<FileWarning  />} title={"somtiong went wrong"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam explicabo aliquid dolore dolorum repellat at pariatur "}/>

    <Alert type={"alert-error"} headerIcon={<Ban />} title={"somtiong went wrong"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam explicabo aliquid dolore dolorum repellat at pariatur "}/>


    <Alert type={"alert-success"} headerIcon={<CircleCheckBig />} title={"Your order has been Successed"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam explicabo aliquid dolore dolorum repellat at pariatur "}/>
    </>
  );
}

export default App;
