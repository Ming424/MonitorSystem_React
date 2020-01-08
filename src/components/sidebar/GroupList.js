import React from "react"
import Group from "./Group"

function GroupList(props) {
  const renderGroup = (group, index) => {
    if (group.name === "hr") {
      return <label className="list-group-item  mb-0 border-bottom "></label>
    } else {
      // console.log("group: " + group.name + " \t=> \t" + group.isChecked)
      return (
        <Group
          key={index}
          index={index}
          group={group}
          checkAll={props.checkAll}
          setCheckAll={props.setCheckAll}
        ></Group>
      )
    }
  }
  return (
    // scrollbarWitdth: "none" => hide scrollbar in Firefox
    <div className="list-group list-group-flush unselectable ">
      {props.groups.map((group, index) => (
        <div key={index}>{renderGroup(group, index)}</div>
      ))}
    </div>
  )
}

export default GroupList
