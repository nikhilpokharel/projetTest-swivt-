/** @format */
import Homepage from "./components/home";
import SearchBox from "./components/search";
import SearchResult from "./components/searchResult";
import Details from "./components/details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='container'>
      <SearchBox />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/search/:id' element={<SearchResult />} />
        <Route path='/repo/details/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
