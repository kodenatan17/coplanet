import React from "react";

interface ReachedItemProps {
  title: string;
  subtitle: string;
}

export default function ReachedItems(props: ReachedItemProps) {
  const { title, subtitle } = props;
  return (
    <>
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {title}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {subtitle}
      </p>
    </>
  );
}
