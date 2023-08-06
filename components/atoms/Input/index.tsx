import React from "react";

export interface InputProps {
  label: string;
  disabled?: boolean | null;
  value?: string | null;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | null;
}
export default function Input(props: InputProps) {
  const { label, disabled, onChange, value, ...nativeProps } = props;
  return (
    <>
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id="name"
        name="name"
        aria-describedby="name"
        placeholder="Enter your name"
        disabled={disabled || false}
        value={value || ""}
        onChange={onChange}
        {...nativeProps}
      />
    </>
  );
}
