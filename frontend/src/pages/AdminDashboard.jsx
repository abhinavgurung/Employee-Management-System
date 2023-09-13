import Sidebar from '../components/Sidebar';
import DataPane from '../components/DataPane';
import Rightbar from '../components/Rightbar';
import { Stack } from '@mui/material';

const AdminDashboard = () => {
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <DataPane />
        <Rightbar />
      </Stack>
    </>
  );
};

export default AdminDashboard;
