import React, { useCallback, useEffect, useState } from "react";
import { MenuItemTypes } from "../../../services/data-types";
import { getFeaturedMenu } from "../../../services/player";
import MenuItems from "../../molecules/MenuItems";

export default function FeauturedMenus() {
  const [menuList, setmenuList] = useState([]);
  // catatan: menuList adalah variable yang digunakan untuk membuat state
  // catatan:setMenuList adalah variable yang digunakan untuk meconsume state
  // catatan:useState('ini adalah jenis object data/ contohnya ada false = boolean, itu berisi true, false')
  // catatan:useState([]) => ini adalah jenis object data yang berbentuk list
  // catatan:useState({}) => ini adalah jenis object data yang berbentuk object
  const getFeaturedMenuList = useCallback(async () => {
    const data = await getFeaturedMenu();
    setmenuList(data);
  }, [getFeaturedMenu]);

  useEffect(() => {
    getFeaturedMenuList();
  }, []);

  const API_IMG = process.env.NEXT_PUBLIC_IMG;
  // catatan:API IMG adalah url umtuk mengambil data yang berada di domain backend
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
          {/* catatan:ini adalah function untuk mengambil data menuList, karena dia datanya itu object list
          maka kita map datanya untuk mengambil/menconsume reponse yang akan ditampilkan */}
          {menuList.map((items: MenuItemTypes) => {
            return (
              <MenuItems
                key={items._id}
                title={items.name}
                category={items.category ? items.category.name : "Unknown"}
                thumbnail={`${API_IMG}/${items.thumbnail}`}
                id={items._id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
