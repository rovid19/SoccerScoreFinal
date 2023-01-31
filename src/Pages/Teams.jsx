import React from "react";
import { useState } from "react";
import TeamProfile from "../League components/TeamProfile";
import img1 from "../slike/teams.jpg";
import { motion } from "framer-motion";

const Teams = () => {
  const [league, setLeague] = useState("premierleague");
  const [team, setTeam] = useState("");
  const [visible, setVisible] = useState(false);

  const styles = {
    backgroundImage: `url(${img1})`,
  };

  const openModal = () => setVisible((prev) => !prev);
  const ifModal = () => {
    if ((league, team === "")) {
      alert("You must select league and enter a teams name");
    } else {
      openModal();
    }
  };

  console.log(league, team);
  return (
    <div className="w-screen h-screen  ">
      <div className="absolute h-full w-full z-[-1] bg-black bg-opacity-70 lg:top-0 lg:left-0 ">
        <div
          className="absolute h-full w-full bg-cover z-[-2] bg-black bg-opacity-80 lg:w-full  "
          style={styles}
        ></div>
      </div>

      {visible && (
        <TeamProfile
          openClose={openModal}
          visible={visible}
          league={league}
          team={team}
        />
      )}
      <motion.div
        className="klasa"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <h1 className="text-6xl mb-10 text-center  lg:mb-3  text-white md:text-5xl md:mb-6 lg:text-2xl 2xl:text-4xl 2xl:mb-6">
          Please select league and enter teams name{" "}
        </h1>
        <div className="flex flex-col z-10 ">
          <div className="flex flex-col md:flex-row">
            <input
              onChange={(event) => setTeam(event.target.value)}
              className="bg-yellow  w-[300px] h-[50px] outline-0 text-center md:text-left lg:w-[200px] 2xl:w-[500px]"
            ></input>
            <select
              size={1}
              className="bg-yellow flex h-[50px] text-center md:text-left"
              onClick={(event) => setLeague(event.target.value)}
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

          <div className="flex justify-center mt-10 md:mt-6 lg:mt-3 2xl:mt-5 ">
            <button
              className="bg-yellow w-[150px]  h-[50px] 2xl:w-[200px] rounded-md hover:bg-red hover:text-white transition-all"
              onClick={ifModal}
            >
              Search
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Teams;
