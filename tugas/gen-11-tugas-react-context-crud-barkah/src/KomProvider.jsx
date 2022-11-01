import { createContext, useState, useEffect } from "react";

export const KomContext = createContext();

function KomProvider(props) {
  const [nbkomputer, setNbkomputer] = useState([]);
  const [formInput, setFormInput] = useState({});

  return (
    <>
      <KomContext.Provider
        value={{
          nbkomputer: nbkomputer,
          setNbkomputer: setNbkomputer,
          formInput: formInput,
          setFormInput: setFormInput,
        }}
      >
        {props.children}
      </KomContext.Provider>
    </>
  );
}

export default KomProvider;
