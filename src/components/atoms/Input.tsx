import React from 'react';

import { Input, InputProps } from '@chakra-ui/react';

type Props = InputProps;

const CustomInput = (props: Props) => {
  return <Input width={{ base: '100%', md: '800px' }} {...props} />;
};

export default CustomInput;
