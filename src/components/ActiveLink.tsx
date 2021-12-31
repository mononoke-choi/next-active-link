import Link from 'next/link';
import React from 'react';

export interface ActiveLinkProps {
  text?: string;
}

const ActiveLink = (props: ActiveLinkProps) => <Link href={'/'} {...props} />;

export default ActiveLink;
