import { Input, InputProps } from "antd";
import { ChangeEvent, KeyboardEvent, useCallback, useMemo, useState } from "react";

type MaskProps = {
  mask: string;
}
const isAlphaNum = (str: string) => /^[a-zA-Z0-9]+$/.test(str);
const isAlpha = (str: string) => /^[a-zA-Z]+$/.test(str);
const isNum = (str: string) => /^[0-9]+$/.test(str);
const onlyAlphaNum = (str: string) => {
  const res = str.match(/[a-zA-Z0-9]/g);
  return res ? res.join('') : '';
}
export default function MasekdInput({mask, value: val, onChange, ...props}: MaskProps & InputProps) {
  const [ currentVal, setCurrentVal ] = useState(`${val ?? ''}`);
  const [alphaNumChars, maskChars] = useMemo(() => {
    const alphaNumAux: string[] = [];
    const maskAux: Record<number, string> ={};

    mask.split('').forEach((str, index) => {
      if (isAlphaNum(str)) alphaNumAux.push(str);
      else maskAux[index] = str;
    });
    console.log({maskAux});

    return [alphaNumAux, maskAux];
  }, [mask]);

  const validateKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    const { key, currentTarget: { selectionStart, value } } = event
    if (key.length !== 1 || !isAlphaNum(key) || selectionStart === null || value.length >= mask.length) return;
    
    let increment = 0;
    const options: Record<string, any> = {
      '0': () => isNum(key),
      'A': () => isAlpha(key),
      'X': () => isAlphaNum(key),
    }

    if (!isAlphaNum(mask[selectionStart])) increment = 1;
    if (options[mask[selectionStart + increment].toUpperCase()] && !options[mask[selectionStart + increment].toUpperCase()]()) {
      return event.preventDefault();
    }
  }, [mask]);

  const handleChangeEvent = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value, selectionStart, setSelectionRange } = event.target;

    let change = '';
    const alhpaNumValue = onlyAlphaNum(value);
    const len = alhpaNumValue.length;

    change = alhpaNumValue.slice(0, 2)
    Object.keys(maskChars).forEach((ch, i, arr) => {
      const currIndex = Number(ch);
      const nextIndex = arr.length === (i+1) ? undefined : Number(arr[i+1]) - (i+1);

      if (len+i > currIndex) {
        change += maskChars[currIndex] + alhpaNumValue.slice(currIndex-i, nextIndex);
      }
    });
    event.target.value = change;

    if (onChange) onChange(event); // EXECUTED REAL CHANGE

    setTimeout(() => {
      if (selectionStart !== null) {
        let position = selectionStart;
        if (value.length > currentVal.length) {
          position += maskChars[selectionStart-1] ? 1 : 0;
          setSelectionRange(position, position);
        } else {
          position -= 
          maskChars[selectionStart-1] ? 1 : 0;
          setSelectionRange(position,position);
        }
      }
      setCurrentVal(value);
    }, 15);
  }, [maskChars, onChange, setCurrentVal, currentVal]);

  return (
    <Input {...props} onChange={handleChangeEvent} maxLength={mask.length} value={val} onKeyDown={validateKeyDown}/>
  );
}