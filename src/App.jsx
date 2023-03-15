import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="movie/:id" element={"Movie detail"}></Route>
                    <Route path="movie/:type" element={"Movie list"}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
