import { NextResponse } from "next/server";
import users from "./data.json";

export async function GET(request) {
  return NextResponse.json(users);
}
const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export async function POST(request) {
  const { name, email, phone } = await request.json();

  const newUser = {
    id: uid(),
    name,
    email,
    phone,
  };

  users.push(newUser);

  return NextResponse.json(users);
}
