import React from "react";
import { useState, useEffect } from "react";
import TeamProfileInTable from "./TeamProfileInTable";
import { motion } from "framer-motion";

const Lastmatcheng = ({ apiTitle, title, visible }) => {
  const [data, setData] = useState([]);
  const vals = Object.values(data);
  const [visibility, setVisibilty] = useState(false);
  const [team, setTeam] = useState("");

  const handleName = (name) => {
    return name.length > 17 ? name.slice(0, 17) : name;
  };

  const handleTeams = () => {
    setVisibilty((prev) => !prev);
  };
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b529891cd2mshe7bca90aba3fe87p1dabf4jsnaea3d94ce638",
        "X-RapidAPI-Host": "football98.p.rapidapi.com",
      },
    };

    fetch(`https://football98.p.rapidapi.com/${apiTitle}/table`, options)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {visible ? (
        ""
      ) : (
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute h-screen w-screen top-0 left-0 lg:left-[72%] lg:shadow-xl lg:top-[100px] 2xl:top-[100px] 2xl:w-[400px] 2xl:left-[77%] 2xl:h-[800px] lg:bg-white lg:h-[750px] lg:w-[300px] 3xl:h-[900px] 3xl:w-[500px] 4xl:top-[150px]"
        >
          {visibility && (
            <TeamProfileInTable
              handleTeams={handleTeams}
              title={apiTitle}
              team={team}
            />
          )}
          <div className="w-full h-[12%] flex justify-center items-center  bg-yellow">
            <h1 className="text-black text-2xl ">Premier League 2022/2023</h1>
          </div>
          {data.length > 1 ? (
            ""
          ) : (
            <div className="w-full mt-[250px] flex justify-center items-center">
              <h1 className="text-black text-4xl font-bold">Loading...</h1>{" "}
            </div>
          )}
          {data.length > 1 ? (
            <>
              {" "}
              <div className="flex justify-center w-full ">
                <div className="flex  w-[100%] pr-4 pl-4  h-[40px] justify-between text-black">
                  <h1 className=" pl-8 w-[120px]">Name</h1>

                  <div className="flex w-[66%] justify-between md:w-[70%] lg:w-[140px] 2xl:w-[220px] 3xl:w-[300px]">
                    <h1>Pst</h1>
                    <h1 className="">Plyd</h1>
                    <h1>Lost</h1>

                    <h1>Won</h1>
                    <h1>Draw</h1>
                    <h1>Points</h1>
                  </div>
                </div>
              </div>
              <div className="h-[80%] w-full  flex-row ">
                {vals.map((item, index) => {
                  /*
                   let className =
                 
                if (index >= vals.length - 4) {
                  className += " bg-red bg-opacity-";
                } else if (index <= vals.length - 17) {
                  className += "bg-yellow text-black";
                } 
*/
                  return (
                    <div
                      onClick={(event) => {
                        handleTeams();
                        setTeam(item.Name);
                        console.log(team);
                      }}
                      className="hover:bg-yellow hover:text-white hover:shadow-xl transition-all cursor-pointer flex m-auto w-[100%] pl-4 pr-4 h-[30px] justify-between text-black"
                    >
                      <div className="w-[145px] flex ">
                        <img
                          src={item.SquadLogo}
                          className="h-[25px] mr-2"
                        ></img>

                        {handleName(item.Name)}
                      </div>
                      <h1>{item.Position}</h1>
                      <h1>{item.Played}</h1>
                      <h1>{item.Loosed}</h1>
                      <h1>{item.Winned}</h1>
                      <h1>{item.Tie}</h1>
                      <h1>{item.Points}</h1>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
        </motion.div>
      )}
    </>
  );
};

export default Lastmatcheng;
