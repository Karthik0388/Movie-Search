import React, { useEffect, useState } from "react";
import Axios from "axios";

const Home = () => {
  let [state, setState] = useState("");
  let [search, setSearch] = useState([]);

  let handleChange = e => {
    setState(e.target.value);
  };

    useEffect(() => {
      let fetchData = async () => {
        let api_key = "c934843b";
        let movieData = await Axios.get(
          `http://www.omdbapi.com/?s=${state}&apikey=${api_key}`
        );
        console.log(movieData.data);
      };
      fetchData();
    }, []);

  let handleSubmit = async e => {
    e.preventDefault();
    let api_key = "c934843b";
    let movieData = await Axios.get(
      `http://www.omdbapi.com/?s=${state}&apikey=${api_key}`
    );
    console.log(movieData);
    setSearch(movieData.data.Search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" name="state" value={state} onChange={handleChange} />
      <button>Search</button>

      <div className="flex">
        {search.length &&
          search.slice(0, 5).map(val => {
            return (
              <div className="p-5 bg-white mx-2 my-4">
                <img src={val.Poster} alt="" className="w-full flex wrap" />
                <h1 className="text-xl font-bold uppercase">{val.Title}</h1>
                <p className="text-lg font-bold">{val.Year}</p>
                <p>{val.Rating}</p>
                <button className="bg-blue-400 mt-3 h-10 flex items-center px-5 py-2 rounded-lg text-lg font-bold upercase text-white">
                  Play
                </button>
              </div>
            );
          })}
      </div>
    </form>
  );
};
export default Home;
