import { FC, InputHTMLAttributes } from "react";
import "./Input.scss";

type InputProps = {
  name?: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>

const Input: FC<InputProps> = ({name, label, ...rest}) => {
  return (
    <div className="input-wrapper">
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input id={name} {...rest} />
    </div>
  )
}

export default Input;