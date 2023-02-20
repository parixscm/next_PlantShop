import Link from "next/link";
import { useSignOut, useUser } from "hooks/user";

export default function Navbar() {
  const user = useUser();
  const signOut = useSignOut();

  return (
    <nav className="px-2 py-1 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">Next Shop</Link>
        </li>
        <li role="separator" className="flex-1"></li>
        {user ? (
          <>
            <li>Welcome! {user.name}</li>
            <li>
              <button onClick={signOut}>Sign Out</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in">Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
