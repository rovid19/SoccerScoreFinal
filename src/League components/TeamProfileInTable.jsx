import React from "react";
import { useState, useEffect } from "react";
import { options } from "../options";

const TeamProfileInTable = ({ handleTeams, title, team }) => {
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    const response = await fetch(
      `https://football98.p.rapidapi.com/${title}/table/squadname/${team}`,
      options
    );
    const json = await response.json();
    const data = await json[0];
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  console.log(title, team);

  return (
    <>
      <div className="w-full h-full  bg-black absolute top-0 ">
        <div className=" h-full w-[80] bg-white ">
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
        <button
          className="bg-yellow w-[50px] h-[30px] hover:w-[100px] absolute top-0 hover:bg-red transition-all"
          onClick={handleTeams}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default TeamProfileInTable;
