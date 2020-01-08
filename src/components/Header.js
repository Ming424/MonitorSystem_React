import React from "react"

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom sticky-top py-1">
      <button
        className="btn btn-outline-primary toogleButtom"
        onClick={() => props.setSidebarState(!props.sidebarActive)}
      >
        {/* <span className="navbar-toggler-icon"></span> */}
        &nbsp;sidebar
      </button>
      {/* Collapsive BUTTON -> submenu */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <div className="nav-link">
              Monitor <span className="sr-only">(current)</span>
            </div>
          </li>

          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              User
            </div>
            {/* DROPDOWN */}
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <h6 className="dropdown-header" href=" ">
                {props.name} ({props.userId})
              </h6>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href=" ">
                Logout (not work)
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
