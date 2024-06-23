import { useSession, getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

interface Metric {
  name: string;
  value: number;
}

const AdminDashboard: React.FC = () => {
  const { data: session, status } = useSession();
  const [metrics, setMetrics] = useState<Metric[]>([]);

  useEffect(() => {
    const fetchMetrics = async () => {
      const response = await axios.get<Metric[]>('/api/admin/metrics');
      setMetrics(response.data);
    };
    fetchMetrics();
  }, []);

  if (status === 'loading') return <p>Loading...</p>;

  if (!session) return <p>You need to be authenticated to view this page.</p>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <LineChart width={600} height={300} data={metrics}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default AdminDashboard;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};
