import React from "react";
import { useState, useEffect } from "react";
import { optionsLive } from "../options";
import LiveGamesDetails from "../PageComponents/LiveGamesDetails";
import img1 from "../slike/livegames.jpg";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Livegames = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [object, setObject] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const [fakeData, setFakeData] = useState([
    {
      homeTeam: {
        name: "Misko",
      },
      awayTeam: {
        name: "miskeci",
      },
      homeScore: {
        display: "2",
      },
      awayScore: {
        display: "4",
      },
    },
  ]);

  const gamesPerPage = 10;

  console.log(data);

  const handleRightArrow = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleLeftArrow = () => {
    setCurrentPage(currentPage - 1);
  };

  const styles = {
    backgroundImage: `url(${img1})`,
  };

  const handleObject = (object) => setObject(object);

  const openClose = () => setVisible((prev) => !prev);

  const fetchApi = async () => {
    const response = await fetch(
      "https://footapi7.p.rapidapi.com/api/matches/live",
      optionsLive
    );
    const json = await response.json();
    return json;
  };

  const dataSet = async () => {
    setLoading(true);
    const dataDva = await fetchApi();
    const dataTri = Object.values(dataDva);

    console.log(dataTri[0]);
    if (dataTri[0].length > 9) {
      const startIndex = (currentPage - 1) * gamesPerPage;
      const endIndex = currentPage * gamesPerPage;
      const newData = dataTri[0].slice(startIndex, endIndex);
      setData(newData);
      console.log(endIndex);
    } else {
      setData(dataTri[0]);
    }

    setLoading(false);
  };

  useEffect(() => {
    dataSet();
  }, [currentPage]);

  return (
    <div className="w-screen h-screen flex-col  items-center ">
      <div className="absolute h-full w-full z-[-1] bg-black bg-opacity-70 lg:top-0 lg:left-0 ">
        <div
          className="absolute h-full w-full bg-cover z-[-2] bg-black bg-opacity-80 "
          style={styles}
        ></div>
      </div>

      {data.length < 10 ? (
        ""
      ) : (
        <FaArrowAltCircleRight
          className="absolute top-[50%] z-20 text-white right-[2%] cursor-pointer hover:text-yellow hover:scale-125 transition-all "
          onClick={handleRightArrow}
          size={50}
        />
      )}
      {currentPage === 1 ? (
        ""
      ) : (
        <FaArrowAltCircleLeft
          className="absolute top-[50%] z-20 text-white left-[2%] lg:left-[calc(100px+2%)] xl:left-[calc(200px+2%)] 2xl:left-[calc(250px+1%)] cursor-pointer hover:text-yellow hover:scale-125 transition-all"
          onClick={handleLeftArrow}
          size={50}
        />
      )}

      {visible && (
        <LiveGamesDetails
          openClose={openClose}
          data={data}
          name={name}
          object={object}
        />
      )}
      <motion.div
        className="h-full w-full"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1.2 }}
      >
        <div className="centar">
          {data.length === 0 ? (
            <h1 className="invisible">
              Couldn't access server info, try again tomorrow
            </h1>
          ) : (
            data.map((item) => {
              return (
                <div
                  onClick={() => {
                    handleObject(item);
                    openClose();
                  }}
                  className=" hover:bg-yellow cursor-pointer hover:text-white transition-all text-black shadow-md bg-grey pl-8 pr-8 mt-4 pb-1 pt-1  flex grid grid-cols-3 w-[80%] lg:pt-4 lg:pb-4 "
                >
                  <div className="flex items-center">
                    <h1 className="text-[10px] md:text-base">
                      {item.homeTeam.name}
                    </h1>{" "}
                  </div>

                  <div className=" flex justify-center pb-2 pt-2 bg-yellow shadow-xl text-[13px] md:text-base">
                    {item.homeScore.display}:{item.awayScore.display}{" "}
                  </div>

                  <div className="flex justify-end items-center">
                    <h1 className="text-[10px] md:text-base">
                      {item.awayTeam.name}
                    </h1>{" "}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Livegames;
