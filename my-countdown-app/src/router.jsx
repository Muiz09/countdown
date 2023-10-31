import { createBrowserRouter } from "react-router-dom";
import Countdown from "./Countdown";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Countdown />
  }
]);

export default router;
