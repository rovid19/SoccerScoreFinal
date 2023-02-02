import React from "react";
import Navbar from "./PageComponents/Navbar";
import { Route, Routes } from "react-router";
import Livegames from "./Pages/Livegames";
import Teams from "./Pages/Teams";
import Leagues from "./Pages/Leagues";
import Transfers from "./Pages/Transfers";
import MainLeagueComponent from "./League components/MainLeagueComponent";
import { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  const handleUpdate = (updatedData) => {
    setData(updatedData);
  };
  const handleTitle = (updatedData) => {
    setTitle(updatedData);
  };

  const [classNameDva, setClassNameDva] = useState(
    "w-[80%] h-[60%] bg-yellow text-black akita text-center lg:w-[50%] lg:h-[40%]"
  );
  const [className, setClassName] = useState(
    "h-[100%] w-[100%] absolute top-0 left-0 bg-black z-40 bg-opacity-50 flex justify-center items-center"
  );

  return (
    <>
      <div className="flex">
        <div
          className={className}
          onClick={() => {
            setClassName("hidden");
            setClassNameDva("hidden");
          }}
        >
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={classNameDva}
            onClick={() => {
              setClassName("hidden");
              setClassNameDva("hidden");
            }}
          >
            <h1 className="w-[90%] text-xl">
              Dear current user, due to this site using free API which has a
              limit of 50 API calls per day, please don't scroll through all
              leagues. Opening 1 league will trigger 4 API calls and if you go
              through them all, next user won't have a pleasant experience.
              Thanks! Ps. All leagues have same format so you're not missing out
              on anything :D{" "}
            </h1>

            <h1 className="mt-10">
              Press anywhere on page to close this window!
            </h1>
          </motion.div>
        </div>
        <Navbar />
        <Routes>
          <Route exact path="/teams" element={<Teams />}></Route>
          <Route exact path="/transfers" element={<Transfers />}></Route>
          <Route
            exact
            path="/"
            element={
              <Leagues
                data={data}
                handleUpdate={handleUpdate}
                handleTitle={handleTitle}
              />
            }
          ></Route>

          <Route exact path="/livegames" element={<Livegames />}></Route>
          <Route
            exact
            path="/leagues/premier"
            element={<MainLeagueComponent apiTitle={data} title={title} />}
          ></Route>
          <Route
            exact
            path="/leagues/laliga"
            element={<MainLeagueComponent apiTitle={data} title={title} />}
          ></Route>
          <Route
            exact
            path="/leagues/bundesliga"
            element={<MainLeagueComponent apiTitle={data} title={title} />}
          ></Route>
          <Route
            exact
            path="/leagues/seriea"
            element={<MainLeagueComponent apiTitle={data} title={title} />}
          ></Route>
          <Route
            exact
            path="/leagues/ligue1"
            element={<MainLeagueComponent apiTitle={data} title={title} />}
          ></Route>
          <Route
            exact
            path="/leagues/russianpremier"
            element={<MainLeagueComponent apiTitle={data} title={title} />}
          ></Route>
          <Route
            exact
            path="/leagues/primeira"
            element={<MainLeagueComponent apiTitle={data} title={title} />}
          ></Route>
          <Route
            exact
            path="/leagues/eredivisie"
            element={<MainLeagueComponent apiTitle={data} title={title} />}
          ></Route>
          <Route
            exact
            path="/leagues/jupilerproleague"
            element={<MainLeagueComponent apiTitle={data} title={title} />}
          ></Route>
          <Route
            exact
            path="/leagues/brasileirao"
            element={<MainLeagueComponent apiTitle={data} title={title} />}
          ></Route>
          <Route
            exact
            path="/leagues/mls"
            element={<MainLeagueComponent apiTitle={data} title={title} />}
          ></Route>
          <Route
            exact
            path="/leagues/ligamx"
            element={<MainLeagueComponent apiTitle={data} title={title} />}
          ></Route>
          <Route
            exact
            path="/leagues/spfl"
            element={<MainLeagueComponent apiTitle={data} title={title} />}
          ></Route>
          <Route
            exact
            path="/leagues/secondbundesliga"
            element={<MainLeagueComponent apiTitle={data} title={title} />}
          ></Route>
          <Route
            exact
            path="/leagues/prvaliga"
            element={<MainLeagueComponent apiTitle={data} title={title} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
