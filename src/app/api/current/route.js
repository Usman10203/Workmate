import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";

export async function GET(request) {
  try {
    const authToken = request.cookies.get("authToken")?.value;

    if (!authToken) {
      return NextResponse.json(
        { error: "Authentication token is missing" },
        { status: 401 }
      );
    }

    const data = jwt.verify(authToken, process.env.JWT_KEY);
    const user = await User.findById(data._id).select("-password");

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
