import React from "react";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SidebarProps {
  activeMenu: "overview" | "transactions" | "settings";
}
export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="ic-menu-overview"
            active={activeMenu === "overview"}
            href="/member"
          />
          <MenuItem
            title="Transactions"
            icon="ic-menu-transactions"
            href="/member/transactions"
            active={activeMenu === "transactions"}
          />
          <MenuItem title="Messages" icon="ic-menu-messages" href="/member" />
          <MenuItem title="Card" icon="ic-menu-card" href="/member" />
          <MenuItem title="Rewards" icon="ic-menu-reward" href="/member" />
          <MenuItem
            title="Settings"
            icon="ic-menu-setting"
            href="/member/edit-profile"
            active={activeMenu === "settings"}
          />
          <MenuItem title="Logout" icon="ic-menu-logout" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
