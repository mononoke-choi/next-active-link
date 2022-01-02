import Link from 'next/link';
import MainDesc from '../components/mainDesc';
import { UN_NESTED_PAGE } from '../const/routes';

export function Index() {
  return (
    <>
      <MainDesc />
      <ul>
        <li>
          <Link href={UN_NESTED_PAGE.href}>Go to Un-Nested page</Link>
        </li>
      </ul>
    </>
  );
}

export default Index;
