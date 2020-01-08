import React from "react"
function ViewToogleBtnGrp(props) {
  return (
    <div>
      <div className="btn-group btn-group-sm   float-right" role="group">
        <button
          className="btn btn-secondary"
          onClick={() => props.handleViewToogle(props.num)}
          disabled={props.theContentViewToogle === "list" ? "disabled" : ""}
        >
          List
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => props.handleViewToogle(props.num)}
          disabled={props.theContentViewToogle === "grid" ? "disabled" : ""}
        >
          Grid
        </button>
      </div>
      <br />
      <br />
    </div>
  )
}

export default ViewToogleBtnGrp
