import { IcBack } from "@svg";
import {
  headerContainer,
  headerWrapper,
  iconStyle,
  textStyle,
} from "./Header.style";

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  return (
    <header css={headerContainer}>
      <div css={headerWrapper}>
        <span css={iconStyle}>
          <IcBack />
        </span>
        <h4 css={textStyle}>{text}</h4>
      </div>
    </header>
  );
};

export default Header;
