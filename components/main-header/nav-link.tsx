"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./nav-link.module.css";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}
const NavLink = ({ href, children }: NavLinkProps) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      Foodies Community
    </Link>
  );
};

export default NavLink;
