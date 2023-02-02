import React from "react";
import { useState, useEffect } from "react";
import { options } from "../options";
import { motion } from "framer-motion";

const Lastmatcheng = ({ apiTitle, visible, title }) => {
  const [data, setData] = useState([]);
  const loadApi = async () => {
    const response = await fetch(
      `https://football98.p.rapidapi.com/${apiTitle}/fixtures`,
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
    consoleLog();
  }, []);

  return (
    <>
      {visible ? (
        ""
      ) : (
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-screen w-screen absolute top-[1670px] left-0 lg:left-[41.5%] xl:left-[46.3%] 2xl:w-[500px] 2xl:h-[550px] lg:top-[350px] lg:shadow-xl lg:bg-white lg:h-[500px] lg:w-[300px] 3xl:h-[650px] 3xl:w-[600px] 4xl:top-[400px] "
        >
          <div className="w-full h-[10%] flex justify-center text-black items-center bg-yellow">
            <h1>Next {title} Matches</h1>
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
              <div className="w-full h-[7%] pl-3 pr-3 text-black flex justify-center mt-2 grid grid-cols-3">
                <div className="flex ">
                  <img src={item.homeLogo} className="h-[25px] pr-4" />{" "}
                  <h1 className="text-[12px] sm:text-base lg:text-[12px] 2xl:text-base">
                    {item.homeTeam}
                  </h1>
                </div>
                <div className="flex bg-yellow justify-center shadow-xl">
                  <h1 className="sm:text-base lg:text-[12px] 2xl:text-base">
                    {item.MatchDay}
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
      )}
    </>
  );
};

export default Lastmatcheng;
