import React from "react";
import { useLocation, Link } from "react-router-dom";

const BreadCrumb = () => {
  const { pathname } = useLocation();
  let currentLink = "";

  const crumbs = pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="breadCrumb">
          <Link to={currentLink} style={{ color: "gray" }}>
            {crumb}
          </Link>
        </div>
      );
    });
  return <div>{crumbs}</div>;
};

export default BreadCrumb;
