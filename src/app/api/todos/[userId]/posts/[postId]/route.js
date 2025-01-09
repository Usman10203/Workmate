import { NextResponse } from "next/server";

export function GET(request, { params }) {
  const { userId, postId } = params;
  return NextResponse.json(params);
}
