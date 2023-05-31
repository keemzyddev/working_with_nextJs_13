"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Users from "./components/Users";
import LoadingPage from "./loading";
import UserSearch from "./components/UserSearch";

export default function Home() {
  const [users, setUsers] = useState([]);

  async function getSearchResults(results) {
    setUsers(results);
  }
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("api/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h1 className="m-5">Welcome to Keemzy Page</h1>
      <Suspense fallback={<LoadingPage />}>
        <UserSearch getSearchResults={getSearchResults} />
      </Suspense>
      <Suspense fallback={<LoadingPage />}>
        <Users users={users} />
      </Suspense>
    </>
  );
}
