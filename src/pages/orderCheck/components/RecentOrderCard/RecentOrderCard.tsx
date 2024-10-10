import { cardWrapper, nameStyle, numberStyle } from "./RecentOrderCard.style";

interface RecentOrderCardProps {
  orderNumber: number;
  senderName: string;
  deliveryStatus: string;
  onClick: () => void;
}

const RecentOrderCard = ({
  orderNumber,
  senderName,
  deliveryStatus,
  onClick,
}: RecentOrderCardProps) => {
  return (
    <div css={cardWrapper(deliveryStatus)} onClick={onClick}>
      <span css={numberStyle(deliveryStatus)}>{orderNumber}번</span>
      <span css={nameStyle}>{senderName}</span>
    </div>
  );
};

export default RecentOrderCard;
