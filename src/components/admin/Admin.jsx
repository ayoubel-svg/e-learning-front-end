import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

import "./App.css";

import Topbar from "./AdminComponent/topbar/Topbar";
import SideBar from "./AdminComponent/sidebar/SideBar";
import Summary from "./AdminComponent/summary/Summary";
import BestSellCourses from "./AdminComponent/courses/BestSellCourses";
import BestSellingTutors from "./AdminComponent/tutors/BestSellingTutors";
import NewTutors from "./AdminComponent/tutors/NewTutors";
import Courses from "./AdminComponent/courses/Courses";
import AllTutors from "./AdminComponent/tutors/AllTutors";
import Clients from "./AdminComponent/clients/Clients";
import Analytics from "./AdminComponent/analytics/Analytics";
import Profile from "./AdminComponent/profile/Profile";


export default function Admin() {

  const [activeNav, setActive] = useState("dashboard");
  const navigate = useNavigate();

  const selected = (navItem) => { setActive(navItem) };

  useEffect(() => {
    if (!window.sessionStorage.getItem('role', 1)) {
      navigate('/');
    }
  });

  return (
    <>
      <div className="bg-light min-vh-100 overflow-y">
        <Topbar activeNav={activeNav} selected={selected} />
        <div className="container-fluid m-auto">
          <div className="row">
            <div className="col w-auto bg-light py-5 d-none d-lg-block m-auto">
              <SideBar activeNav={activeNav} selected={selected} />
            </div>
            {activeNav === "dashboard" ?
              <>
                <div className="col-12 col-lg-6 bg-light m-auto gap-3">
                  <Summary />
                  <NewTutors />
                </div>
                <div className="col-12 col-lg-4 bg-light m-auto">
                  <BestSellCourses />
                  <BestSellingTutors />
                </div>
              </>
              : activeNav === "courses" ?
                <>
                  <div className="col-12 col-lg-10 bg-light m-auto">
                    <Courses />
                  </div>
                </>
                : activeNav === "tutors" ?
                  <>
                    <div className="col-12 col-lg-10 bg-light m-auto">
                      <AllTutors />
                    </div>
                  </>
                  : activeNav === "clients" ?
                    <>
                      <div className="col-12 col-lg-10 bg-light m-auto">
                        <Clients />
                      </div>
                    </>
                    :
                    activeNav === "analytics" ?
                      <>
                        <div className="col-12 col-lg-10 bg-light m-auto">
                          <Analytics />
                        </div>
                      </>
                      : activeNav === "profile" ?
                        <>
                          <div className="col-12 col-lg-10 bg-light m-auto">
                            <Profile />
                          </div>
                        </>
                        : ""
            }
          </div>
        </div>
      </div>
    </>
  )
}

Admin.propTypes = {
  activeNav: PropTypes.string,
  selected: PropTypes.func
};