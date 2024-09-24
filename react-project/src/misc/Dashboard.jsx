import { Link } from 'react-router-dom';
import '../../css/popups.css'
import backendData from "../../json/users.json"



const Dashboard = () => {
  
    const data = backendData;
     

  return (
    <>
    
    <Link to="/profile" className='btnn1'>Fernando / </Link>
   
    </>
  );
};

export default Dashboard;