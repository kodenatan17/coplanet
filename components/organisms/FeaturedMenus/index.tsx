import React, { useCallback, useEffect, useState } from "react";
import { MenuItemTypes } from "../../../services/data-types";
import { getFeaturedMenu } from "../../../services/player";
import MenuItems from "../../molecules/MenuItems";

export default function FeauturedMenus() {
  const [menuList, setmenuList] = useState([]);
  const getFeaturedMenuList = useCallback(async () => {
    const data = await getFeaturedMenu();
    setmenuList(data);
  }, [getFeaturedMenu]);

  useEffect(() => {
    getFeaturedMenuList();
  }, []);

  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Menus This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {menuList.map((items: MenuItemTypes) => {
            return (
              <MenuItems
                key={items._id}
                title={items.name}
                category={items.category.name}
                thumbnail={`${API_IMG}/${items.thumbnail}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
