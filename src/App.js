import "./styles.css";
import Form from "./Form";
import { Title } from "./Title";
import { Theme } from "./Theme.js";
import { useState } from "react";
import React from "react";

const movies = [
  {
    name: "Avengers",
    available: 5,
  },
  {
    name: "terminator",
    available: 5,
  },
];

export default function App() {
  const [theme, setTheme] = useState("avengers");

  return (
    <Theme theme={theme}>
      <Title>Peliculas</Title>
      {movies.map((movie) => (
        <Form
          movie={movie}
          updateTheme={() => setTheme(movie.name.toLowerCase())}
        />
      ))}
    </Theme>
  );
}
