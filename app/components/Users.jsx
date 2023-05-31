import Link from "next/link";

export default async function Users({ users }) {
  return (
    <div>
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white text-black m-5 px-3 py-5 rounded-lg space-y-3 hover:border"
        >
          <h2 className="font-bold text-xl mt-2">{user.name}</h2>
          <p className="font-xs">{user.email}</p>
          <p className="py-2">{user.phone}</p>
          <div>
            <Link
              href={user.website}
              target="_blank"
              className="bg-blue-700 p-2 rounded hover:bg-blue-800 text-white"
            >
              Go To Website
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
