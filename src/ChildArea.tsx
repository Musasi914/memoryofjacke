import { memo } from "react";

type ChildAreaProps = {
  open: boolean;
  onClickClose: () => void;
};

const ChildArea = memo(({ open, onClickClose }: ChildAreaProps) => {
  return (
    <>
      {open ? (
        <div>
          <p>kodomo</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

export default ChildArea;
