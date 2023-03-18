import React from "react";

interface TopupItemProps {
  type: "desktop" | "mobile";
}
export default function TopupItem(props: TopupItemProps) {
  const { type } = props;

  if (type === "desktop") {
    return (
      <div className="row align-items-center">
        <div className="col-md-12 col-4">
          <img
            src="/img/Thumbnail-3.png"
            width="280"
            height="380"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-md-12 col-8 d-md-none d-block">
          <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
            Coklat Cocol:
            <br />
            The New Inspire 2023
          </h2>
          <p className="text-sm color-palette-2 text-start mb-0">
            Category: Mobile
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="row align-items-center">
      <div className="col-md-12 col-4">
        <img
          src="/img/Thumbnail-3.png"
          width="280"
          height="380"
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="col-md-12 col-8 d-md-none d-block">
        <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
          Coklat Cocol:
          <br />
          The New Inspire 2023
        </h2>
        <p className="text-sm color-palette-2 text-start mb-0">
          Category: Mobile
        </p>
      </div>
    </div>
  );
}
