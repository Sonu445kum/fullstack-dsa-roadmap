import React, { useState } from "react";

const CityManager = () => {
  const [states, setStates] = useState([]);
  const [country, setCountry] = useState([]);
  const [cities, setCities] = useState([]);

  const [stateInput, setStateInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [selectedState, setSelectedState] = useState("");
  // country
  const [selectedCountry,setselectedCountry] =useState(" ");
  const [countryInput,setCountryInput] =useState("");

  const [error, setError] = useState("");

  const [editId, setEditId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;


  const handleAddState = () => {
    if (!stateInput.trim()) {
      return setError("State cannot be empty");
    }

    if (states.includes(stateInput.trim())) {
      return setError("State already exists");
    }

    setStates([...states, stateInput.trim()]);
    setStateInput("");
    setError("");
  };

  const handleAddCity = () => {
    if (!selectedCountry) return setError("Select a state");
    if (!cityInput.trim()) return setError("City cannot be empty");

    const isDuplicate = cities.some(
      (c) =>
        c.city.toLowerCase() === cityInput.toLowerCase() &&
        c.state === selectedState &&
        c.id !== editId
    );

    if (isDuplicate) {
      return setError("City already exists in this state");
    }

    if (editId) {
      setCountry(
        cities.map((c) =>
          c.id === editId
            ? { ...c, city: cityInput, state: selectedState }
            : c
        )
      );
      setEditId(null);
    } else {
      const newCity = {
        id: Date.now(),
        city: cityInput,
        state: selectedState,
      };
      setCountry([...cities, newCity]);
    }

    setCountryInput("");
    setselectedCountry("");
    setError("");
  };

  const handleAddCountry = () => {
    if (!selectedState) return setError("Select a Country");
    if (!cityInput.trim()) return setError("Country cannot be empty");

    const isDuplicate = cities.some(
      (c) =>
        c.city.toLowerCase() === cityInput.toLowerCase() &&
        c.state === selectedState &&
        c.id !== editId
    );

    if (isDuplicate) {
      return setError("City already exists in this state");
    }

    if (editId) {
      setCities(
        cities.map((c) =>
          c.id === editId
            ? { ...c, city: cityInput, state: selectedState }
            : c
        )
      );
      setEditId(null);
    } else {
      const newCity = {
        id: Date.now(),
        city: cityInput,
        state: selectedState,
      };
      setCities([...cities, newCity]);
    }

    setCityInput("");
    setSelectedState("");
    setError("");
  };
  const handleEdit = (city) => {
    setCityInput(city.city);
    setSelectedState(city.state);
    setEditId(city.id);
  };

  const handleDelete = (id) => {
    setCities(cities.filter((c) => c.id !== id));
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentCities = cities.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(cities.length / itemsPerPage);

  return (
    <div style={{ padding: "20px", maxWidth: "700px" }}>
      <h2>City Manager</h2>

   
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <input
          type="text"
          placeholder="Enter state name"
          value={stateInput}
          onChange={(e) => setStateInput(e.target.value)}
        />
        <button onClick={handleAddState}>Save State</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter state name"
          value={stateInput}
          onChange={(e) => setStateInput(e.target.value)}
        />
        <button onClick={handleAddState}>Save Country</button>
      </div>
      <br />
      <div>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">Select state</option>
          {states.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>

        {/* country */}
          <select
          value={country}
          onChange={(e) => setCountryInput(e.target.value)}
        >
          <option value="">Select Country</option>
          {country.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Enter Country name"
          value={countryInput}
          onChange={(e) => setCountryInput(e.target.value)}
        />

        <button onClick={handleAddCountry}>
          {editId ? "Update Country" : "Add Country"}
        </button>
      </div>

      <br />
      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>State</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {/* country */}
        


        <tbody>
          {currentCities.map((c) => (
            <tr key={c.id}>
              <td>{c.state}</td>
              <td>{c.city}</td>
              <td>
                <button onClick={() => handleEdit(c)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CityManager;