import React from "react";
import Header from "./header";
import Table from "./table";
import Rows from "./tableRow";

class Employeelist extends React.Component {
    state = {
        users: [],
    }
    render() {
        return (
            <div className="container">
                <Header />
                <Table />
                <Rows />
            </div>
        )
    }
}

export default Employeelist;