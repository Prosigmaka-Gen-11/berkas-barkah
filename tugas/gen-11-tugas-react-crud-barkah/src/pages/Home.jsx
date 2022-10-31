import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Ini Home</h1>
      <Link to="/kom/list">Ke List</Link>
      <br />
      <Link to="/kom/form">Ke Form</Link>
    </>
  );
}
export default Home;
