import { createContext, useState, useEffect } from "react";

export const KomContext = createContext();

const initialForm = {
  brand: "",
  mobo: "",
  category: "",
};

function KomProvider(props) {
  const [nbkomputer, setNbkomputer] = useState([]);
  const [formInput, setFormInput] = useState({ ...initialForm });

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
