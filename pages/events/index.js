import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

export default function EventsPage() {
  const router = useRouter();

  const slug = router.query.slug;

  return (
    <Layout title='All Events | Next Events'>
      <h1>All Events</h1>
    </Layout>
  );
}
