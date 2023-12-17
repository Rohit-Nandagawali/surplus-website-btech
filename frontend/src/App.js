import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DoneeLogin from "./pages/donee/DoneeLogin";
import DoneeRegister from "./pages/donee/DoneeRegister";
import DonorLogin from "./pages/donor/DonorLogin";
import DonorRegister from "./pages/donor/DonorRegister";
import About from "./pages/About";
import Main from "./pages/Main";
import DoneeDashboard from "./pages/donee/DoneeDashboard";
import DonorDashboard from "./pages/donor/DonorDashboard";
import DonationDetails from "./pages/donor/DonationDetails";
import DonorProfile from "./pages/donor/DonorProfile";
import AvailbaleDonations from "./pages/donee/AvailbaleDonations";
import NewDonation from "./pages/donor/NewDonation";
import DonorDetails from "./pages/donor/DonorDetails";
import UpdateDonation from "./pages/donor/UpdateDonation";
import MyDonorProfile from "./pages/donor/MyDonorProfile";
import MyDoneeProfile from "./pages/donee/MyDoneeProfile";


function App() {
  return (
    <div className="App font-Manrope">
      <Router>
        <Routes>
          <Route element={<Main />}>

            <Route path='' element={<Home />} />
            <Route path='/donee_login' element={<DoneeLogin />} />
            <Route path='/donee_register' element={<DoneeRegister />} />
            <Route path='/donor_login' element={<DonorLogin />} />
            <Route path='/donor_register' element={<DonorRegister />} />
            <Route path='/about' element={<About />} />
          </Route>
          <Route path='/donee/dashboard' element={<DoneeDashboard />} />
          <Route path='/donor/dashboard' element={<DonorDashboard />} />


          <Route path="/donee/dashboard/donationDetails/:donationId" element={<DonationDetails />} />

          <Route path="/donor/dashboard/donationDetails/:donationId" element={<DonationDetails />} />

          <Route path="/donor/dashboard/updateDonation/:donationId" element={<UpdateDonation />} />


          {/* profile pages */}
          <Route path="/donor/dashboard/myprofile/:donorId" element={<MyDonorProfile />} />

          <Route path="/donee/dashboard/myprofile/:doneeId" element={<MyDoneeProfile />} />

          <Route path="/donorDetails/:donorId" element={<DonorDetails />} />

          <Route path="/donor/dashboard/donorProfile" element={<DonorProfile />} />
          <Route path="/donor/newDonation" element={<NewDonation />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
