import PropTypes from 'prop-types';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import SchoolIcon from '@mui/icons-material/School';
import "./topbar.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function TopBar({ activeNav, selected }) {

	const [isOffcanvasVisible, setOffcanvasVisible] = useState(false);
	const navigate = useNavigate();

	const win = window.sessionStorage;

	async function logout() {
		win.removeItem("token");
		win.removeItem("role");
		win.removeItem("name");
		try {
			const res = await axios.post(
				"http://127.0.0.1:8000/api/logout",
				{},
				{
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				}
			);
			navigate('/');
			console.log(res.data);
		} catch (err) { }
	}

	const handleNavItemClick = (navItem) => {
		selected(navItem);
		setOffcanvasVisible(!isOffcanvasVisible);
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg sticky-top  bg-light">
				<div className="container-fluid">
					<a className="navbar-brand me-0" href="/">LOGO</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#nav-bar"
						aria-controls="nav-bar"
						// aria-expanded={`${isOffcanvasVisible ? true : false}`}
						aria-label="Toggle navigation"
						onClick={() => {
							setOffcanvasVisible(!isOffcanvasVisible)
							document.body.style.removeProperty('overflow')
							document.body.style.removeProperty('padding-right')
						}}
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className={`offcanvas offcanvas-end w-50 bg-light 
						${isOffcanvasVisible === true ? "" : "hide"}`}
						tabIndex="-1"
						id="nav-bar"
						data-bs-backdrop="false"
						onBlur={() => setOffcanvasVisible(false)}
					>
						<div className="offcanvas-header py-auto">
							<h4 className="me-auto my-auto">ADMIN</h4>
							<button
								type="button"
								className="btn-close ms-auto rounded-circle p-2 bg-danger"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</div>
						<ul className="navbar-nav d-flex justify-content-end mb-lg-0">
							{/* DropDown Menu */}
							<div className="dropdown d-none d-lg-block my-auto">
								<button
									className="btn btn-sm btn-secondary dropdown-toggle d-flex align-items-center
									text-capitalize"
									type="button" data-bs-toggle="dropdown"
									aria-expanded="false"
								>{window.sessionStorage.getItem('name')}
								</button>
								<ul className="dropdown-menu dropdown-menu-end">
									<li>
										<span
											className={`dropdown-item fw-bold d-flex gap-1
											${activeNav === "profile" ? "bg-primary text-white" : ""}`}
											onClick={() => selected("profile")}
											style={{ cursor: "pointer" }}
										>
											<AccountCircleIcon />
											Profile
										</span>
									</li>
								</ul>
							</div>

							{/* OffCanvas */}
							<li
								className={`nav-item d-flex gap-1 my-1 px-4 d-block d-lg-none p-1 
									text-uppercase text-primary fw-bold w-100 
            			${activeNav === "profile" ? "bg-primary text-white" : ""}`}
								style={{ cursor: "pointer" }}
								onClick={() => handleNavItemClick("profile")}
							><AccountCircleIcon />Profile
							</li>
							<li
								className={`nav-item d-flex gap-1 my-1 px-4 d-block d-lg-none p-1 
									text-uppercase text-primary fw-bold w-100 
            			${activeNav === "dashboard" ? "bg-primary text-white" : ""}`}
								style={{ cursor: "pointer" }}
								onClick={() => handleNavItemClick("dashboard")}
							>
								<DashboardIcon />
								Dashboard
							</li>
							<li
								className={`nav-item d-flex gap-1 my-1 px-4 d-block d-lg-none p-1 
									text-uppercase text-primary fw-bold w-100 
            			${activeNav === "courses" ? "bg-primary text-white" : ""}`}
								style={{ cursor: "pointer" }}
								onClick={() => handleNavItemClick("courses")}
							><SchoolIcon />Courses
							</li>
							<li
								className={`nav-item d-flex gap-1 my-1 px-4 d-block d-lg-none p-1 
									text-uppercase text-primary fw-bold w-100 
            			${activeNav === "tutors" ? "bg-primary text-white" : ""}`}
								style={{ cursor: "pointer" }}
								onClick={() => handleNavItemClick("tutors")}
							><HowToRegIcon />Tutors
							</li>
							<li
								className={`nav-item d-flex gap-1 my-1 px-4 d-block d-lg-none p-1 
									text-uppercase text-primary fw-bold w-100 
            			${activeNav === "clients" ? "bg-primary text-white" : ""}`}
								style={{ cursor: "pointer" }}
								onClick={() => handleNavItemClick("clients")}
							><PeopleAltIcon />Clients
							</li>
							<li
								className={`nav-item d-flex gap-1 my-1 px-4 d-block d-lg-none p-1 
									text-uppercase text-primary fw-bold w-100 
            			${activeNav === "analytics" ? "bg-primary text-white" : ""}`}
								style={{ cursor: "pointer" }}
								onClick={() => handleNavItemClick("analytics")}
							><AnalyticsIcon />Analytics
							</li>
							<hr />
							<li
								className={`nav-item d-flex gap-1 my-1 px-4 d-block d-lg-none p-1 
									text-uppercase text-danger fw-bold w-100`}
								onClick={logout}
							><LogoutIcon />Logout
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}

TopBar.propTypes = {
	activeNav: PropTypes.string,
	selected: PropTypes.func
};