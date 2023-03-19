import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="movie/:id" element={<Detail />}></Route>
                    <Route path="movies/:type" element={<MovieList />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
