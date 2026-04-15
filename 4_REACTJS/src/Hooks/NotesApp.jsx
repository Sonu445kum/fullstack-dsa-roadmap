import { useState } from "react";

const NotesApp = () => {
  // create state here
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);

  // handleAddNotes
  const handleAddNotes = (e) => {
    e.preventDefault();
    // check title and descriptions fileds are empty or not
    if (!title.trim() || !description.trim()) return;
    // if the edit is not equal to null then its update
    if (editId !== null) {
      setList((prev) =>
        prev.map((el) =>
          el.id === editId
            ? { ...el, title: title, description: description }
            : el,
        ),
      );
      setEditId(null);
      setTitle("");
      setDescription("");
    } else {
      // create an Object
      const newItem = {
        id: Date.now(),
        title: title,
        description: description,
      };
      // if the editid is null then add the notes
      setList((prev) => [...prev, newItem]);
      setTitle("");
      setDescription("");
    }
  };
  
  // handleDeleteNotes
  const handleDeleteNotes = (id) => {
    setList((prev) => prev.filter((el) => el.id !== id));
  };

  // handleEditNotes
  const handleEditNotes = (id) => {
    const select = list.find((el) => el.id === id);
    setTitle(select.title);
    setDescription(select.description);
    setEditId(id);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: "20px",
      }}
    >
      <form onSubmit={handleAddNotes}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the Title of Notes..!!"
          />
        </div>
        <div>
          <label>Descriptions</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the Descriptions of Title..!!"
          />
        </div>

        <button type="submit">
          {editId !== null ? " UpdatedNotes" : "AddNotes"}
        </button>
      </form>
      {/* Display Notes */}
      <ul>
        {list.map((el) => (
          <li key={el.id}>
            <p>title:{el.title}</p>
            <p>Description:{el.description}</p>
            <button onClick={() => handleEditNotes(el.id)}>EditNotes</button>
            <button onClick={() => handleDeleteNotes(el.id)}>
              DeleteNotes
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NotesApp;
