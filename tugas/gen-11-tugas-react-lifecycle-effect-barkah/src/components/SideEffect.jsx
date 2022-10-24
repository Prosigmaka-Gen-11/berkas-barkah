import React, { useEffect, useState } from "react";

function SideEffect() {
  const [pc, setPc] = useState("");
  const [mobo, setMobo] = useState("");
  const [cpu, setCpu] = useState("");
  const [gpu, setGpu] = useState("");
  const [ram, setRam] = useState("");
  const [listparts, setlistparts] = useState("");
  const [count, setCount] = useState(0);
  const [price0] = useState("Rp. 0");
  const [price1] = useState("Rp. 20.000.000");
  const [price2] = useState("Rp. 40.000.000");
  const [price3] = useState("Rp. 60.000.000");
  const [price4] = useState("Rp. 80.000.000");
  const [price5] = useState("Rp. 100.000.000");
  const [price6] = useState("Rp. 120.000.000");

  useEffect(() => {
    console.log("side effect every updates");
    console.log(`${count} testing`);
    return () => {
      console.log("side effect before next way");
    };
  });

  useEffect(() => {
    console.log("side effect render first time");

    const pcDb = {
      pc: "",
      mobo: "Click Button",
      cpu: "Click Button",
      gpu: "Click Button",
      ram: "Click Button",
    };

    setPc(pcDb.pc);
    setMobo(pcDb.mobo);
    setCpu(pcDb.cpu);
    setGpu(pcDb.gpu);
    setRam(pcDb.ram);

    return () => {
      console.log("before component clear");

      setPc("");
      setMobo("");
      setCpu("");
      setGpu("");
      setRam("");
    };
  }, []);

  useEffect(() => {
    console.log("side effects of any existing dependencies");
    setlistparts(
      `list parts for Motherboard ${mobo}, for Processor ${cpu}, for VGA ${gpu}, for RAM ${ram}. ${pc}`
    );
    return () => {
      console.log("before contents of dependencies clear");
    };
  }, [mobo, cpu, gpu, ram, pc]);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Users wanna build PC @Func Sideeffect</h1>
      <p>List Parts: </p>
      <p>
        Build by: {pc}
        <ol>
          <li>Motherboard: {mobo}</li>
          <li>Processor: {cpu}</li>
          <li>VGA: {gpu}</li>
          <li>RAM: {ram}</li>
        </ol>
        {count <= 0 ? (
          <button disabled onClick={() => decrementCount()}>
            -
          </button>
        ) : count > 0 ? (
          <button onClick={() => decrementCount()}>-</button>
        ) : null}
        {count}
        <button onClick={() => incrementCount()}>+</button>
        pcs
      </p>
      {count == 0
        ? price0
        : count == 1
        ? price1
        : count == 2
        ? price2
        : count == 3
        ? price3
        : count == 4
        ? price4
        : count == 5
        ? price5
        : count == 6
        ? price6
        : "gadibikin otomatis cuman ngetes hehe"}
      <p>{listparts}</p>
      <button onClick={() => alert("Added") + setMobo("ASRock B550 Pro4")}>
        Motherboard
      </button>
      <button onClick={() => alert("Added") + setCpu("Ryzen 5 5600x")}>
        Processor
      </button>
      <button onClick={() => alert("Added") + setGpu("Asus RTX 2060 EVO OC")}>
        VGA
      </button>
      <button
        onClick={() => alert("Added") + setRam("Team Dark Pro cl-14 2x8")}
      >
        RAM
      </button>
      <button onClick={() => alert("Added") + setPc("Build PC by NB")}>
        Build
      </button>
    </>
  );
}

export default SideEffect;
