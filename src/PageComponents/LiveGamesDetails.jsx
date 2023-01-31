import React from "react";
import { useState, useEffect } from "react";
import { optionsLive } from "../options";
import { motion } from "framer-motion";

const LiveGamesDetails = ({ openClose, data, name, object }) => {
  console.log(object);
  return (
    <div className="h-full w-full lg:w-[calc(100%-100px)] xl:w-[calc(100%-221px)] bg-black bg-opacity-50 z-10 absolute top-0 flex justify-center items-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
        className="w-[80%] h-[70%] bg-white border-8 border-black-400 lg:w-[50%]"
      >
        <button
          onClick={openClose}
          className="bg-yellow w-[50px] h-[5%] hover:bg-red hover:w-[100px] hover:text-white transition-all"
        >
          Close
        </button>
        <div className="flex justify-center h-[5%] text-2xl  mb-4">
          <h1>{object.tournament.name}</h1>
        </div>
        <div className="w-full h-[30%] bg-yellow  grid grid-cols-2 pt-6 rounded-xl shadow-xl">
          <div className="">
            {" "}
            <h1 className="text-sm md:text-xl lg:text-2xl 2xl:text-4xl flex justify-center">
              {object.homeTeam.name}
            </h1>
            <h1 className="text-6xl  font-bold flex   justify-center mt-5">
              {object.homeScore.current}
            </h1>
            <div></div>
          </div>
          <div>
            {" "}
            <h1 className="text-sm md:text-xl lg:text-2xl 2xl:text-4xl flex justify-center">
              {object.awayTeam.name}
            </h1>
            <h1 className="text-6xl font-bold flex justify-center mt-5">
              {object.awayScore.current}
            </h1>
          </div>
        </div>
        <div className="bg-h-[30%] flex justify-center items-center">
          <h1 className="text-2xl mt-5">{object.status.description}</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default LiveGamesDetails;
