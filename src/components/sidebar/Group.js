import React, { useEffect, useRef, useState } from "react"

function Group(props, index) {
  const [localChecked, setLocalChecked] = useState(false)
  // const [chartChecked, setChartChecked] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (props.group.isChecked) {
      containerRef.current.checked = true
      setLocalChecked(true)
      // console.log(containerRef.current.checked)
    } else {
      containerRef.current.checked = false
      setLocalChecked(false)
      props.group.isChartChecked = false
      // console.log(containerRef.current.checked)
    }
  }, [props.group.isChartChecked, props.group.isChecked])

  const handleGroup = () => {
    props.group.isChecked = !props.group.isChecked

    setLocalChecked(props.group.isChecked)
    containerRef.current.checked = !containerRef.current.checked
    // if (containerRef.current.checked === false) {
    //   props.group.isChartChecked = false
    // }
    // console.log(
    //   "Group.handlegroup() => " +
    //     props.group.name +
    //     ": \nprops-" +
    //     props.group.isChecked +
    //     " | ref-" +
    //     containerRef.current.checked
    // )
    if (props.group.isChecked === false && props.checkAll === true) {
      props.setCheckAll(false)
    } else if (props.group.isChecked === true && props.checkAll === false) {
      props.setCheckAll(false)
    }
  }
  const handleGroupChart = () => {
    // console.log("handleGroupChart() => " + props.group.name)
    props.group.isChartChecked = !props.group.isChartChecked
    // console.log(props.group.isChartChecked)
  }
  return (
    <label
      className="list-group-item list-group-item-action py-2 border-bottom  m-0"
      style={textStyle}
    >
      <input
        ref={containerRef}
        // checked={props.group.isChecked}
        type="checkbox"
        onClick={() => handleGroup()}
      />
      &nbsp;{props.group.name}&nbsp;
      {localChecked ? (
        <input
          // checked={props.group.isChecked}
          type="checkbox"
          onClick={() => handleGroupChart()}
          className="float-right"
        ></input>
      ) : null}
    </label>
  )
}

const textStyle = {
  fontSize: "0.9rem"
}

export default Group
