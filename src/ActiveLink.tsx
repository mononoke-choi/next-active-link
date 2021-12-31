import Link from 'next/link';

export interface ActiveLinkProps {}

const ActiveLink = (props: ActiveLinkProps) => {
  return <Link to={'/'} {...props} />;
};

export default ActiveLink;
