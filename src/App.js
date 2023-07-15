import "./styles.css";
import Form from "./form";

const movies = [
  {
    name: "Avengers",
    available: 5
  },
  {
    name: "Avengers 2",
    available: 5
  },
  {
    name: "Avengers 3",
    available: 5
  },
  {
    name: "Avengers 4",
    available: 5
  }
];

export default function App() {
  return (
    <div>
      <h2>Peliculas</h2>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </div>
  );
}
