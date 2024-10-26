"use client";

import { ModeToggle } from "@repo/ui";
import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <nav className="container mx-auto flex items-center justify-between p-4">
        <ul className="flex items-center space-x-6">
          <li>
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/next.svg"
              alt="Next.js logo"
              width={80}
              height={30}
              priority
            />
          </li>
        </ul>
        <ul className="flex items-center">
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
