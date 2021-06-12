import React from "react";

function Table(props) {
  return (<table className="table">
    <thead>
      <tr>
        <th scope="col">Picture</th>
        <th scope="col">Name</th>
        <th scope="col">email</th>
        <th scope="col">Date of Birth</th>
        <th scope="col">Phone Number</th>
      </tr>
    </thead>
  </table>)
}

export default Table;