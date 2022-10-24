import React, { useState, useEffect } from "react";

const genderList = [
  { value: "L", label: "lklk" },
  { value: "P", label: "prmpn" },
  { value: "N", label: "none" },
];

function FormHandlingBasic() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [prodi, setProdi] = useState("");
  const [gender, setGender] = useState("N");

  return (
    <>
      <label htmlFor="">
        sipppppp <br />
        <input
          type="text"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
        <br />
        {name}
      </label>

      <br />
      <br />
      <br />

      <label htmlFor="">
        sipppppp2 <br />
        <input
          type="text"
          value={age}
          onChange={(evt) => setAge(evt.target.value)}
        />
        <br />
        {age}
      </label>

      <br />
      <br />
      <br />

      <label>
        Pilih prodi {prodi} <br />
        <select value={prodi} onChange={(evt) => setProdi(evt.target.value)}>
          <option value="" disabled>
            -- Pilih Prodi
          </option>
          <option value="IF">Teknik Informatika</option>
          <option value="TE">Teknik Elektro</option>
          <option value="TI">Teknik Industri</option>
        </select>
      </label>

      <br />
      <br />
      <br />

      {/* WET: write everything twice */}
      {/* DRY: dont repeat yourself */}
      <p>gender: {gender}</p>
      {genderList.map((genderItem) => (
        <label key={genderItem.value}>
          <input
            type="radio"
            name="gender"
            value={genderItem.value}
            checked={gender === genderItem.value}
            onChange={(event) => setGender(event.target.value)}
          />
          {genderItem.label}
        </label>
      ))}
    </>
  );
}

export default FormHandlingBasic;
