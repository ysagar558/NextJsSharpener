
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "../lib/auth";
import LogoutButton from "./LogoutButton";

export default async function DashboardPage() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  // Check authentication
  if (!token) {
    redirect("/login");
  }

  // Verify JWT
  const user = await verifyToken(token);

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="dashboard">
      <h1>Welcome to Dashboard!</h1>

      <h2>Hello, {user.username}</h2>

      <p>You have successfully logged in.</p>

      <LogoutButton />
    </div>
  );
}
