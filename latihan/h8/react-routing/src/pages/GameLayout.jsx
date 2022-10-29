import { Outlet } from "react-router-dom";

function BookLayout() {
  return (
    <>
      <h3>Popular Gim</h3>
      <ul>
        <li>Apex</li>
        <li>Dota</li>
        <li>Overwatch</li>
      </ul>

      <br />
      <hr />
      <br />

      <Outlet />
    </>
  );
}

export default BookLayout;
