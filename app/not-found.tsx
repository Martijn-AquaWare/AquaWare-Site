import { redirect } from "next/navigation";

export default function NotFound() {
  // Automatically redirect to home
  redirect("/");
}
