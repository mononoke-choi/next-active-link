import Link from 'next/link';

export interface ActiveLinkProps {
  text?: string;
}

const ActiveLink = (props: ActiveLinkProps) => <Link href={'/'} {...props} />;

export default ActiveLink;
