import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Img1 from "../slike/premierleague.png";
import Img2 from "../slike/laliga.png";
import Img3 from "../slike/bundesdva.png";
import Img4 from "../slike/seriaa.png";
import Img5 from "../slike/hnl.png";
import Img6 from "../slike/russia.png";
import Img7 from "../slike/portugal.png";
import Img8 from "../slike/nizo.png";
import Img9 from "../slike/belgija.png";
import Img10 from "../slike/brazil.png";
import Img11 from "../slike/mls.png";
import Img12 from "../slike/mex.png";
import Img13 from "../slike/skotska.png";
import Img14 from "../slike/austrija.png";
import Img15 from "../slike/franc.png";
import Premierleague from "../League components/MainLeagueComponent";
import img from "../slike/leagues.jpg";
import { motion } from "framer-motion";
const Leagues = ({ handleUpdate, data }) => {
  const styles = {
    backgroundImage: `url(${img})`,
  };

  // apiTitles
  const title1 = "premierleague";
  const title2 = "laliga";
  const title3 = "bundesliga";
  const title4 = "seriea";
  const title5 = "ligue1ubereats";
  const title6 = "russianpremierleague";
  const title7 = "ligaportugal";
  const title8 = "eredivisie";
  const title9 = "jupilerproleague";
  const title10 = "brasileirãosériea";
  const title11 = "majorleaguesoccer";
  const title12 = "kleague1";
  const title13 = "scottishleagueone";
  const title14 = "2.bundesliga";
  const title15 = "1.hnl";
  /*const handleClick = () => {
    handleUpdate(event.target.textContent);
  }; */
  /* useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b529891cd2mshe7bca90aba3fe87p1dabf4jsnaea3d94ce638",
        "X-RapidAPI-Host": "football98.p.rapidapi.com",
      },
    };

    fetch("https://football98.p.rapidapi.com/premierleague/table", options)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);
 
  console.log(data); */

  return (
    <div className="h-[calc(100%-80px)] absolute top-[80px] w-[100%] lg:h-screen lg:relative lg:top-0">
      <div className="w-[100%] h-[100%] absolute z-[-1] bg-white bg-opacity-90 "></div>
      <div
        className="absolute h-full w-full bg-cover object-cover z-[-2] bg-black bg-opacity-80 "
        style={styles}
      ></div>

      <div className="w-[100%] h-[100%]">
        <motion.ul
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-3 w-full h-full lg:grid-cols-5"
        >
          <Link to="/leagues/premier">
            <div
              onClick={(event) => handleUpdate(title1)}
              className=" group shadow-xl h-[100%] relative flex justify-center items-center transition-all hover:bg-yellow hover:bg-opacity-80 cursor-pointer"
            >
              <h1
                className="hidden  text-white group-hover:block absolute top-8"
                id="hide"
              >
                English Premier League
              </h1>
              <img
                src={Img1}
                onClick={() => handleUpdate(title1)}
                className="w-[80%] group"
              ></img>
            </div>
          </Link>
          <Link to="/leagues/laliga">
            <div
              onClick={(event) => handleUpdate(title2)}
              className=" group shadow-xl h-[100%] relative flex justify-center items-center transition-all hover:bg-yellow hover:bg-opacity-80 cursor-pointer"
            >
              <h1
                className="hidden text-white group-hover:block absolute top-8"
                id="hide"
              >
                Spanish LaLiga
              </h1>
              <img
                src={Img2}
                onClick={(event) => handleUpdate(title2)}
                className="w-[80%] group"
              ></img>
            </div>
          </Link>
          <Link to="/leagues/bundesliga">
            <div
              onClick={(event) => handleUpdate(title3)}
              className=" group shadow-xl h-[100%] relative flex justify-center items-center transition-all hover:bg-yellow hover:bg-opacity-80 cursor-pointer"
            >
              <h1
                className="hidden text-white group-hover:block absolute top-8"
                id="hide"
              >
                Austrian Bundesliga
              </h1>
              <img
                src={Img14}
                onClick={(event) => handleUpdate(title3)}
                className="w-[80%]"
              ></img>
            </div>
          </Link>
          <Link to="/leagues/seriea">
            <div
              onClick={(event) => handleUpdate(title4)}
              className=" group shadow-xl h-[100%] relative flex justify-center items-center transition-all hover:bg-yellow hover:bg-opacity-80 cursor-pointer"
            >
              <h1
                className="hidden text-white group-hover:block absolute top-8"
                id="hide"
              >
                Italian Serie A
              </h1>
              <img
                src={Img4}
                onClick={(event) => handleUpdate(title4)}
                className="w-[80%]"
              ></img>
            </div>
          </Link>
          <Link to="/leagues/ligue1">
            <div
              onClick={(event) => handleUpdate(title5)}
              className=" group shadow-xl h-[100%] relative flex justify-center items-center transition-all hover:bg-yellow hover:bg-opacity-80 cursor-pointer"
            >
              <h1
                className="hidden text-white group-hover:block absolute top-8"
                id="hide"
              >
                France Ligue 1
              </h1>
              <img
                src={Img15}
                onClick={(event) => handleUpdate(title5)}
                className="w-[80%]"
              ></img>
            </div>
          </Link>

          <Link to="/leagues/russianpremier">
            <div
              onClick={(event) => handleUpdate(title6)}
              className=" group shadow-xl  h-[100%] relative flex justify-center items-center transition-all hover:bg-yellow hover:bg-opacity-80 cursor-pointer"
            >
              <h1
                className="hidden text-white group-hover:block absolute top-8"
                id="hide"
              >
                Russian Premier Liga
              </h1>
              <img
                src={Img6}
                onClick={(event) => handleUpdate(title6)}
                className="w-[80%]"
              ></img>
            </div>
          </Link>
          <Link to="/leagues/primeira">
            <div
              onClick={(event) => handleUpdate(title7)}
              className=" group shadow-xl h-[100%] relative flex justify-center items-center transition-all hover:bg-yellow hover:bg-opacity-80 cursor-pointer"
            >
              <h1
                className="hidden text-white group-hover:block absolute top-8"
                id="hide"
              >
                Liga Portugal
              </h1>
              <img
                src={Img7}
                onClick={(event) => handleUpdate(title7)}
                className="w-[80%]"
              ></img>
            </div>
          </Link>
          <Link to="/leagues/eredivisie">
            <div
              onClick={(event) => handleUpdate(title8)}
              className=" group shadow-xl  h-[100%] relative flex justify-center items-center transition-all hover:bg-yellow hover:bg-opacity-80 cursor-pointer"
            >
              <h1
                className="hidden text-white group-hover:block absolute top-8"
                id="hide"
              >
                Netherlands Eredivise
              </h1>
              <img
                src={Img8}
                onClick={(event) => handleUpdate(title8)}
                className="w-[80%]"
              ></img>
            </div>
          </Link>
          <Link to="/leagues/jupilerproleague">
            <div
              onClick={(event) => handleUpdate(title9)}
              className=" group shadow-xl  h-[100%] relative flex justify-center items-center transition-all hover:bg-yellow hover:bg-opacity-80 cursor-pointer"
            >
              <h1
                className="hidden text-white group-hover:block absolute top-8"
                id="hide"
              >
                Belgian Pro League
              </h1>
              <img
                src={Img9}
                onClick={(event) => handleUpdate(title9)}
                className="w-[80%]"
              ></img>
            </div>
          </Link>
          <Link to="/leagues/brasileirao">
            <div
              onClick={(event) => handleUpdate(title10)}
              className=" group shadow-xl  h-[100%] relative flex justify-center items-center transition-all hover:bg-yellow hover:bg-opacity-80 cursor-pointer"
            >
              <h1
                className="hidden text-white group-hover:block absolute top-8"
                id="hide"
              >
                Brazilian Serie A
              </h1>
              <img
                src={Img10}
                onClick={(event) => handleUpdate(title10)}
                className="w-[80%]"
              ></img>
            </div>
          </Link>

          <Link to="/">
            <div
              onClick={(event) => handleUpdate(title11)}
              className=" group shadow-xl  h-[100%] relative flex justify-center items-center transition-all hover:bg-yellow hover:bg-opacity-80 cursor-pointer"
            >
              <h1
                className="hidden text-white group-hover:block absolute top-8"
                id="hide"
              >
                American Major League Soccer
              </h1>
              <img
                src={Img11}
                onClick={(event) => handleUpdate(title11)}
                className="w-[80%]"
              ></img>
            </div>
          </Link>
          <Link to="/">
            <div
              onClick={(event) => handleUpdate(title12)}
              className=" group shadow-xl  h-[100%] relative flex justify-center items-center transition-all hover:bg-yellow hover:bg-opacity-80 cursor-pointer"
            >
              <h1
                className="hidden text-white group-hover:block absolute top-8"
                id="hide"
              >
                Mexican Liga MX
              </h1>
              <img
                src={Img12}
                onClick={(event) => handleUpdate(title12)}
                className="w-[80%]"
              ></img>
            </div>
          </Link>
          <Link to="/leagues/spfl">
            <div
              onClick={(event) => handleUpdate(title13)}
              className=" group shadow-xl  h-[100%] relative flex justify-center items-center transition-all hover:bg-yellow hover:bg-opacity-80 cursor-pointer"
            >
              <h1
                className="hidden text-white group-hover:block absolute top-8"
                id="hide"
              >
                Scottish First League
              </h1>
              <img
                src={Img13}
                onClick={(event) => handleUpdate(title13)}
                className="w-[80%]"
              ></img>
            </div>
          </Link>
          <Link to="/leagues/secondbundesliga">
            <div
              onClick={(event) => handleUpdate(title14)}
              className=" group shadow-xl  h-[100%] relative flex justify-center items-center transition-all hover:bg-yellow hover:bg-opacity-80 cursor-pointer"
            >
              <h1
                className="hidden text-white group-hover:block absolute top-8"
                id="hide"
              >
                2. Bundesliga
              </h1>
              <img
                src={Img3}
                onClick={(event) => handleUpdate(title14)}
                className="w-[80%]"
              ></img>
            </div>
          </Link>
          <Link to="/leagues/prvaliga">
            <div
              onClick={(event) => handleUpdate(title15)}
              className=" group shadow-xl h-[100%] relative flex justify-center items-center transition-all hover:bg-yellow hover:bg-opacity-80 cursor-pointer"
            >
              <h1
                className="hidden text-white group-hover:block absolute top-8"
                id="hide"
              >
                Croatian First League
              </h1>
              <img
                src={Img5}
                onClick={(event) => handleUpdate(title15)}
                className="w-[80%]"
              ></img>
            </div>
          </Link>
        </motion.ul>
      </div>
    </div>
  );
};

export default Leagues;
