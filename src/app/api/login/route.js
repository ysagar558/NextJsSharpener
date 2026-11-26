
import { NextResponse } from "next/server";
import { createToken } from "../../lib/auth";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Validate credentials
    if (
      username !== process.env.AUTH_USERNAME ||
      password !== process.env.AUTH_PASSWORD
    ) {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }

    // Generate JWT
    const token = await createToken(username);

    const response = NextResponse.json({
      message: "Login successful",
    });

    // Store token in HTTP-only cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60,
    });

    return response;

  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
