import propTypes from "prop-types";

import "./index.scss";

export default function Pagination(props) {
  const {
    // name,
    // value,
    // type,
    // placeholder,
    outerClassName,
    // inputClassName,
  } = props;

  return (
    <nav aria-label="Page navigation">
      <ul className={["pagination", outerClassName].join(" ")}>
        <li className="page-item">
          <a className="page-link page-link-arrow" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link page-link-arrow" href="#" aria-label="Next">
            <span aria-hidden="true" >&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

// Pagination.defaultProps = {
//   type: "text",
//   placeholder: "Pagination your place ...",
// };

Pagination.propTypes = {
  // name: propTypes.string.isRequired,
  // value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  // onChange: propTypes.func.isRequired,
  // type: propTypes.string,
  // placeholder: propTypes.string,
  outerClassName: propTypes.string,
  // inputClassName: propTypes.string,
};
