import { IcArrowBack, IcHome } from "@svg";
import {
  buttonWrapper,
  confirmModalText,
  confrimModal,
  headerContainer,
  headerLeft,
  headerRight,
  headerSection,
  headerTitle,
  iconStyle,
} from "./Header.style";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { categoryAtom } from "@stores";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

const Header = () => {
  const [category] = useAtom(categoryAtom);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleClickHome = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    localStorage.clear();
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <>
      <header css={headerContainer}>
        <div css={[headerSection, headerLeft]}>
          <IcArrowBack css={iconStyle} onClick={handleBackClick} />
        </div>
        <h2 css={[headerSection, headerTitle]}>
          {category === "product"
            ? "상품 구매 택배 접수"
            : "체험 과일 택배 접수"}
        </h2>
        <div css={[headerSection, headerRight]}>
          <IcHome css={iconStyle} onClick={handleClickHome} />
        </div>
      </header>
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <article css={confrimModal}>
            <p css={confirmModalText(category)}>
              홈으로 이동하면 지금까지 작성한
            </p>
            <p css={confirmModalText(category)}>
              <strong>데이터가 모두 삭제됩니다.</strong>
            </p>
            <p css={confirmModalText(category)}>그래도 이동하시겠습니까?</p>
            <div css={buttonWrapper}>
              <Button variant="stroke" onClick={handleCancel}>
                이어서 작성
              </Button>
              <Button variant="fill" onClick={handleConfirm}>
                홈으로 이동
              </Button>
            </div>
          </article>
        </Modal>
      )}
    </>
  );
};

export default Header;
