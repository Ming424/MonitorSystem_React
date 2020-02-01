import React from "react"
import ViewToogleBtnGrp from "./ViewToogleBtnGrp"
function EventList(props) {
  const handleTitle = () => {
    if (props.type === "general") return <div>MAIN ({props.theLength})</div>
    else if (props.type === "possess") return "OWN"
    else if (props.type === "track") return "TRACK"
  }
  const getNumber = () => {
    if (props.type === "general") return 1
    else if (props.type === "possess") return 2
    else if (props.type === "track") return 3
  }
  const renderCollapse = () => {
    return (
      <div
        className="py-1 btn btn-lg  btn-outline-secondary"
        data-toggle="collapse"
        href={"#collapse" + props.type + "Queue"}
        // aria-disabled={props.theLength === 0 ? true : false}
        // style={props.theLength === 0 ? { color: "gray" } : { color: "#0000cc" }}
      >
        {handleTitle()}
        {/* ({props.theLength}) */}
      </div>
    )
  }
  const renderTitle = () => {
    if (props.collapse) return renderCollapse()
    else {
      return (
        <h4 className="pt-1" style={{ display: "inline-block" }}>
          {handleTitle()}
        </h4>
      )
    }
  }

  return (
    <div className="unselectable">
      {renderTitle()}
      <div
        className={props.collapse ? "collapse" : ""}
        id={props.collapse ? "collapse" + props.type + "Queue" : ""}
      >
        <ViewToogleBtnGrp
          num={getNumber()}
          handleViewToogle={props.handleViewToogle}
          theContentViewToogle={props.theContentViewToogle}
        ></ViewToogleBtnGrp>
        <div
          style={
            props.theContentViewToogle === "list"
              ? listViewStyle
              : gridViewStyle
          }
        >
          {/* LIST HEADER */}
          {props.theContentViewToogle === "list" ? (
            <span
            // style={{
            //   fontWeight: "bold"
            // }}
            // className="text-white bg-dark sticky-top sticky-top-2 "
            >
              <div
                className="text-white bg-dark sticky sticky-top sticky-top-2 
              container-fluid py-2"
              >
                <div className="row flex-nowrap" style={dynamicText}>
                  <span> &nbsp;&nbsp;&nbsp;</span>
                  <div className="col-2">GROUP</div>
                  <div className="col-2">
                    <span>NCR_N </span>
                    <span
                      style={{ fontSize: "0.6rem" }}
                      className="badge badge-secondary align-text-top"
                    >
                      disc_n
                    </span>
                  </div>
                  <div className="col-sm-1">Q_TH</div>
                  <div className="col-sm-1">CML_QT_H</div>
                  <div className="col-1">PROD_SEQ</div>
                  <div className="col-3">PART_DESC</div>
                  <div className="col">
                    <span>USER </span>
                    <span
                      style={{ fontSize: "0.6rem" }}
                      className="badge badge-secondary align-text-top"
                    >
                      id</span>
                  </div>
                </div>
              </div>
            </span>
          ) : null}
          {/* ^ LIST HEADER ^ */}
          {/* RENDER EVENT */}
          {props.theRenderEvent}
        </div>
      </div>
    </div>
  )
}
const gridViewStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
  gridAutoRows: "minmax(100px, auto)",
  gridGap: "20px"
}
const listViewStyle = {}
const dynamicText = {
  fontSize: "0.70rem",
  fontWeight: "bold"
}
export default EventList
