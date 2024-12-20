import { Button, Input } from "@components";
import {
  editSenderLayout,
  spanAndInputWrapper,
  spanStyle,
} from "./EditSender.style";
import { buttonSectionStyle } from "@pages/orderInfo/styles";
import { useNavigate } from "react-router-dom";
import { useOrderPostDataChange } from "src/hooks/useOrderPostDataChange";
import { useAtom } from "jotai";
import { categoryAtom } from "@stores";

const EditSender = () => {
  const { orderPostDataState, handleInputChange } = useOrderPostDataChange();
  const navigate = useNavigate();
  const [category] = useAtom(categoryAtom);

  const handleButtonClick = () => {
    navigate(`/${category}/order-info/check-info`);
  };
  return (
    <>
      <div css={editSenderLayout}>
        <div css={spanAndInputWrapper}>
          <span css={spanStyle}>보내는 분</span>
          <Input
            value={orderPostDataState.senderName}
            onChange={(e) => handleInputChange(e, "senderName")}
            type="name"
            placeholder="이름을 입력하세요"
            inputLabel="이름"
          />
          <Input
            value={orderPostDataState.senderPhone}
            onChange={(e) => handleInputChange(e, "senderPhone")}
            type="text"
            placeholder="휴대폰 번호를 입력하세요"
            inputLabel="휴대폰 번호"
          />
        </div>
      </div>
      <footer css={buttonSectionStyle}>
        <Button variant="fill" onClick={handleButtonClick}>
          수정 완료
        </Button>
      </footer>
    </>
  );
};

export default EditSender;
