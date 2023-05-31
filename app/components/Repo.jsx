import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const res = await fetch(`https://api.github.com/repos/keemzyddev/${name}`, {
    next: { revalidate: 60 },
  });
  const repo = await res.json();
  return repo;
}

export default async function Repo({ name }) {
  const repo = await fetchRepo(name);
  return (
    <>
      <h2 className="font-bold text-xl mt-2">{repo.name}</h2>
      <p className="py-2">{repo.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center space-x-2 mb-2">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
}
