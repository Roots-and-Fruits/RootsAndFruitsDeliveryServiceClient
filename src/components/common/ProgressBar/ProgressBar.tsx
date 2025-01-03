import { progressBarContainer, progressBarStyle } from "./ProgressBar.style";
import { useAtom } from "jotai";
import { categoryAtom } from "@stores";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const [category] = useAtom(categoryAtom);

  return (
    <div css={progressBarContainer}>
      <div css={progressBarStyle(progress, category)} />
    </div>
  );
};

export default ProgressBar;
