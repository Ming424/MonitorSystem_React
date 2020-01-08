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

  const [F1GROUP1, setF1GROUP1] = useState([])
  const [F1GROUP2, setF1GROUP2] = useState([])
  const [F1GROUP3, setF1GROUP3] = useState([])
  const [F1GROUP4, setF1GROUP4] = useState([])
  const [F1GROUP5, setF1GROUP5] = useState([])
  const [F1GROUP6, setF1GROUP6] = useState([])

  const [F4GROUP1, setF4GROUP1] = useState([])
  const [F4GROUP2, setF4GROUP2] = useState([])
  const [F4GROUP3, setF4GROUP3] = useState([])
  const [F4GROUP4, setF4GROUP4] = useState([])
  const [F4GROUP5, setF4GROUP5] = useState([])
  const [F4GROUP6, setF4GROUP6] = useState([])

  const [F8GROUP1, setF8GROUP1] = useState([])
  const [F8GROUP2, setF8GROUP2] = useState([])
  const [F8GROUP3, setF8GROUP3] = useState([])
  const [F8GROUP4, setF8GROUP4] = useState([])

  const [FXGROUP1, setFXGROUP1] = useState([])
  const [FXGROUP2, setFXGROUP2] = useState([])
  const [FXGROUP3, setFXGROUP3] = useState([])

  useEffect(() => {
    setData({
      labels: label,

      datasets: [
        {
          label: "F1GROUP1",
          data: F1GROUP1,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#cc0000",
          fill: false
        },
        {
          label: "F1GROUP2",
          data: F1GROUP2,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#cc6600",
          fill: false
        },
        {
          label: "F1GROUP3",
          data: F1GROUP3,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#cccc00",
          fill: false
        },
        {
          label: "F1GROUP4",
          data: F1GROUP4,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#66cc00",
          fill: false
        },
        {
          label: "F1GROUP5",
          data: F1GROUP5,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#00cccc",
          fill: false
        },
        {
          label: "F1GROUP6",
          data: F1GROUP6,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#0000cc",
          fill: false
        },
        {
          label: "F4GROUP1",
          data: F4GROUP1,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#9900cc",
          fill: false
        },
        {
          label: "F4GROUP2",
          data: F4GROUP2,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "black",
          fill: false
        },
        {
          label: "F4GROUP3",
          data: F4GROUP3,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "black",
          fill: false
        },
        {
          label: "F4GROUP4",
          data: F4GROUP4,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "black",
          fill: false
        },
        {
          label: "F4GROUP5",
          data: F4GROUP5,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "black",
          fill: false
        },
        {
          label: "F4GROUP6",
          data: F4GROUP6,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "black",
          fill: false
        },
        {
          label: "F8GROUP1",
          data: F8GROUP1,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "black",
          fill: false
        },
        {
          label: "F8GROUP2",
          data: F8GROUP2,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "black",
          fill: false
        },
        {
          label: "F8GROUP3",
          data: F8GROUP3,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#000000",
          fill: false
        },
        {
          label: "F8GROUP4",
          data: F8GROUP4,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#999999",
          fill: false
        },
        {
          label: "FXGROUP1",
          data: FXGROUP1,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#595959",
          fill: false
        },
        {
          label: "FXGROUP2",
          data: FXGROUP2,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#1a1a1a",
          fill: false
        },
        {
          label: "FXGROUP3",
          data: FXGROUP3,
          borderWidth: 1,
          lineTension: 0,
          borderColor: "#4d2e00",
          fill: false
        }
      ]
    })
  }, [F1GROUP1,F1GROUP2,F1GROUP3,F1GROUP4,F1GROUP5,F1GROUP6,F4GROUP1,F4GROUP2,F4GROUP3,F4GROUP4,F4GROUP5,F4GROUP6,F8GROUP1,F8GROUP2,F8GROUP3,F8GROUP4,FXGROUP1,FXGROUP2,FXGROUP3,
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
                        setF1GROUP1([...F1GROUP1, value])
                        break
                      case "F7LENGCOMP":
                        setF1GROUP2([...F1GROUP2, value])
                        break
                      case "F7LENGPREF":
                        setF1GROUP3([...F1GROUP3, value])
                        break
                      case "F7LENGVEND":
                        setF1GROUP4([...F1GROUP4, value])
                        break
                      case "F7LENGKLUN":
                        setF1GROUP5([...F1GROUP5, value])
                        break
                      case "F7ENGWIRE":
                        setF1GROUP6([...F1GROUP6, value])
                        break
                      case "F7ENGM&P":
                        setF4GROUP1([...F4GROUP1, value])
                        break
                      case "F7ENGSTRES":
                        setF4GROUP2([...F4GROUP2, value])
                        break
                      case "F7ENGDOOR":
                        setF4GROUP3([...F4GROUP3, value])
                        break
                      case "F7ENGSTRUC":
                        setF4GROUP4([...F4GROUP4, value])
                        break
                      case "F7ENGSTS":
                        setF4GROUP5([...F4GROUP5, value])
                        break
                      case "F7ENGSYS":
                        setF4GROUP6([...F4GROUP6, value])
                        break
                      case "F7ENGEMCS":
                        setF8GROUP1([...F8GROUP1, value])
                        break
                      case "F7ENGELEC":
                        setF8GROUP2([...F8GROUP2, value])
                        break
                      case "F7ENGINS":
                        setF8GROUP3([...F8GROUP3, value])
                        break
                      case "F7ENGPNEU":
                        setF8GROUP4([...F8GROUP4, value])
                        break
                      case "F7ENGPPLT":
                        setFXGROUP1([...FXGROUP1, value])
                        break
                      case "F7ENGFUEL":
                        setFXGROUP2([...FXGROUP2, value])
                        break
                      case "F7ENGFIFA":
                        setFXGROUP3([...FXGROUP3, value])
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
    F1GROUP1,F1GROUP2,F1GROUP3,F1GROUP4,F1GROUP5,F1GROUP6,F4GROUP1,F4GROUP2,F4GROUP3,F4GROUP4,F4GROUP5,F4GROUP6,F8GROUP1,F8GROUP2,F8GROUP3,F8GROUP4,FXGROUP1,FXGROUP2,FXGROUP3,
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
