import React from "react";
import { useEffect, useState } from "react";
import { options, optionsHighlights } from "../options";
import HighlightPopup from "./HighlightPopup";
import { motion } from "framer-motion";

const LastMatchTable = ({ apiTitle, visibleData, handleVisible }) => {
  const [data, setData] = useState([]);
  const [highlightTitle, setHighlightTitle] = useState("");

  const loadApi = async () => {
    const response = await fetch(
      `https://football98.p.rapidapi.com/${apiTitle}/results`,
      options
    );
    const data = await response.json();
    return data;
  };

  const constMaker = async () => {
    const data = await loadApi();
    const dataArray = Object.values(data[0]);
    const zadnjaData = dataArray[0];
    return zadnjaData;
  };

  const consoleLog = async () => {
    const log = await constMaker();
    setData((prevstate) => log);
    console.log(data);
  };

  useEffect(() => {
    if (data.length === 0) {
      consoleLog();
    }
  }, []);

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-screen w-screen absolute top-[820px] left-0 lg:left-[11%] xl:left-[19%] 2xl:left-[15.3%] 2xl:w-[500px] 2xl:h-[550px] lg:top-[350px] lg:shadow-xl lg:bg-white lg:h-[500px] lg:w-[300px] 3xl:h-[650px] 3xl:w-[600px] 4xl:top-[400px] "
    >
      {visibleData && (
        <HighlightPopup
          dataDva={highlightTitle}
          setDataDva={setHighlightTitle}
          handleVisible={handleVisible}
        />
      )}

      <div className="w-full h-[10%] flex justify-center text-black items-center bg-yellow">
        <div className="centarTri">
          <h1>Lastest Premier League Matches</h1>
          <h1 className="text-sm">*CLICK ON MATCH TO SHOW HIGHLIGHTS*</h1>
        </div>
      </div>
      {data.length > 1 ? (
        ""
      ) : (
        <div className="w-full h-[80%] flex justify-center items-center">
          <h1 className="text-black text-4xl font-bold">Loading...</h1>{" "}
        </div>
      )}
      {data.map((item) => {
        return (
          <div
            onClick={() => {
              setHighlightTitle(`${item.homeTeam} - ${item.awayTeam}`);
              handleVisible();
            }}
            className="w-full h-[7%] pr-3 pl-3 text-black flex justify-center mt-2 grid grid-cols-3 hover:text-white hover:bg-yellow cursor-pointer transition-all hover:shadow-xl  "
          >
            <div className="flex ">
              <img src={item.homeLogo} className="h-[25px] pr-4" />{" "}
              <h1 className="text-[12px] sm:text-base lg:text-[12px] 2xl:text-base">
                {item.homeTeam}
              </h1>
            </div>
            <div className="flex bg-yellow justify-center shadow-xl">
              <h1 className="sm:text-base lg:text-[12px] 2xl:text-base">
                {item.homeTeamScore}:{item.awayTeamScore}
              </h1>{" "}
            </div>
            <div className="flex justify-end">
              <h1 className="text-[12px] sm:text-base lg:text-[12px] 2xl:text-base">
                {item.awayTeam}
              </h1>
              <img src={item.awayLogo} className="h-[25px] pl-4" />{" "}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default LastMatchTable;
