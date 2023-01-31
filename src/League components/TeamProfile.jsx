import React from "react";
import { useState, useEffect } from "react";
import { options } from "../options";
import { motion, AnimatePresence } from "framer-motion";

const TeamProfile = ({ openClose, league, team, visible }) => {
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    const response = await fetch(
      `https://football98.p.rapidapi.com/${league}/table/squadname/${team}`,
      options
    );
    const json = await response.json();
    const data = await json[0];
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    if (data.length === 0) {
      fetchApi();
    }
  }, []);

  console.log(league);
  console.log(visible);

  return (
    <>
      <div className="w-screen h-[calc(100%-80px)] flex justify-center items-center absolute top-[80px] z-20 lg:h-[100%] lg:top-0 lg:w-[calc(100%-250px)] lg:right-0">
        <AnimatePresence>
          <motion.div
            key="box"
            exit={{ opacity: 0 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
            className="w-[300px] h-[600px] mt-[80px] bg-black border-4 mb-14 border-grey shadow-xl relative   lg:w-[500px] lg:h-[400px]  xl:w-[500px] 2xl:h-[600px] 2xl:w-[700px] "
          >
            {data === undefined ? (
              <div className="h-full bg-white w-full flex justify-center items-center">
                <h1> No teams have been found </h1>
              </div>
            ) : (
              <div className=" h-full w-[80] bg-white  ">
                <div className="w-full flex justify-center h-[100px] items-center">
                  <img src={data.SquadLogo} className="h-[50px]"></img>
                </div>
                <div className="flex w-full h-[50px] flex justify-center items-center shadow-xl bg-yellow">
                  <h1>{data.Name} 2022/2023 (league stats) </h1>
                </div>
                <div className="w-full h-[200px] flex justify-center">
                  <div className="Amen">
                    <h1 className="text-3xl">Points: {data.Points}</h1>
                    <h1>Games played: {data.Played}</h1>
                    <h1>Games won: {data.Winned}</h1>
                    <h1>Games lost: {data.Loosed}</h1>
                    <h1>Games tied: {data.Tie}</h1>
                  </div>
                </div>
              </div>
            )}

            <button
              className="bg-yellow w-full h-[50px] hover:text-white hover:w-[100px] absolute bottom-0 lg:top-0 lg:w-[70px] lg:h-[30px] hover:bg-red transition-all"
              onClick={() => {
                openClose();
              }}
            >
              Close
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default TeamProfile;
