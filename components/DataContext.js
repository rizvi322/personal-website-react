"use strict";

const { useState, useEffect, createContext } = React;

const DataContext = createContext();

const DataProvider = (props) => {
  const [data, setData] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setReady(true);
      });
  }, []);

  if (ready) {
    return (
      <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
    );
  }

  return null;
};
