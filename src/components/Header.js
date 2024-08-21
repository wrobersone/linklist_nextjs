import Link from "next/link";

function Header() {
  return (
    <header className="bg-white border-b py-4">
      <div className="max-w-4xl flex justify-between mx-auto px-6">
        {/* Left */}
        <div className="flex gap-8">
          <Link href={"/"}>LinkList</Link>
          <nav className="flex gap-4 text-slate-500 text-sm items-center">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contact"}>Contact</Link>
          </nav>
        </div>
        {/* Right */}
        <nav className="flex gap-4 text-sm text-slate-500">
          <Link href={"/login"}>Sign In</Link>
          <Link href={"/register"}>Register</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
