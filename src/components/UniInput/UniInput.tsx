import { FC, useEffect, useState } from "react";
import styles from './UniInput.module.css';
import { UniInputProps } from "./UniInput.props";

const UniInput:FC<UniInputProps> = ({startValue, effectFunc}) => {
  const [value, setValue] = useState(startValue);

  useEffect(() => {
    effectFunc(value)
  }, [value])

  function inputHandler(e:React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  return (
    <input 
      className={styles.paramValue} 
      type="text" 
      value={value} 
      onChange={inputHandler}
    />
  )
}

export default UniInput