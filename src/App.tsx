import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./route";
import UserProvider from "./provider/UserProvider";

function App() {
  return (
    <>
      <div className="App">
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
