import { useState } from "react";
import PropTypes from 'prop-types';

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
  const selected = (navItem) => { setActive(navItem) };

  return (
    <>
      <div>
        <Topbar activeNav={activeNav} selected={selected} />
        <div className="container-fluid">
          <div className="row min-vh-100">
            <div className="col w-auto bg-light py-5 d-none d-lg-block">
              <SideBar activeNav={activeNav} selected={selected} />
            </div>
            {activeNav === "dashboard" ?
              <>
                <div className="col-12 col-lg-3 bg-light">
                  <BestSellCourses />
                  <BestSellingTutors />
                </div>
                <div className="col-12 col-lg-7 bg-light">
                  <Summary />
                  <NewTutors />
                </div>
              </>
              : activeNav === "courses" ?
                <>
                  <div className="col-12 col-lg-10 bg-light">
                    <Courses />
                  </div>
                </>
                : activeNav === "tutors" ?
                  <>
                    <div className="col-12 col-lg-10 bg-light">
                      <AllTutors />
                    </div>
                  </>
                  : activeNav === "clients" ?
                    <>
                      <div className="col-12 col-lg-10 bg-light">
                        <Clients />
                      </div>
                    </>
                    :
                    activeNav === "analytics" ?
                      <>
                        <div className="col-12 col-lg-10 bg-light">
                          <Analytics />
                        </div>
                      </>
                      : activeNav === "profile" ?
                        <>
                          <div className="col-12 col-lg-10 bg-light">
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