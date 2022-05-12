interface BaseButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
}

export type ButtonProps = BaseButtonProps;
