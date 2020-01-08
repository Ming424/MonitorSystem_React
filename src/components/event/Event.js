import React, { useState } from "react"

function Event(props) {
  const [tracked, setTracked] = useState(false)

  const modalAim =
    "#event" +
    props.event.groupName +
    " - " +
    props.event.ncrNumber +
    " - " +
    props.event.discrNo +
    (props.viewToogle.includes("tracked") ? "_tracked" : "")

  /**  Render if user exist */
  const renderUser = () => {
    if (props.event.userId !== null) {
      return (
        <div>
          <span>
            {props.event.userFirstName} {props.event.userLastName}{" "}
          </span>
          <span
            style={{ fontSize: "0.55rem" }}
            className="badge badge-secondary align-text-top"
          >
            {props.event.userId}
          </span>
        </div>
      )
    }
  }

  /**  Dynamic DIV style based on event status */
  const handleStyle = () => {
    if (props.event.userId === null || !props.event.userId) {
      return unassigned
    } else {
      return ongoing
    }
  }

  const handleTracked = e => {
    console.log("handleTracked ===> ")
    // setTracked(!tracked)
    e.preventDefault()
    var included = false
    props.trackedEvents.map(trackedEvent => {
      // console.log("ncrNumber["+trackedEvent.ncrNumber + "=|=" + props.event.ncrNumber+"]")
      // console.log("discrNo["+trackedEvent.discrNo + "=|=" + props.event.discrNo+"]")
      if (
        trackedEvent.ncrNumber === props.event.ncrNumber &&
        trackedEvent.discrNo === props.event.discrNo
      ) {
        return (included = true)
      } else {
        return null
      }
    })
    // console.log(included)
    if (!tracked && !included) {
      return props.addTracked(Object.assign({}, props.event))
    } else {
      return console.log("[ERROR] This event is already tracked")
    }
  }

  const handleTrackedDelete = e => {
    setTracked(!tracked)
    e.preventDefault()
    return props.deleteTracked(props.event)
  }

  const renderListView = () => {
    return (
      <div>
        <div className="container-fluid border-bottom border-secondary">
          <div className="row">
            <span>
              {/* {props.viewToogle.includes("tracked") ? (
              <div onClick={e => handleTrackedDelete(e)} style={trackedTrue}>
                &nbsp;&nbsp;&nbsp;
              </div>
            ) : (
              <div
                onClick={e => handleTracked(e)}
                style={tracked ? trackedTrue : trackedFalse}
              >
                &nbsp;&nbsp;&nbsp;
              </div>
            )} */}
            </span>
            <div
              onClick={
                props.viewToogle.includes("tracked")
                  ? e => handleTrackedDelete(e)
                  : e => handleTracked(e)
              }
              style={
                props.viewToogle.includes("tracked")
                  ? trackedTrue
                  : trackedFalse
              }
            >
              &nbsp;&nbsp;&nbsp;
            </div>
            <div
              data-toggle="modal"
              data-target="#exampleModal"
              className="Event col container-fluid  py-2"
              onClick={() =>
                console.log("Event.handleClick() => [" + modalAim + "]")
              }
            >
              <div className="row flex-nowrap align-middle">
                <div style={textStyle} className="col-2">
                  {props.event.groupName}
                </div>
                <div style={textStyle} className="col-2">
                  <span>{props.event.ncrNumber} </span>
                  <span
                    style={{ fontSize: "0.6rem" }}
                    className="badge badge-secondary align-text-top"
                  >
                    {props.event.discrNo}
                  </span>
                </div>
                <div style={textStyle} className="col-sm-1">
                  {props.event.qtH}
                </div>
                <div style={textStyle} className="col-sm-1">
                  {props.event.cmlQtH > 8 ? (
                    <div style={{ color: "#990000" }}>{props.event.cmlQtH}</div>
                  ) : (
                    <div>{props.event.cmlQtH}</div>
                  )}
                </div>
                <div style={textStyle} className="col-1">
                  {props.event.prodSeqFrom}
                </div>
                <div style={textStyle} className="col-3">
                  {props.event.partDescription}
                </div>
                <div style={textStyleSmall} className="col">
                  {renderUser()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderGridView = () => {
    return (
      <div className="unselectable border border-secondary">
        {props.viewToogle.includes("tracked") ? (
          <div style={{ fontSize: "6px" }}>
            <div onClick={e => handleTrackedDelete(e)} style={trackedTrue}>
              &nbsp;
            </div>
          </div>
        ) : (
          <div style={{ fontSize: "6px" }}>
            <div
              onClick={e => handleTracked(e)}
              style={tracked ? trackedTrue : trackedFalse}
            >
              &nbsp;
            </div>
          </div>
        )}

        <div
          data-toggle="modal"
          data-target="#exampleModal"
          style={gridViewContentStyle}
          className="Event col container-fluid"
        >
          <div>{props.event.groupName} </div>
          <hr style={hrStyle} />
          <div>
            <span style={{ fontWeight: "bold" }}>{props.event.ncrNumber} </span>
            <span
              style={{ fontSize: "0.6rem" }}
              className="badge badge-info  align-text-top"
            >
              {props.event.discrNo}
            </span>
          </div>
          <hr style={hrStyle} />
          <div>qtH: {props.event.qtH}</div>
          <div>
            cmlQtH:{" "}
            {props.event.cmlQtH > 8 ? (
              <span style={{ color: "#990000" }}>{props.event.cmlQtH}</span>
            ) : (
              <span>{props.event.cmlQtH}</span>
            )}
          </div>
          <hr style={hrStyle} />
          <div>prodSeqFrom: {props.event.prodSeqFrom}</div>
          <hr style={hrStyle} />
          <div>{props.event.partDescription}</div>
          <hr style={hrStyle} />
          <span>{renderUser()}</span>
        </div>
      </div>
    )
  }
  const renderView = () => {
    if (props.viewToogle.includes("grid")) {
      return renderGridView()
    } else {
      return renderListView()
    }
  }

  return (
    <div id="main">
      <div style={handleStyle()} onClick={() => props.handleModal(props.event)}>
        {renderView()}
      </div>
    </div>
  )
}

const ongoing = {}

const unassigned = {
  backgroundColor: "#ffffe6"
}

const hrStyle = {
  marginTop: "2px",
  marginBottom: "2px"
}
const gridViewContentStyle = {
  padding: "5px 10px 10px 10px"
}
const trackedFalse = {
  backgroundColor: "#f2f2f2"
}
const trackedTrue = {
  backgroundColor: "#ffdf80"
}

const textStyle = {
  fontSize: "0.93rem"
}

const textStyleSmall = {
  fontSize: "0.8rem"
}

export default Event
