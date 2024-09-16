import { Button, Header, ProgressBar } from "@components";
import { StepProps } from "@types";
import {
  buttonSectionStyle,
  checkboxWrapper,
  layoutStyle,
  mainSectionStyle,
  orangeTextStyle,
  sectionStyle,
  textStyle,
} from "./Sender.style";
import Input from "src/components/common/Input/Input";
import { useState } from "react";
import CheckBox from "src/components/common/CheckBox/CheckBox";

const Sender = ({ onNext }: StepProps) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState<number>();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handleButtonClick = () => {
    onNext();
  };
  return (
    <>
      <Header text="보내는 분" />
      <ProgressBar progress={14.28} />
      <div css={layoutStyle}>
        <section css={sectionStyle}>
          <div css={textStyle}>
            <span css={orangeTextStyle}>보내는 분</span>의
            <br />
            이름과 휴대폰 번호를 입력해주세요
          </div>
        </section>
        <section css={mainSectionStyle}>
          <Input
            value={name}
            onChange={handleNameChange}
            type="name"
            placeholder="이름을 입력하세요"
            inputLabel="이름"
          />
          <Input
            value={number}
            onChange={handleNumberChange}
            type="text"
            placeholder="휴대폰 번호를 입력하세요"
            inputLabel="휴대폰 번호"
          />
          <div css={checkboxWrapper}>
            <CheckBox>[필수] 개인정보 수집 및 이용 동의</CheckBox>
            <CheckBox>[선택] 마케팅 활용 동의</CheckBox>
          </div>
        </section>
        <footer css={buttonSectionStyle}>
          <Button variant="fill" onClick={handleButtonClick}>
            다음
          </Button>
        </footer>
      </div>
    </>
  );
};

export default Sender;
