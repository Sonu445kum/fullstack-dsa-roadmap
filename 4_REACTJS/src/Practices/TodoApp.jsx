import { useState, useEffect } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add / Update Todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editId !== null) {
      setTodos(todos.map(todo => 
        todo.id === editId ? { ...todo, text: input } : todo
      ));
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: input }]);
    }

    setInput("");
  };

  // Delete Todo
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Edit Todo
  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter task..."
            className="flex-1 border p-2 rounded"
          />
          <button className="bg-blue-500 text-white px-4 rounded">
            {editId ? "Update" : "Add"}
          </button>
        </form>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 p-2 rounded"
            >
              <span>{todo.text}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
