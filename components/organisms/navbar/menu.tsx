import React from "react";
import cx from "classnames";
import Link from "next/link";

interface MenuProps {
  title: string;
  isActive?: boolean;
  href: string;
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, isActive, href = "/" } = props;

  const classTitle = cx({
    "nav-link": true,
    isActive,
  });

  return (
    <li className="nav-item my-auto">
      <Link href={href} className={classTitle} aria-current="page">
        {title}
      </Link>
    </li>
  );
}
