import React from 'react';

import { ButtonGroup } from '@chakra-ui/react';

import CustomButton, { Props } from '../atoms/Button';

interface ButtonListProps {
  buttonList: Props[];
}

const ButtonList: React.FC<ButtonListProps> = ({ buttonList }) => {
  return (
    <ButtonGroup spacing={6}>
      {buttonList.map((props, index) => (
        <CustomButton {...props} key={index}>
          {props.children}
        </CustomButton>
      ))}
    </ButtonGroup>
  );
};

export default ButtonList;
