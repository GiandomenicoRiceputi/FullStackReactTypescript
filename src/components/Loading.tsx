import React from "react";
import "./loading.scss";

type Props = {
  loading: boolean;
  label: string;
  onClick: () => void;
};
const Loading: React.FC<Props> = (props) => {
  return (
    // @ts-ignore
    <button onClick={props.onClick} type="button">
      {props.loading ? <div>Loading...</div> : props.label}
    </button>
  );
};

export default Loading;
