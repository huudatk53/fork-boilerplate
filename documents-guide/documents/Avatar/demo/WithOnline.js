import React from 'react';
import { Avatar, Badge } from '@/rc-neumorphism/core';

const avatarLink = '';

const Demo = () => {
  return (
    <Badge dot color="#0df316" overlap bottomRight>
      <Avatar
        src={avatarLink}
        name="Hoàng Nguyễn"
      />
    </Badge>
  );
};

export default Demo;