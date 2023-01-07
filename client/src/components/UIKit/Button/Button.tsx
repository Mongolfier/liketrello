import { ButtonHTMLAttributes } from "react";
import cx from "classNames";
import "./Button.scss";

type IButtonProps = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({className, ...rest }: IButtonProps) => {
  return (
    <button className={cx("Button", className)} {...rest}></button>
  )
}

export default Button;