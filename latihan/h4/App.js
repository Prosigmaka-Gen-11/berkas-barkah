function App() {
  const [name, setName] = React.useState("zippppp");
  let [num, setNum] = React.useState(20);
  return (
    <div>
      <h2 className="text-6xl">
        tes {name}, your {num} now
      </h2>
      <button
        className="rounded bg-cyan-400 p-2"
        onClick={() => setName("sipzip")}
      >
        ubah
      </button>
      <button className="rounded bg-cyan-400 p-2" onClick={() => setNum(23)}>
        ubahnum
      </button>
    </div>
  );
}

const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
const element = React.createElement(App);
root.render(element);
