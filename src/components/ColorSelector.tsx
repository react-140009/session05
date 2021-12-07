import { useRef } from "react";
export const ColorSelector = () => {
  const selectRef = useRef<any>();
  const onChnage = (val: string) => {
    selectRef.current.style.color = val;
  };
  return (
    <select ref={selectRef} onChange={(e) => onChnage(e.target.value)}>
      <option value="red">red</option>
      <option value="green">green</option>
      <option value="blue">blue</option>
    </select>
  );
};
