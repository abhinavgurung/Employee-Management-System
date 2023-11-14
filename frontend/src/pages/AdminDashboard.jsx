import Sidebar from '../components/Sidebar';
import EnhancedTable from '../components/DataPane';
import Rightbar from '../components/Rightbar';
import { Stack } from '@mui/material';

const AdminDashboard = () => {
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <EnhancedTable />
        <Rightbar />
      </Stack>
    </>
  );
};

export default AdminDashboard;
