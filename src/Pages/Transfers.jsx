import React from "react";
import Transfercard from "../PageComponents/Transfercard";
import { useState, useEffect } from "react";
import { options } from "../options";
import img1 from "../slike/transfers.jpg";
import { motion } from "framer-motion";

const Transfers = () => {
  const [league, setLeague] = useState("premierleague");
  const [visible, setVisible] = useState(false);

  const styles = {
    backgroundImage: `url(${img1})`,
  };

  const openModal = () => setVisible((prev) => !prev);

  console.log(league);
  return (
    <div className="w-screen h-screen  ">
      <div className="absolute h-full w-full z-[-1] bg-black bg-opacity-70 lg:top-0 lg:left-0 ">
        <div
          className="absolute h-full w-full bg-cover z-[-2] bg-black bg-opacity-80 "
          style={styles}
        ></div>
      </div>

      <motion.div
        className="klasa"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        {visible && <Transfercard league={league} openModal={openModal} />}
        <h1 className="text-6xl mb-10 text-white md:text-5xl md:mb-6 text-center   lg:text-2xl lg:mb-3 2xl:text-4xl 2xl:mb-6">
          Please select league{" "}
        </h1>
        <div className="flex flex-col">
          <div className="flex ">
            <select
              onClick={(event) => setLeague(event.target.value)}
              className="bg-yellow flex h-[70px] md:h-[50px] text-center w-[300px] 2xl:w-[500px]"
            >
              <option value="premierleague">Premier League</option>
              <option value="laliga">LaLiga</option>
              <option value="bundesliga">Austrian Bundesliga</option>
              <option value="seriea">Serie A</option>
              <option value="ligue1ubereats">Ligue 1</option>
              <option value="russianpremierleague">
                Russian Premier League
              </option>
              <option value="ligaportugal">Liga Portugal</option>
              <option value="eredivisie">Eredivisie</option>
              <option value="jupilerproleague">Jupiler pro league</option>
              <option value="brasileirãosériea">Brasileirao</option>
              <option value="majorleaguesoccer">Mls</option>
              <option value="primeradivisiónrfef">Liga MX</option>
              <option value="scottishleagueone">SPFL</option>
              <option value="2.bundesliga">2.Bundesliga</option>
              <option value="1.hnl">1.Hnl</option>
            </select>
          </div>
          <div className="flex justify-center mt-6 lg:mt-3 2xl:mt-5">
            <button
              onClick={openModal}
              className="bg-yellow w-[150px] 2xl:w-[200px]  h-[50px] rounded-md hover:bg-red hover:text-white transition-all"
            >
              Search
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Transfers;
