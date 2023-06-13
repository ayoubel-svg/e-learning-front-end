import { Search } from "@mui/icons-material";
import PropTypes from "prop-types";


export default function SearchBar({ mobile, desktop, width, placeholder }) {
  return (
    <div
      className={`input-group w-${width} mx-auto my-lg-auto my-4 
      d-${mobile} d-lg-${desktop} align-content-center shadow rounded`}
    >
      <span className="input-group-text px-2 bg-secondary text-white border-0" id="basic-addon1">
        <Search />
      </span>
      <input
        type="search"
        className="form-control border-0"
        placeholder={`${placeholder}`}
      />
    </div>
  )
}

SearchBar.propTypes = {
  mobile: PropTypes.string,
  desktop: PropTypes.string,
  width: PropTypes.string,
  placeholder: PropTypes.string
};
