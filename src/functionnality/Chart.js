import React, { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"
import axios from "axios"

function Chart(props) {
  const [data, setData] = useState({
    data: {
      datasets: [],
      labels: []
    }
  })

  const [label, setLabel] = useState([])

  const [F7LENGFAL, setF7LENGFAL] = useState([])
  const [F7LENGCOMP, setF7LENGCOMP] = useState([])
  const [F7LENGPREF, setF7LENGPREF] = useState([])
  const [F7LENGVEND, setF7LENGVEND] = useState([])
  const [F7LENGKLUN, setF7LENGKLUN] = useState([])
  const [F7ENGWIRE, setF7ENGWIRE] = useState([])
  const [F7ENGM_P, setF7ENGM_P] = useState([])
  const [F7ENGSTRES, setF7ENGSTRES] = useState([])
  const [F7ENGDOOR, setF7ENGDOOR] = useState([])
  const [F7ENGSTRUC, setF7ENGSTRUC] = useState([])
  const [F7ENGSTS, setF7ENGSTS] = useState([])
  const [F7ENGSYS, setF7ENGSYS] = useState([])
  const [F7ENGEMCS, setF7ENGEMCS] = useState([])
  const [F7ENGELEC, setF7ENGELEC] = useState([])
  const [F7ENGINS, setF7ENGINS] = useState([])
  const [F7ENGPNEU, setF7ENGPNEU] = useState([])
  const [F7ENGPPLT, setF7ENGPPLT] = useState([])
  const [F7ENGFUEL, setF7ENGFUEL] = useState([])
  const [F7ENGFIFA, setF7ENGFIFA] = useState([])
  const [F7ENGLGDM, setF7ENGLGDM] = useState([])
  const [F7ENGHYDR, setF7ENGHYDR] = useState([])
  const [F7ENGFLTC, setF7ENGFLTC] = useState([])
  const [C1SENGAERO, setC1SENGAERO] = useState([])
  const [F7ENGINT, setF7ENGINT] = useState([])

  useEffect(() => {
    setData({
      labels: label,

      datasets: [
        {
          label: "F7LENGFAL",
          data: F7LENGFAL,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#cc0000",
          fill: false
        },
        {
          label: "F7LENGCOMP",
          data: F7LENGCOMP,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#cc6600",
          fill: false
        },
        {
          label: "F7LENGPREF",
          data: F7LENGPREF,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#cccc00",
          fill: false
        },
        {
          label: "F7LENGVEND",
          data: F7LENGVEND,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#66cc00",
          fill: false
        },
        {
          label: "F7LENGKLUN",
          data: F7LENGKLUN,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#00cccc",
          fill: false
        },
        {
          label: "F7ENGWIRE",
          data: F7ENGWIRE,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#0000cc",
          fill: false
        },
        {
          label: "F7ENGM&P",
          data: F7ENGM_P,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#9900cc",
          fill: false
        },
        {
          label: "F7ENGSTRES",
          data: F7ENGSTRES,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "black",
          fill: false
        },
        {
          label: "F7ENGDOOR",
          data: F7ENGDOOR,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "black",
          fill: false
        },
        {
          label: "F7ENGSTRUC",
          data: F7ENGSTRUC,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "black",
          fill: false
        },
        {
          label: "F7ENGSTS",
          data: F7ENGSTS,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "black",
          fill: false
        },
        {
          label: "F7ENGSYS",
          data: F7ENGSYS,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "black",
          fill: false
        },
        {
          label: "F7ENGEMCS",
          data: F7ENGEMCS,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "black",
          fill: false
        },
        {
          label: "F7ENGELEC",
          data: F7ENGELEC,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "black",
          fill: false
        },
        {
          label: "F7ENGELEC",
          data: F7ENGELEC,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#000000",
          fill: false
        },
        {
          label: "F7ENGINS",
          data: F7ENGINS,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#999999",
          fill: false
        },
        {
          label: "F7ENGPNEU",
          data: F7ENGPNEU,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#595959",
          fill: false
        },
        {
          label: "F7ENGPPLT",
          data: F7ENGPPLT,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#1a1a1a",
          fill: false
        },
        {
          label: "F7ENGFUEL",
          data: F7ENGFUEL,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#4d2e00",
          fill: false
        },
        {
          label: "F7ENGFIFA",
          data: F7ENGFIFA,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#4d0000",
          fill: false
        },
        {
          label: "F7ENGLGDM",
          data: F7ENGLGDM,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#333300",
          fill: false
        },
        {
          label: "F7ENGHYDR",
          data: F7ENGHYDR,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#003326",
          fill: false
        },
        {
          label: "F7ENGFLTC",
          data: F7ENGFLTC,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#00004d",
          fill: false
        },
        {
          label: "C1SENGAERO",
          data: C1SENGAERO,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#660066",
          fill: false
        },
        {
          label: "F7ENGINT",
          data: F7ENGINT,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "gray",
          fill: false
        }
      ]
    })
  }, [
    C1SENGAERO,
    F7ENGDOOR,
    F7ENGELEC,
    F7ENGEMCS,
    F7ENGFIFA,
    F7ENGFLTC,
    F7ENGFUEL,
    F7ENGHYDR,
    F7ENGINS,
    F7ENGINT,
    F7ENGLGDM,
    F7ENGM_P,
    F7ENGPNEU,
    F7ENGPPLT,
    F7ENGSTRES,
    F7ENGSTRUC,
    F7ENGSTS,
    F7ENGSYS,
    F7ENGWIRE,
    F7LENGCOMP,
    F7LENGFAL,
    F7LENGKLUN,
    F7LENGPREF,
    F7LENGVEND,
    label
  ])

  const url = "../src/api/category/read_chart.php"

  useEffect(() => {
    let id = setInterval(() => {
      if (props.checkedChartGroup.length !== 0) {
        const fetchData = async () => {
          axios
            .post(url, props.checkedChartGroup)
            .then(response => {
              // console.log(response.data)
              response.data.data.map(e => (
                <div>
                  {Object.entries(e).map(([key, value]) => {
                    console.log(key + " - " + value)
                    switch (key) {
                      case "F7LENGFAL":
                        setF7LENGFAL([...F7LENGFAL, value])
                        break
                      case "F7LENGCOMP":
                        setF7LENGCOMP([...F7LENGCOMP, value])
                        break
                      case "F7LENGPREF":
                        setF7LENGPREF([...F7LENGPREF, value])
                        break
                      case "F7LENGVEND":
                        setF7LENGVEND([...F7LENGVEND, value])
                        break
                      case "F7LENGKLUN":
                        setF7LENGKLUN([...F7LENGKLUN, value])
                        break
                      case "F7ENGWIRE":
                        setF7ENGWIRE([...F7ENGWIRE, value])
                        break
                      case "F7ENGM&P":
                        setF7ENGM_P([...F7ENGM_P, value])
                        break
                      case "F7ENGSTRES":
                        setF7ENGSTRES([...F7ENGSTRES, value])
                        break
                      case "F7ENGDOOR":
                        setF7ENGDOOR([...F7ENGDOOR, value])
                        break
                      case "F7ENGSTRUC":
                        setF7ENGSTRUC([...F7ENGSTRUC, value])
                        break
                      case "F7ENGSTS":
                        setF7ENGSTS([...F7ENGSTS, value])
                        break
                      case "F7ENGSYS":
                        setF7ENGSYS([...F7ENGSYS, value])
                        break
                      case "F7ENGEMCS":
                        setF7ENGEMCS([...F7ENGEMCS, value])
                        break
                      case "F7ENGELEC":
                        setF7ENGELEC([...F7ENGELEC, value])
                        break
                      case "F7ENGINS":
                        setF7ENGINS([...F7ENGINS, value])
                        break
                      case "F7ENGPNEU":
                        setF7ENGPNEU([...F7ENGPNEU, value])
                        break
                      case "F7ENGPPLT":
                        setF7ENGPPLT([...F7ENGPPLT, value])
                        break
                      case "F7ENGFUEL":
                        setF7ENGFUEL([...F7ENGFUEL, value])
                        break
                      case "F7ENGFIFA":
                        setF7ENGFIFA([...F7ENGFIFA, value])
                        break
                      case "F7ENGLGDM":
                        setF7ENGLGDM([...F7ENGLGDM, value])
                        break
                      case "F7ENGHYDR":
                        setF7ENGHYDR([...F7ENGHYDR, value])
                        break
                      case "F7ENGFLTC":
                        setF7ENGFLTC([...F7ENGFLTC, value])
                        break
                      case "C1SENGAERO":
                        setC1SENGAERO([...C1SENGAERO, value])
                        break
                      case "F7ENGINT":
                        setF7ENGINT([...F7ENGINT, value])
                        break
                      default:
                        console.log("DEFAULT")
                    }
                  })}
                  }
                </div>
              ))

              const newLabel = [...label, response.data.time]
              if (newLabel.length >= 11) {
                newLabel.shift()
              }
              setLabel(newLabel)
            })
            .catch(error => {
              console.log(error)
              console.log(
                "\n>>>>>>>>>>>->  FAILED (Fetch.js)  <-<<<<<<<<<<<<\n\n\n"
              )
            })
        }
        fetchData()
      } else {
        // console.log("[RUNNABLE] No selected chart group")
      }
    }, 1500)
    return () => clearInterval(id)
  }, [
    C1SENGAERO,
    F7ENGDOOR,
    F7ENGELEC,
    F7ENGEMCS,
    F7ENGFIFA,
    F7ENGFLTC,
    F7ENGFUEL,
    F7ENGHYDR,
    F7ENGINS,
    F7ENGINT,
    F7ENGLGDM,
    F7ENGM_P,
    F7ENGPNEU,
    F7ENGPPLT,
    F7ENGSTRES,
    F7ENGSTRUC,
    F7ENGSTS,
    F7ENGSYS,
    F7ENGWIRE,
    F7LENGCOMP,
    F7LENGFAL,
    F7LENGKLUN,
    F7LENGPREF,
    F7LENGVEND,
    label,
    props
  ])

  return (
    <div>
      <TheChart data={data} />
    </div>
  )
}
const testStyle = {
  height: "20vh"
}
const TheChart = ({ data }) => {
  return (
    <div style={testStyle}>
      <Line
        data={data}
        //** OPTION SETTING */
        options={{
          maintainAspectRatio: false,
          legend: {
            display: true,
            position: "right",
            onClick: null,
            labels: {
              fontSize: 12,
              boxWidth: 7
            }
          },
          scales: {
            xAxes: [
              {
                categoryPercentage: 0.2,
                maxBarThickness: 8
              }
            ],
            yAxes: [
              {
                ticks: {
                  fontSize: 10,
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      ></Line>
    </div>
  )
}

export default Chart
