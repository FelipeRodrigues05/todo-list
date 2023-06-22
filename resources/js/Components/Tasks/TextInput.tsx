import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function TextInput(props: InputProps) {
  return (
    <input type="text" className={`rounded ${props.className}`} {...props} />
  );
}

export function TextArea(props: TextAreaProps) {
  return (
    <textarea className={`rounded ${props.className}`} {...props}></textarea>
  );
}
