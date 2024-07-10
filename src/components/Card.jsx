import React from "react";
import { Link } from "react-router-dom";
function Newsitem(props) {
  let { title, text, imgUrl, sourceUrl } = props;
  return (
    <div>
      <div className="card my-3 mx-3">
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text.substring(0, 100)}</p>

          <Link
            to={sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            See Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Newsitem;
