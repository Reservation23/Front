import React from 'react';

import { Select, SelectProps } from '@chakra-ui/react';

interface Props {
  list: { title: string; value: string }[];
  setValue: (value: string) => void;
  select?: SelectProps;
}

const CustomSelect: React.FC<Props> = ({ list, setValue, select }) => {
  return (
    <Select {...select} onChange={(e) => setValue(e.target.value)}>
      {list.map((item, index) => (
        <option key={index} value={item.value}>
          {item.title}
        </option>
      ))}
    </Select>
  );
};

export default CustomSelect;
