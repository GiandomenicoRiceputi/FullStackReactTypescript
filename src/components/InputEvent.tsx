import React, { FC } from "react";
import "./input-event.scss";

type InputEventProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputEvent: FC<InputEventProps> = ({ value, onChange }) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default InputEvent;
