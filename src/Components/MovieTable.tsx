import React from "react";
import { MovieI } from "@/interface/MoiveInterface";

interface Props {
  data: MovieI[];
}

const MovieTable: React.FC<Props> = ({ data }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Poster</th>
          <th>Title</th>
          <th>Year</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {data.map((movie) => (
          <tr key={movie.imdbID}>
            <td>
              <img src={movie.Poster} alt={movie.Title} width="50" />
            </td>
            <td>{movie.Title}</td>
            <td>{movie.Year}</td>
            <td>
              <span className="badge bg-primary">{movie.Type}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
