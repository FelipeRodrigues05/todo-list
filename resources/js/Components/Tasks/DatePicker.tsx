import { InputHTMLAttributes } from "react";

interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function DatePicker(props: DatePickerProps) {
  return (
    <>
      <input type="date" {...props} className={`rounded ${props.className}`}/>
    </>
  )
}