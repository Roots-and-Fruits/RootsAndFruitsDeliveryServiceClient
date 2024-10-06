import { cardWrapper, nameStyle, numberStyle } from "./RecentOrderCard.style";

interface RecentOrderCardProps {
  orderNumber: number;
  senderName: string;
  onClick: () => void;
}

const RecentOrderCard = ({
  orderNumber,
  senderName,
  onClick,
}: RecentOrderCardProps) => {
  return (
    <div css={cardWrapper} onClick={onClick}>
      <span css={numberStyle}>{orderNumber}번</span>
      <span css={nameStyle}>{senderName}</span>
    </div>
  );
};

export default RecentOrderCard;
