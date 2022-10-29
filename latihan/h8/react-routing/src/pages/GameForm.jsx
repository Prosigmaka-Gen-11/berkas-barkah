function BookForm() {
  return (
    <>
      <form>
        <label>
          name: <br />
          <input type="text" />
        </label>
        <br />
        <br />
        <label>
          publisher: <br />
          <input type="text" />
        </label>
        <br />
        <br />
        <button>submit</button>
      </form>
    </>
  );
}

export default BookForm;
