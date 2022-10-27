import axios from "axios";
import { useState, useEffect } from "react";

const initialForm = {
  title: "",
  author: "",
};

function App() {
  const [articles, setArticles] = useState([]);
  const [formInput, setFormInput] = useState({ ...initialForm });
  const isEditing = formInput.id;

  async function getArticles() {
    const result = await axios.get("http://localhost:3000/articles");
    setArticles(result.data);
    console.log(result.data);
  }

  function handleInput(evt, inputName) {
    setFormInput({ ...formInput, [inputName]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    if (isEditing) {
      await axios.put(
        `http://localhost:3000/articles/${formInput.id}`,
        formInput
      );
    } else {
      await axios.post("http://localhost:3000/articles", formInput);
    }
    getArticles();
    setFormInput({ ...initialForm });
  }

  function funcEdit(article) {
    setFormInput({ ...article });
  }

  async function funcDelete(id) {
    await axios.delete(`http://localhost:3000/articles/${id}`);
    getArticles();
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <h1>tes</h1>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.id}>
              <td>{articles.title}</td>
              <td>{articles.author}</td>
              <td>
                <button onClick={() => funcEdit(article)}>Edit</button>
                <button onClick={() => funcDelete(article.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <hr />
      <br />

      <h1>Form</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Title: <br />
          <input
            type="text"
            value={formInput.title}
            onChange={(evt) => handleInput(evt, "title")}
          />
        </label>

        <br />
        <br />

        <label>
          Author: <br />
          <input
            type="text"
            value={formInput.author}
            onChange={(evt) => handleInput(evt, "author")}
          />
        </label>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
