import React, { useEffect } from "react";
import { useActions } from "./hooks/actions";
import Header from "./components/Header";

function App() {
  const { getPosts } = useActions();

  useEffect(() => {
    getPosts();
  }, []);

  return <Header />;
}

export default App;
