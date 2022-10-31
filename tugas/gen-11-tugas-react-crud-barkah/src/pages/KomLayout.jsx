import { Outlet } from "react-router-dom";

export default function BookLayout() {
  return (
    <>
      <h3>Popular Brands</h3>
      <ul>
        <li>ASRock</li>
        <li>ASUS</li>
        <li>Gigabyte</li>
      </ul>

      <br />
      <hr />
      <br />

      <Outlet />
    </>
  );
}
