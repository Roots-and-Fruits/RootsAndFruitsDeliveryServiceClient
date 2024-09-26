import { Header, ProgressBar } from "@components";
import { useLocation } from "react-router-dom";
import EditSender from "./EditSender/EditSender";
import EditReceiver from "./EditReceiver/EditReceiver";

const Edit = () => {
  const location = useLocation();
  const state = location.state as { type: string; index?: number };
  const receiverIndex = state.index !== undefined ? state.index : 0;
  return (
    <>
      <Header text="주문 정보 수정" />
      <ProgressBar progress={85.68} />
      {state.type === "sender" ? (
        <EditSender />
      ) : (
        <EditReceiver receiverIndex={receiverIndex} />
      )}
    </>
  );
};

export default Edit;
