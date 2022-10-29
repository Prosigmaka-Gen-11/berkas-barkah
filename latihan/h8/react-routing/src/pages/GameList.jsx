import { useState, useEffect } from "react";

function GameList() {
  return (
    <>
      <h1>Gim List</h1>
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Gim gud</td>
          <td>Gim bad</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </table>
    </>
  );
}

export default GameList;
