import React from "react";
import Navbar from "./PageComponents/Navbar";
import { Route, Routes } from "react-router";
import Livegames from "./Pages/Livegames";
import Teams from "./Pages/Teams";
import Leagues from "./Pages/Leagues";
import Transfers from "./Pages/Transfers";
import MainLeagueComponent from "./League components/MainLeagueComponent";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  const handleUpdate = (updatedData) => {
    setData(updatedData);
  };
  console.log(data);
  return (
    <>
      <div className="flex">
        <Navbar />
        <Routes>
          <Route exact path="/teams" element={<Teams />}></Route>
          <Route exact path="/transfers" element={<Transfers />}></Route>
          <Route
            exact
            path="/"
            element={<Leagues data={data} handleUpdate={handleUpdate} />}
          ></Route>

          <Route exact path="/livegames" element={<Livegames />}></Route>
          <Route
            exact
            path="/leagues/premier"
            element={<MainLeagueComponent apiTitle={data} />}
          ></Route>
          <Route
            exact
            path="/leagues/laliga"
            element={<MainLeagueComponent apiTitle={data} />}
          ></Route>
          <Route
            exact
            path="/leagues/bundesliga"
            element={<MainLeagueComponent apiTitle={data} />}
          ></Route>
          <Route
            exact
            path="/leagues/seriea"
            element={<MainLeagueComponent apiTitle={data} />}
          ></Route>
          <Route
            exact
            path="/leagues/ligue1"
            element={<MainLeagueComponent apiTitle={data} />}
          ></Route>
          <Route
            exact
            path="/leagues/russianpremier"
            element={<MainLeagueComponent apiTitle={data} />}
          ></Route>
          <Route
            exact
            path="/leagues/primeira"
            element={<MainLeagueComponent apiTitle={data} />}
          ></Route>
          <Route
            exact
            path="/leagues/eredivisie"
            element={<MainLeagueComponent apiTitle={data} />}
          ></Route>
          <Route
            exact
            path="/leagues/jupilerproleague"
            element={<MainLeagueComponent apiTitle={data} />}
          ></Route>
          <Route
            exact
            path="/leagues/brasileirao"
            element={<MainLeagueComponent apiTitle={data} />}
          ></Route>
          <Route
            exact
            path="/leagues/mls"
            element={<MainLeagueComponent apiTitle={data} />}
          ></Route>
          <Route
            exact
            path="/leagues/ligamx"
            element={<MainLeagueComponent apiTitle={data} />}
          ></Route>
          <Route
            exact
            path="/leagues/spfl"
            element={<MainLeagueComponent apiTitle={data} />}
          ></Route>
          <Route
            exact
            path="/leagues/secondbundesliga"
            element={<MainLeagueComponent apiTitle={data} />}
          ></Route>
          <Route
            exact
            path="/leagues/prvaliga"
            element={<MainLeagueComponent apiTitle={data} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
