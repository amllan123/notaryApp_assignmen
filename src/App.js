import "./App.css";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import Success from "./pages/home/success/Success";
import { BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <Toaster
          position="top-center"
          toastOptions={{
            success: {
              theme: {
                primary: "rgb(79, 250, 0)",
              },
            },
          }}
        ></Toaster>
      </div>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>

    
    </>
  );
}

export default App;
