import React, { Component } from "react";
import { connect } from "react-redux";

class TableUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let userData = this.state.userData;
    return (
      <div className="user-container ">
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr className="bg-table text-white">
              <th scope="col">ID</th>
              <th scope="col">Email</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData &&
              userData.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.email}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>
                      <div className="btn-container">
                        <button
                          className="bg-blue"
                          onClick={() => this.btnshowupdateuser(item)}>
                          <i className="far fa-edit"></i>
                        </button>
                        <button
                          className="bg-red"
                          onClick={() => this.handleDelete(item.id)}>
                          <i className="far fa-trash-alt "></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TableUser);
