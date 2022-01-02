import beautify from 'json-beautify';
import { useRouter } from 'next/router';

export function Users() {
  const router = useRouter();

  return (
    <div>
      <h1>next-active-link Example</h1>
      <h2>Router information</h2>
      <code>{beautify(router, null, 2, 80)}</code>
    </div>
  );
}

export default Users;
