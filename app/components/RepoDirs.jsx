import Link from "next/link";

async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(
    `https://api.github.com/repos/keemzyddev/${name}/contents`,
    {
      next: { revalidate: 60 },
    }
  );

  const repo = await res.json();
  return repo;
}

export default async function RepoDirs({ name }) {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <>
      <h3>Directories</h3>
      <ul className="px-4 list-disc ">
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link
              className="hover:underline hover:text-blue-800"
              href={`/code/repos/${name}/${dir.path}`}
            >
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
