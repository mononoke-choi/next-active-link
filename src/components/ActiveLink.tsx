import Link from 'next/link';

export interface ActiveLinkProps {
  text?: string;
}

const ActiveLink = ({ text }: ActiveLinkProps) => (
  <Link href={'/'}>{text}</Link>
);

export default ActiveLink;
