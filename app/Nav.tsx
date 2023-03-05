import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="flex justify-between item-center py-8">
      <Link href={"/"} className="text-3xl text-gray-700 font-bold">
        Todos
      </Link>
      <ul>
        <li>
          <Link
            className="text-white bg-gray-500 hover:bg-gray-500/70 p-3 rounded-lg"
            href={"/todo"}
          >
            All projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
