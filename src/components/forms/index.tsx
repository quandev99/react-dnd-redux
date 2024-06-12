import InputElement from "./InputElement";
import SelectElement from "./SelectElement";
import CheckboxElement from "./CheckboxElement";
import TextareaElement from "./TextareaElement";
import SwitchElement from "./SwitchElement";
import InputNumberElement from "./InputNumberElement";

const ElementMap = {
  input: InputElement,
  select: SelectElement,
  checkbox: CheckboxElement,
  textarea: TextareaElement,
  switch: SwitchElement,
  number: InputNumberElement,
};

export default ElementMap;
