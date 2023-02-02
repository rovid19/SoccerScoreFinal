import React from "react";
import LastMatchTable from "./LastMatchTable";
import NextMatchTable from "./NextMatchTable";
import LeagueStandingsTable from "./LeagueStandingsTable";
import { useState } from "react";

const MainLeagueComponent = ({ apiTitle, title }) => {
  const [visible, setVisible] = useState(false);
  const image = require(`../slike/${apiTitle}.jpg`);
  const styles = {
    backgroundImage: `url(${image})`,
  };

  const handleVisible = () => setVisible(!visible);
  return (
    <div className="absolute top-[80px] h-[calc(screen-80px)]  w-screen lg:h-screen lg:top-0">
      <div className="w-[100%] h-[100%] ">
        <div
          className="w-full h-[50%] invisible lg:visible bg-contain   "
          style={styles}
        ></div>
        <div className="w-full h-[50%]">
          <div className="grid grid-cols-3">
            <div>
              {" "}
              <LastMatchTable
                apiTitle={apiTitle}
                visibleData={visible}
                handleVisible={handleVisible}
                title={title}
              />{" "}
            </div>
            <div>
              {" "}
              <NextMatchTable
                apiTitle={apiTitle}
                visible={visible}
                title={title}
              />{" "}
            </div>
            <div className="">
              {" "}
              <LeagueStandingsTable
                apiTitle={apiTitle}
                visible={visible}
                title={title}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLeagueComponent;
