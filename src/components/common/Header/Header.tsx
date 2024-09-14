import { IcBack } from "@svg";
import { headerContainer, iconStyle, textStyle } from "./Header.style";

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  return (
    <header css={headerContainer}>
      <span css={iconStyle}>
        <IcBack />
      </span>
      <h4 css={textStyle}>{text}</h4>
    </header>
  );
};

export default Header;
