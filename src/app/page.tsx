"use client";
import React, { useEffect, useState } from "react";
import { getMovies } from "../../src/services/movies";
import { MovieI } from "@/interface/MoiveInterface";
import MovieTable from "../Components/MovieTable";
import Pagination from "../Components/Pagination";
import LoadingSpinner from "@/Components/LoaderBox";
import ErrorAlert from "@/Components/ErrorDialog";

const HomePage = () => {
  const [data, setData] = useState<MovieI[]>([]);
  const [searchTerm, setSearchTerm] = useState("american");
  const [page, setPage] = useState(1);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const totalPages = 5;

  const [filter, setFilter] = useState("ANY");

  const handleFilter = (type: string) => {
    setFilter(type);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const params = {
          s: searchTerm,
          page: page.toString(),
          type: filter
        };
        const response = await getMovies(params);
        setData(response.Search || []);
      } catch (error) {
        setError(error as Error)
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [searchTerm, page, filter]);

  return (
    <div className="container mt-4">
      <h2>Video Catalog</h2>
      <hr/>
      <div className="container mt-4">
      <div className="row align-items-center justify-content-between">
        <div className="col-md-4">
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </div>

        <div className="col-md-4 d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" onClick={() => setPage(1)}>
            Search
          </button>
        </div>

        <div className="col-md-4 d-flex justify-content-end">
          {["ANY", "movie", "series", "episode"].map((type) => (
            <button
              key={type}
              className={`btn me-2 ${filter === type ? "btn-dark" : "btn-light"}`}
              onClick={() => handleFilter(type)}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>

    { loading === true && (
            <LoadingSpinner variant="danger"/>
    )}
    { loading === false && error !== null && (
        <ErrorAlert/>

    )}

    {loading === false && error === null && (
      <MovieTable data={data} />     
    )}
    
    </div>
  );
};

export default HomePage;
