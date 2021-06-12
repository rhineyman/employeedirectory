import React from "react";

function Rows(props) {
  return (
    <tbody>
      <tr>
        <th scope="row"><img src={props.image}></img></th>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.dob}</td>
        <td>{props.phone}</td>
      </tr>
    </tbody>
  )
}

export default Rows;