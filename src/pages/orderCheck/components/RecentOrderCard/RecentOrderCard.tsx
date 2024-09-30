import { cardWrapper, nameStyle, numberStyle } from "./RecentOrderCard.style";

interface RecentOrderCardProps {
  orderNumber: number;
  senderName: string;
}

const RecentOrderCard = ({ orderNumber, senderName }: RecentOrderCardProps) => {
  return (
    <div css={cardWrapper}>
      <span css={numberStyle}>{orderNumber}번</span>
      <span css={nameStyle}>{senderName}</span>
    </div>
  );
};

export default RecentOrderCard;
