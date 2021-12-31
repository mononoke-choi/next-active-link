import Link from 'next/link';
import React from 'react';

export interface ActiveLinkProps {
  text?: string;
}

// todo
// - change library name
// - change to component real logic
// - deploy to npm
// - check library size
// - rewrite test code

const ActiveLink = ({ text }: ActiveLinkProps) => (
  <Link href={'/'}>{text}</Link>
);

export default ActiveLink;
