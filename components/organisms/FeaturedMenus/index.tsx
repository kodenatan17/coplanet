import React from "react";
import MenuItems from "../../molecules/MenuItems";

export default function FeauturedMenus() {
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
          <MenuItems
            title="Chocolate Mousse"
            category="Heavy Cream"
            thumbnail="/img/Thumbnail-1.png"
          />
          <MenuItems
            title="Chocolate Bombs Lava"
            category="Heavy Cream"
            thumbnail="/img/Thumbnail-2.png"
          />
          <MenuItems
            title="Square Assorted"
            category="Light Cream"
            thumbnail="/img/Thumbnail-3.png"
          />
          <MenuItems
            title="Choco Tiramisu"
            category="Heavy Cream"
            thumbnail="/img/Thumbnail-4.png"
          />
          <MenuItems
            title="Chocobars Mints"
            category="Light Cream"
            thumbnail="/img/Thumbnail-5.png"
          />
        </div>
      </div>
    </section>
  );
}
