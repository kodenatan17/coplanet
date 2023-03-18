import React from "react";
import ReachedItems from "../../molecules/ReachedItems";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <div className="me-lg-35">
            <ReachedItems title={"Members Top Up"} subtitle={"290M+"} />
          </div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="me-lg-35 ms-lg-35">
            <ReachedItems title={"12.500"} subtitle={"Menus Available"} />
          </div>
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <div className="me-lg-35 ms-lg-35">
            <ReachedItems title={"99,9%"} subtitle={"Happy Members"} />
          </div>
          <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div>
          <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div>
          <div className="me-lg-35 ms-lg-35">
            <ReachedItems title={"4.7"} subtitle={"Rating Our Brands"} />
          </div>
        </div>
      </div>
    </section>
  );
}
