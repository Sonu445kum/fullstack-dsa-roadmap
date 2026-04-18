import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useContext,
  createContext,
} from "react";

// 1. Create Context
const ThemeContext = createContext();

const Dashboard = () => {
  // 2. useState (manage state)
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  // 3. useRef (access DOM)
  const inputRef = useRef();

  // 4. useEffect (API call)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // 5. useMemo (optimize filtering)
  const filteredUsers = useMemo(() => {
    console.log("Filtering...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  // 6. useCallback (prevent re-creation)
  const handleFocus = useCallback(() => {
    inputRef.current.focus();
  }, []);

  // 7. useContext (consume theme)
  const theme = dark ? "dark" : "light";

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ background: dark ? "#333" : "#fff", color: dark ? "#fff" : "#000" }}>
        
        <h2>User Dashboard</h2>

        {/* Search Input */}
        <input
          ref={inputRef}
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={handleFocus}>Focus Input</button>

        {/* Toggle Theme */}
        <button onClick={() => setDark(!dark)}>
          Toggle Theme
        </button>

        {/* Child Component */}
        <UserList users={filteredUsers} />
      </div>
    </ThemeContext.Provider>
  );
};

// Child Component
const UserList = React.memo(({ users }) => {
  const theme = useContext(ThemeContext);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - Theme: {theme}
        </li>
      ))}
    </ul>
  );
});

export default Dashboard;