import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import { resolve } from "styled-jsx/css";

async function fetchRepos() {
  const res = await fetch("https://api.github.com/users/keemzyddev/repos", {
    next: { revalidate: 60 },
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const repos = await res.json();
  return repos;
}

export default async function ReposPage() {
  const repos = await fetchRepos();
  return (
    <div className="m-3">
      <h2 className="py-3 text-2xl font-bold">Repositories</h2>
      <ul className=" ">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="bg-white text-black mb-5 px-3 py-4 rounded-lg hover:border"
          >
            <Link href={`/code/repos/${repo.name}`}>
              <h3 className="font-bold text-xl">{repo.name}</h3>
              <p className="py-2">{repo.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center space-x-2">
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
