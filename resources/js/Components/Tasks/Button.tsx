import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: any;
  url?: string;
  className?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <>
      <button {...props} className={`rounded p-2 mx-1 my-1 ${props.className}`}>
        <a href={props.url}>{props.name}</a>
      </button>
    </>
  );
}
