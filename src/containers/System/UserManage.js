import React, { Component } from "react";
import { connect } from "react-redux";
import { handleGetAllUser } from "../../services/userService";
import "./usermanage.scss";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }
  async componentDidMount() {
    let res = await handleGetAllUser();
    console.log("res", res);
    if (res.data.EC === 0) {
      this.setState({
        userData: res.data.data,
      });
    }
    console.log("userData", this.state.userData);
  }
  render() {
    let userData = this.state.userData;
    return (
      <div className="user-container ">
        <div className="title text-center mb-3">Magane User</div>
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
                        <button className="bg-blue">
                          <i className="far fa-edit"></i>
                        </button>
                        <button className="bg-red">
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

/*
life Cycle
1. run construct => init state
2. run did mount(set state) 
3. render
4. did update when change 
*/

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
