import Modal from "../component/Modal";
import Create_Resume from "./Create_Resume";
import Header_Dashboard from "./Header_Dashboard";

const Dashboard = () => {
  return (
    <section>
      <Header_Dashboard />
      <Create_Resume />
    </section>
  );
};

export default Dashboard;
