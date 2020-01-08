import React from "react"
import GroupList from "./GroupList"

function Sidebar(props) {
  return (
    <div className="border-right" id="sidebar-wrapper">
      {/* SIDEBAR HEADER */}

      <div className="sidebar-heading bg-light ">
        <button
          className="btn btn-info btn-block"
          onClick={() => props.handleSubmit()}
          type="submit"
        >
          <strong>Submit</strong>
        </button>
        <button
          className="btn btn-outline-dark btn-block btn-sm"
          onClick={() => props.handleSelectAll()}
        >
          Select All
        </button>
      </div>

      {/* GROUP LIST ITEMS */}
      <GroupList
        groups={props.groups}
        checkAll={props.checkAll}
        setCheckAll={props.setCheckAll}
      ></GroupList>
    </div>
  )
}

export default Sidebar
