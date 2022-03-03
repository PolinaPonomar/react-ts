import React, {FC, useState} from 'react';

export enum CardVariant { // enum - перечисление
  outlined = 'outlined',
  primary = 'primary'
}

interface CardProps { // тут собраны типы всех пропсов компонента
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: (num: number) => void; // void - функция ничего не возвращает
}

const Card:FC<CardProps> = 
({
  width, 
  height,
  variant,
  onClick,
  children 
}) => {

  const [state, setState] = useState(0);
  return (
    <div style = {{width, height, 
      border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
      background: variant === CardVariant.primary ? 'lightgray' : ''
    }}
      onClick = {() => onClick(state)}
    >
      {children}
    </div>
  )
};

export default Card;
