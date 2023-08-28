import React, { PropsWithChildren } from 'react';

import { Link, LinkProps } from '@chakra-ui/react';

type Props = PropsWithChildren<LinkProps>;

const CustomLink = (props: Props) => {
  const { children, ...rest } = props;
  return <Link {...rest}>{children}</Link>;
};

export default CustomLink;
