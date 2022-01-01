import Link from 'next/link';
import React from 'react';

export interface ActiveLinkProps {
  text?: string;
}

// todo
// - change to component real logic
// - change library name to unscoped package
// - deploy to npm too
// - rewrite test code

const ActiveLink = ({ text }: ActiveLinkProps) => (
  <Link href={'/'}>{text}</Link>
);

export default ActiveLink;
