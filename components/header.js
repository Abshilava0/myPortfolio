'use client';

import Link from "next/link";
import classes from './header.module.css'
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {

  const path = usePathname();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/"><Image src="/logo.png" alt="Logo" width={100} height={80}/></Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link
              href="/"
              className={
                path === "/"
                  ? `${classes.link} ${classes.active}`
                  : classes.link
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link href="/about"  className={
                path === "/about"
                  ? `${classes.link} ${classes.active}`
                  : classes.link
              }>About</Link>
          </li>
          <li>
            <Link href="/contact"  className={
                path === "/contact"
                  ? `${classes.link} ${classes.active}`
                  : classes.link
              }>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
