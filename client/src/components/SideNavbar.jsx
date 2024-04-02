import React from "react";
import Navitem from "./Navitem";
import overviewLogo from "/assets/overview.png";
import sensorsLogo from "/assets/sensors.png";
import settingsLogo from "/assets/settings.png";
import analyticsLogo from "/assets/analytics.png";
const SideNavbar = () => {
  return (
    <section className="bg-[#c1ffa7] md:flex md:w-[200px] md:justify-center ">
      <nav className="mt-8">
        <ul className="flex flex-col gap-y-6">
          <Navitem
            to="/dashboard"
            image={overviewLogo}
            altText="Review"
            name="Review"
          />
          <Navitem
            to="sensors"
            image={sensorsLogo}
            altText="sensors"
            name="Sensors"
          />
          <Navitem
            to="settings"
            image={settingsLogo}
            altText="settings"
            name="Settings"
          />
          <Navitem
            to="analytics"
            image={analyticsLogo}
            altText="Analytics"
            name="Analytics"
          />
        </ul>
      </nav>
    </section>
  );
};

export default SideNavbar;
