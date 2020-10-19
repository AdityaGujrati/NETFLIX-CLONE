import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Navbar from "./Nav";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import request from "./request";
import requests from "./requests";
function App() {
  return (
    <Router>
      <div className="app" id="appp">
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Navbar />
            <Banner />
            <Row
              title="NETFLIX ORIGINALS"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row
              title="Romance Movies"
              fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
