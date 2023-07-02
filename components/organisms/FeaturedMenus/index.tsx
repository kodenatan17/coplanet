import React, { useCallback, useEffect, useState } from "react";
import { getFeaturedMenu } from "../../../services/player";
import MenuItems from "../../molecules/MenuItems";

export default function FeauturedMenus() {
  const [menuList, setmenuList] = useState<any[]>([]);
  const getFeaturedMenuList = useCallback(async () => {
    const data = await getFeaturedMenu();
    setmenuList(data);
  }, [getFeaturedMenu]);

  useEffect(() => {
    getFeaturedMenuList();
  }, []);

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
          {menuList.map((items) => {
            return (
              <MenuItems
                key={items._id}
                title={items.name}
                category={items.category.name}
                thumbnail={`/img/Thumbnail-1.png`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
