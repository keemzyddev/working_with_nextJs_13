"useClient";

import { useState } from "react";

export default function UserSearch({ getSearchResults }) {
  const [query, setQuery] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(`/api/users/search?query=${query}`);
    const users = await res.json();
    getSearchResults(users);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit} className="m-5">
      <input
        type="text"
        className="p-2 mr-2 rounded text-black"
        placeholder="Search Users"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-blue-700 p-2 rounded hover:bg-blue-800 text-white"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
