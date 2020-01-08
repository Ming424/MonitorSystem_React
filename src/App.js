import React, { useState, useEffect } from "react"
import "./App.css"

// =======================================================
//  COMPONENTd IMPORT
// =======================================================
import Event from "./components/event/Event"
import EventList from "./components/event/EventList"
import Sidebar from "./components/sidebar/Sidebar"
import Header from "./components/Header"
import useWindowResize from "./functionnality/useWindowResize"
import Modal from "./functionnality/Modal"
import Chart from "./functionnality/Chart"
import Fetch from "./functionnality/Fetch"

function App() {
  // =====================================================
  //  REACT STATE
  // =====================================================

  //** Group list in sidebar */
  /** GROUPS => {name, isChecked, isChartChecked} */
  const [groups] = useState([
    { name: "F7LENGFAL", isChecked: false, isChartChecked: false },
    { name: "F7LENGCOMP", isChecked: false, isChartChecked: false },
    { name: "F7LENGPREF", isChecked: false, isChartChecked: false },
    { name: "F7LENGVEND", isChecked: false, isChartChecked: false },
    { name: "F7LENGDL", isChecked: false, isChartChecked: false },
    { name: "F7LENGKLUN", isChecked: false, isChartChecked: false },
    { name: "hr" },
    { name: "F7ENGWIRE", isChecked: false, isChartChecked: false },
    { name: "F7ENGM&P", isChecked: false, isChartChecked: false },
    { name: "F7ENGSTRES", isChecked: false, isChartChecked: false },
    { name: "F7ENGDOOR", isChecked: false, isChartChecked: false },
    { name: "F7ENGSTRUC", isChecked: false, isChartChecked: false },
    { name: "F7ENGSTS", isChecked: false, isChartChecked: false },
    { name: "hr" },
    { name: "F7ENGSYS", isChecked: false, isChartChecked: false },
    { name: "F7ENGEMCS", isChecked: false, isChartChecked: false },
    { name: "F7ENGELEC", isChecked: false, isChartChecked: false },
    { name: "F7ENGINS", isChecked: false, isChartChecked: false },
    { name: "hr" },
    { name: "F7ENGPNEU", isChecked: false, isChartChecked: false },
    { name: "F7ENGPPLT", isChecked: false, isChartChecked: false },
    { name: "F7ENGFUEL", isChecked: false, isChartChecked: false },
    { name: "F7ENGFIFA", isChecked: false, isChartChecked: false },
    { name: "hr" },
    { name: "F7ENGLGDM", isChecked: false, isChartChecked: false },
    { name: "F7ENGHYDR", isChecked: false, isChartChecked: false },
    { name: "F7ENGFLTC", isChecked: false, isChartChecked: false },
    { name: "C1SENGAERO", isChecked: false, isChartChecked: false },
    { name: "hr" },
    { name: "F7ENGINT", isChecked: false, isChartChecked: false },
    { name: "hr" }
  ])

  /** Event list (summary) */
  const [events, setEvents] = useState([])
  /** Actived event, event onClick => open modal */
  const [activedEvent, setActivedEvent] = useState([])

  /** @UPDATE Tracked event list */
  const [trackedEvents, setTrackedEvents] = useState([])
  /** @UPDATE User name */
  const [userName] = useState("userName")
  /** @UPDATE User id */
  const [userId] = useState("000000000")
  /** @UPDATE User view preference */
  const [viewPref] = useState("list") /* list/grid */

  const [user] = useState({
    name: userName,
    userId: userId,
    viewPref: viewPref,
    trackedEvents: trackedEvents
  })

  /** Width of broswer */
  const { width } = useWindowResize()

  /** Toogle booleans, false for open */
  const [sidebarActive, setSidebarState] = useState(false)
  const [footerActive, setFooterState] = useState(false)
  const [modalActive, setModalState] = useState(false)

  /** Toogle for view */
  const [viewToogle, setViewToogle] = useState("list")
  const [myViewToogle, setMyViewToogle] = useState("list")
  const [trackedViewToogle, setTrackedViewToogle] = useState("list")

  /** Group check all boolean */
  const [checkAll, setCheckAll] = useState(false)

  /** Checked (chart) group list */
  const [checkedGroup, setCheckedGroup] = useState([]) // https://www.robinwieruch.de/react-state-array-add-update-remove
  const [checkedChartGroup, setCheckedChartGroup] = useState([])

  // ===================================================================
  //  FUNCTION
  // ===================================================================

  /** VIEW BUTTON GROUP TOOGLE */
  const handleViewToogle = i => {
    if (i === 1) {
      const newViewToogle = viewToogle === "list" ? "grid" : "list"
      setViewToogle(newViewToogle)
      // @UPDATE [viewPref]
    } else if (i === 2) {
      const newViewToogle = myViewToogle === "list" ? "grid" : "list"
      setMyViewToogle(newViewToogle)
    } else if (i === 3) {
      const newViewToogle = trackedViewToogle === "list" ? "grid" : "list"
      setTrackedViewToogle(newViewToogle)
    }
  }

  /** SELECT ALL */
  const handleSelectAll = () => {
    const newCheckAll = !checkAll
    groups.map(group =>
      group.name !== "hr" ? (group.isChecked = newCheckAll) : ""
    )
    setCheckAll(newCheckAll)
  }

  /** SUBMIT => set checked (chart) groups in array */
  const handleSubmit = () => {
    const checkedArray = []
    groups.map(group =>
      group.isChecked === true && group.name !== "hr"
        ? checkedArray.push(group.name)
        : null
    )
    setCheckedGroup(checkedArray)
    const checkedChartArray = []
    groups.map(group =>
      group.isChartChecked === true && group.name !== "hr"
        ? checkedChartArray.push(group.name)
        : null
    )
    setCheckedChartGroup(checkedChartArray)
  }

  /** RENDER EVENT */
  const renderEvent = (event, index, view) => {
    return (
      <div key={index}>
        <Event
          key={index}
          index={index}
          event={event}
          viewToogle={view}
          addTracked={addTracked}
          deleteTracked={deleteTracked}
          trackedEvents={trackedEvents}
          setTrackedEvents={setTrackedEvents}
          handleModal={handleModal}
        ></Event>
      </div>
    )
  }

  /** Open Modal and set actived event */
  const handleModal = event => {
    setModalState(true)
    setActivedEvent(event)
  }

  /** RENDER EVENT LIST */
  const renderEvents = () => {
    var bool = false
    return events.map((event, index) => {
      if (checkedGroup.includes(event.groupName)) {
        if (event.cmlQtH > 8 && !bool) {
          bool = true
          if (viewToogle === "list") {
            return (
              <div key={index}>
                <div className={"border-top border-secondary "} />
                {renderEvent(event, index, viewToogle)}
              </div>
            )
          } else {
            return (
              <div className="unselectable border border-secondary">
                <div
                  className="d-flex justify-content-center"
                  style={{ fontSize: "2rem" }}
                >
                  <br />
                  >8
                </div>
              </div>
            )
          }
        }
        return renderEvent(event, index, viewToogle)
      } else {
        return null
      }
    })
  }

  /** RENDER EVENT THAT ASSIGNED TO USER */
  const renderMyEvents = () => {
    return events.map((event, index) =>
      event.userId === user.userId
        ? renderEvent(event, index, myViewToogle)
        : ""
    )
  }

  /** REBDER TRACKED EVENT */
  const renderTrackedEvents = () => {
    return trackedEvents.map((event, index) =>
      renderEvent(event, index, trackedViewToogle + "tracked")
    )
  }

  /** ADD TRACKED EVENT */
  const addTracked = event => {
    console.log(event)
    const newTrackedEvent = [...trackedEvents, event]
    setTrackedEvents(newTrackedEvent)
    // @UPDATE
  }

  /** DELETE TRACKED EVENT */
  const deleteTracked = (event, index) => {
    const newTrackedEvent = trackedEvents.filter(
      trackedEvents => trackedEvents !== event
    )
    setTrackedEvents(newTrackedEvent)
    // @UPDATE
  }

  /** WINDOW WIDTH LISTENER */
  useEffect(() => {
    if (width <= 768) {
      setSidebarState(false)
    }
    if (width <= 578) {
      setViewToogle("grid")
      setMyViewToogle("grid")
      setTrackedViewToogle("grid")
    }
  }, [width])

  // ==================================================================================================
  //  HTML
  // ==================================================================================================
  return (
    <div className="App">
      <div className={`d-flex ${sidebarActive ? "toggled" : " "}`} id="wrapper">
        {/* SIDEBAR */}
        <Sidebar
          handleSubmit={handleSubmit}
          handleSelectAll={handleSelectAll}
          groups={groups}
          checkAll={checkAll}
          setCheckAll={setCheckAll}
        />

        {/**
         *  MAIN WRAPPER
         */}
        <div id="page-content-wrapper">
          {/* HEADER */}
          <Header
            name={user.name}
            userId={user.userId}
            setSidebarState={setSidebarState}
            sidebarActive={sidebarActive}
          />
          {/**
           *  CONTENT
           */}

          {/* MODAL, can be placed in any place */}
          <Modal
            event={activedEvent}
            setModalState={setModalState}
            modalActive={modalActive}
          />

          {/* FETCH, can be placed in any place */}
          <Fetch setEvents={setEvents} checkedGroup={checkedGroup}></Fetch>

          {/* Overlay on content when mobile sidebar toogle */}
          <div className="overlay" />

          <div className="container-fluid ">
            {/* RENDER TRACKED EVENTS */}
            <br />
            <EventList
              type={"track"}
              collapse={true}
              theContentViewToogle={trackedViewToogle}
              handleViewToogle={handleViewToogle}
              theRenderEvent={renderTrackedEvents()}
              // theLength={trackedEvents.length}
            />

            <hr />

            {/* RENDER USER EVENTS */}
            <EventList
              type={"possess"}
              collapse={true}
              theContentViewToogle={myViewToogle}
              handleViewToogle={handleViewToogle}
              theRenderEvent={renderMyEvents()}
            />

            <hr />

            {/* RENDER EVENTS */}
            <EventList
              type={"general"}
              collapse={false}
              theContentViewToogle={viewToogle}
              handleViewToogle={handleViewToogle}
              theRenderEvent={renderEvents()}
              theLength={events.length}
            />

            <br />

            <div style={contentFooterStyle}>
              --- End of content ---
              <br />
              {/* <FetchLocal
                    setEvents={setEvents}
                    setCheckedGroup={setCheckedGroup}
                  ></FetchLocal> */}
            </div>
          </div>
          {/* FOOTER & CHART */}
          <div
            id="footer"
            className={`${footerActive ? "toggled-footer" : " "}`}
            style={{ textAlign: "right" }}
          >
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => setFooterState(!footerActive)}
            >
              Chart
            </button>
            <div id="chart-wrapper" className="border-top">
              <Chart id="chart" checkedChartGroup={checkedChartGroup} />
            </div>
          </div>
          {/* ^ FOOTER & CHART ^ */}
        </div>
      </div>
    </div>
  )
}

const contentFooterStyle = {
  textAlign: "center",
  fontSize: "16px",
  color: "gray"
}

export default App

// https://github.com/BlackrockDigital/startbootstrap-simple-sidebar
