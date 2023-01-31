import React from "react";
import { optionsHighlights } from "../options";
import { useEffect, useState } from "react";
import { compareTwoStrings } from "string-similarity";
import { motion } from "framer-motion";

const HighlightPopup = ({ dataDva, setDataDva, closeModal, handleVisible }) => {
  const [data, setData] = useState([]);
  const [embed, setEmbedDva] = useState("");
  const [url, setUrl] = useState("");

  const loadApi = async () => {
    const fetchData = await fetch(
      "https://free-football-soccer-videos.p.rapidapi.com/",
      optionsHighlights
    );
    const data = await fetchData.json();
    return data;
  };

  const filter = async () => {
    const data = await loadApi();
    const filter = data.filter(
      (item) => compareTwoStrings(item.title, dataDva) > 0.5
    );

    const dataPrava = filter[0];

    return dataPrava;
  };

  const dataFilter = async () => {
    const data = await filter();
    setData(data);
    const embeded = data.embed;

    let startIndex = embeded.indexOf("src='") + 5;
    let endIndex = embeded.indexOf("'", startIndex);
    let src = embeded.substring(startIndex, endIndex);
    setUrl(src);
  };

  useEffect(() => {
    dataFilter();
  }, []);

  console.log(data);

  return (
    <motion.div
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{ type: "tween", duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 bottom-0 h-[100%] w-[100%] bg-yellow "
    >
      {data === undefined ? (
        <div className="h-full w-full flex justify-center items-center">
          <h1>No highlight has been found for selected match.</h1>{" "}
        </div>
      ) : (
        <div className="h-full">
          <iframe
            src={url}
            className=" w-full h-[100%] border-none overflow-hidden "
          ></iframe>
        </div>
      )}

      <button
        className="cursor-pointer bg-white w-full h-[45px] hover:bg-red hover:text-white transition-all border-none text-black absolute top-0"
        onClick={handleVisible}
      >
        Close
      </button>
    </motion.div>
  );
};

export default HighlightPopup;
