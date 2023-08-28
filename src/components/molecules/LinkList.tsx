import React from 'react';
import CustomLink from '../atoms/Link';

import { Flex } from '@chakra-ui/react';

interface LinkItem {
  path: string;
  name: string;
}

interface LinkListProps {
  linkList: LinkItem[];
}

const LinkList: React.FC<LinkListProps> = ({ linkList }) => {
  return (
    <Flex gap={6}>
      {linkList?.map(({ path, name }, index) => (
        <CustomLink href={path} key={index}>
          {name}
        </CustomLink>
      ))}
    </Flex>
  );
};

export default LinkList;
