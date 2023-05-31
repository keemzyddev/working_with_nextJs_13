import Link from "next/link";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import { Suspense } from "react";

export default function RepoPage({ params: { name } }) {
  return (
    <div className="bg-white text-black m-5 px-3 py-5 rounded-lg hover:border ">
      <Link
        className="p-2 rounded hover:bg-blue-800 hover:text-white"
        href="/code/repos"
      >
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading Repo..</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories..</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
}
