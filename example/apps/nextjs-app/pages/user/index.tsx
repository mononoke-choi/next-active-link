import Link from 'next/link';
import MainDesc from '../../components/mainDesc';
import {
  USER_DETAIL1,
  USER_DETAIL2,
  USER_DETAIL3,
} from '../../constants/routes';

export function Users() {
  return (
    <>
      <MainDesc />
      <ul>
        <li>
          <Link href={USER_DETAIL1.href}>Go to user1 detail</Link>
        </li>
        <li>
          <Link href={USER_DETAIL2.href}>Go to user2 detail</Link>
        </li>
        <li>
          <Link href={USER_DETAIL3.href}>Go to user3 detail</Link>
        </li>
      </ul>
    </>
  );
}

export default Users;
