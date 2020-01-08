import React, { useState, useEffect } from "react"
import axios from "axios"

// https://getbootstrap.com/docs/4.3/components/modal/
function Modal(props) {
  const [event, setEvent] = useState([]) // tab 1 content
  const [detail, setDetail] = useState({}) // tab 2 content
  const [temp, setTemp] = useState({})
  const [closed, setClosed] = useState(false)

  const timeKeyFilter = ["agingTimeH", "touchTimeH", "queueTimeH"]
  const url = "../src/api/category/read_detail.php"

  const renderClosedAlert = () => {
    return (
      <div class="alert alert-danger m-0 sticky-top" role="alert">
        This Discrepancy is Closed
      </div>
    )
  }

  const handleClose = () => {
    props.setModalState(false)
  }

  useEffect(() => {
    let id = setInterval(() => {
      if (props.modalActive) {
        setTemp(props.event)
        // console.log(temp)
        // console.log("=> Fetching Detail...")
        const fetchData = async () => {
          axios
            .post(url, [props.event.ncrNumber, props.event.discrNo])
            .then(response => {
              // console.log("==== 1- RESPONSE => ============================\n")
              // console.log(response)
              // console.log("==== 2- RESPONSE.DATA => =======================\n")
              // console.log(response.data)

              /** Throw error for unexpected result fetched */
              if (!response.data.data[0]) {
                throw new Error("[response.data.data is " + response.data.data)
              }
              if (!response.data.data_signoffdet) {
                throw new Error(
                  "[response.data.data_signoffdet is " +
                    response.data.data_signoffdet
                )
              }

              /** Update the data onto state */
              setDetail(response.data.data[0])
              setEvent(response.data.data_signoffdet)

              // console.log("===> DETAIL ===>")
              // console.log(detail)
              // console.log("===> EVENT ===>")
              // console.log(event)

              // console.log(
              //   "\n>>>>>>>>>>>>-> SUCCESS  (Modal.js) <-<<<<<<<<<<<<\n\n\n"
              // )
            })
            .catch(error => {
              console.log(error)
              console.log(
                "\n>>>>>>>>>>>>>->  FAILED (Modal.js)  <-<<<<<<<<<<<<\n\n\n"
              )
            })
        }
        fetchData()
      }
    }, 1000)
    return () => clearInterval(id)
  }, [detail, event, props, temp])

  return (
    <div
      id="exampleModal"
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      data-backdrop="static"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content" style={modalContentStyle}>
          {closed ? renderClosedAlert() : null}
          <div className="modal-header">
            {/* MODAL TITLE */}
            <h6 className="modal-title">
              {props.event.groupName} - {props.event.ncrNumber} -{" "}
              {props.event.discrNo}
            </h6>

            {/* close button */}
            <button
              className="close"
              data-dismiss="modal"
              onClick={() => handleClose()}
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            {/* TABLIST */}
            <nav
              className="sticky-top mx-1  pb-2"
              style={{ backgroundColor: "white" }}
            >
              <div className="nav nav-tabs ">
                {/* TAB_1 HEADER */}
                <a
                  className="nav-item nav-link "
                  data-toggle="tab"
                  href={"#nav-1"}
                >
                  Sign-off ({event.length})
                </a>
                {/* TAB_2 HEADER */}
                <a
                  className="nav-item nav-link"
                  data-toggle="tab"
                  href={"#nav-2"}
                >
                  Detail
                </a>
                {/* TAB_3 HEADER */}
                <a
                  className="nav-item nav-link active"
                  data-toggle="tab"
                  href={"#nav-3"}
                >
                  General (temporary)
                </a>
              </div>
            </nav>
            {/* ^ TABLIST ^ */}

            {/* TABs */}
            <div className="tab-content">
              {/* TAB_1 */}
              <div
                // className="tab-pane fade show active"
                className="tab-pane fade"
                id={"nav-1"}
                style={modalStyle}
              >
                <div className="container">
                  {event.map(e => (
                    <div>
                      {Object.entries(e).map(([key, value]) => (
                        <div>
                          <div className="row py-0">
                            <div className="col-5" style={titleStyle}>
                              {key}
                            </div>
                            <div className="col">
                              {timeKeyFilter.includes(key)
                                ? (Math.round(value * 100) / 100).toFixed(2)
                                : value}
                            </div>
                          </div>
                          <hr style={hrStyle} />
                        </div>
                      ))}
                      <hr className="  border-bottom border-dark" />
                    </div>
                  ))}
                </div>
              </div>

              {/* TAB_2 */}
              <div className="tab-pane fade" id={"nav-2"} style={modalStyle}>
                <div className="container">
                  {Object.entries(detail).map(([key, value]) => {
                    return (
                      <div>
                        <div className="row py-0">
                          <div className="col-5" style={titleStyle}>
                            {key}
                          </div>
                          <div className="col">{value}</div>
                        </div>
                        <hr style={hrStyle} />
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* TAB_3 */}
              <div
                // className="tab-pane fade"
                className="tab-pane fade show active"
                id={"nav-3"}
                style={modalStyle}
              >
                <div className="container">
                  {Object.entries(temp).map(([key, value]) => {
                    return (
                      <div>
                        <div className="row py-0">
                          <div className="col-4" style={titleStyle}>
                            {key}
                          </div>
                          <div className="col">{value}</div>
                        </div>
                        <hr style={hrStyle} />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* MODAL FOOTER */}
          <div className="modal-footer">
            <button
              className="btn btn-secondary btn-sm"
              data-dismiss="modal"
              onClick={() => handleClose()}
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Float close buttom */}
      <button
        type="button"
        className="btn btn-light btn-lg"
        data-dismiss="modal"
        onClick={() => handleClose()}
        style={flowBtnClose}
      >
        Close
      </button>
    </div>
  )
}

const titleStyle = {
  fontWeight: "bold"
}
const hrStyle = {
  marginTop: "2px",
  marginBottom: "2px"
}
const modalStyle = {
  paddingTop: "10px"
}
const flowBtnClose = {
  position: "fixed",
  bottom: "20px",
  right: "40px"
}
const modalContentStyle = {
  minHeight: "65vh"
}
export default Modal
