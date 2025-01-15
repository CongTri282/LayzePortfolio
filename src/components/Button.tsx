import { Button as BootstrapButton } from "react-bootstrap";
import "./Button.css";

interface ButtonProps {
  content: string;
  href: string;
}

function Button({ content, href }: ButtonProps) {
  return (
    <BootstrapButton className="button-primary" href={href}>
      {content}
    </BootstrapButton>
  );
}

export default Button;
