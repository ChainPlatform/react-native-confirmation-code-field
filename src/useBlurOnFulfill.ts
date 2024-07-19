import { useRef, useEffect } from 'react';
import { TextInput } from 'react-native';

interface Options {
  setValueOTP(text: string): void;
  value?: string;
  cellCount: number
}

export const useBlurOnFulfill = ({ value, cellCount, setValueOTP }: Options) => {
  const inputRef = useRef<TextInput>(null);
  useEffect(() => {
    if (value && value.length === cellCount) {
      const inputInstance = inputRef.current;

      if (inputInstance) {
        inputInstance.blur();
      }
    }
    setValueOTP(value ? value : "");
  }, [value, cellCount]);

  return inputRef;
};
