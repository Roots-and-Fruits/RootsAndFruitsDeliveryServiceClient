import { IcBack } from "@svg";
import {
  headerContainer,
  headerWrapper,
  iconStyle,
  textStyle,
} from "./Header.style";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <header css={headerContainer}>
      <div css={headerWrapper}>
        <span css={iconStyle} onClick={handleBackClick}>
          <IcBack />
        </span>
        <h4 css={textStyle}>{text}</h4>
      </div>
    </header>
  );
};

export default Header;
