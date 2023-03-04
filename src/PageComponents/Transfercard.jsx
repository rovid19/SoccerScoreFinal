import React from "react";
import { options } from "../options";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Transfercard = ({ league, openModal }) => {
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    const response = await fetch(
      `https://football98.p.rapidapi.com/${league}/transfers`,
      options
    );
    const json = await response.json();
    const data = await json[0];
    const newData = Object.values(json);
    setData(newData);
    console.log(data.playerName);
  };

  useEffect(() => {
    if (data.length === 0) {
      fetchApi();
    }
  }, []);
  return (
    <div className="flex justify-center items-center h-[100%] w-full absolute top-0 lg:w-[calc(100%-250px)] ">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
        className="w-[300px] z-10 h-[600px] bg-white mt-14 border-4 shadow-2xl  border-grey sm:w-[500px] sm:h-[700px] sm:mt-20 lg:mt-0 2xl:w-[650px] 2xl:h-[750px] overflow-hidden"
      >
        {" "}
        <button
          onClick={openModal}
          className="bg-yellow hover:bg-red transition-all hover:text-white w-full h-[50px] hover:w-[100px] text-white lg:w-[70px] lg:h-[30px]"
        >
          Close
        </button>
        <div className="h-[90%] w-full grid grid-cols-3">
          {data.map((item) => {
            return (
              <div className="bg-black ml-2 mt-5 mr-2 p-2 text-white h-[150px] text-[10px] shadow-xl sm:p-4 sm:h-[180px] hover:scale-150 transition-all  cursor-pointer ">
                <h1 className="text-[10px]">
                  from {item.oldClub} to {item.newClub}
                </h1>{" "}
                <h1 className="text-[10px] sm:text-base">
                  Price paid: {item.price}
                </h1>
                <h1 className="text-[10px] sm:text-xl">{item.playerName}</h1>
                <h1>{item.playerRole}</h1>
                <h1>{item.transferDate}</h1>
                <h1>{item.transferType}</h1>
              </div>
            );
          })}
        </div>
      </motion.div>{" "}
    </div>
  );
};

export default Transfercard;
