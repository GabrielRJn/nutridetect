import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

const ArrowIcon = (props) => {
  return (
    <Link to={props.LinkTo}>
    <Tooltip label="Go back" aria-label="A tooltip">
  < ArrowBackIcon boxSize="10" color="blackAlpha.700" mt={10} ml={10} as="span"/ >
  </Tooltip>
  </Link>
  );
};

export default ArrowIcon;