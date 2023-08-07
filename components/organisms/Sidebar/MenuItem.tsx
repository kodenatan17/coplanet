import React from "react";
import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  href?: any;
  icon:
    | "ic-menu-overview"
    | "ic-menu-transactions"
    | "ic-menu-messages"
    | "ic-menu-card"
    | "ic-menu-reward"
    | "ic-menu-setting"
    | "ic-menu-logout";
  active?: boolean;
  onClick?: () => void;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href = "/", onClick } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active: active,
  });
  return (
    <div className={classItem} onClick={onClick}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt={""} />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        ) : (
          <Link href={href} className="text-lg text-decoration-none">
            {title}
          </Link>
        )}
      </p>
    </div>
  );
}
