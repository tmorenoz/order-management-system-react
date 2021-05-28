import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class DetailOrder extends Component {
    state = {
        rows: [{}]
      };
      handleChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
          [name]: value
        };
        this.setState({
          rows
        });
      };
      handleAddRow = () => {
        const item = {
            orderNumber: "",
            condition: "",
            date: "",
            custumer:"",
            taxAmounts:"",
            totalTaxes:"",
            totalQuantity:"",
            orderItemList:""
        };
        this.setState({
          rows: [...this.state.rows, item]
        });
      };
     /* handleRemoveRow = () => {
        this.setState({
          rows: this.state.rows.slice(0, -1)
        });
      };*/
      handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
      }
      render() {
        return (
          <div>
            <div className="container">
              <div className="row clearfix">
                <div className="col-md-12 column">
                  <table
                    className="table table-bordered table-hover"
                    id="tab_logic"
                  >
                    <thead>
                      <tr>
                        <th className="text-center"> # </th>
                        <th className="text-center"> Consumer </th>
                        <th className="text-center"> Status </th>
                        <th className="text-center"> Date </th>
                        <th className="text-center"> Total </th>
                        <th className="text-center"> Actions </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.rows.map((item, idx) => (
                        <tr id="addr0" key={idx}>
                          <td>{idx}</td>
                          <td>
                            <input
                              type="text"
                              name="custumer"
                              value={this.state.rows[idx].custumer}
                              onChange={this.handleChange(idx)}
                              className="form-control"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="condition"
                              value={this.state.rows[idx].condition}
                              onChange={this.handleChange(idx)}
                              className="form-control"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="date"
                              value={this.state.rows[idx].date}
                              onChange={this.handleChange(idx)}
                              className="form-control"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="totalTaxes"
                              value={this.state.rows[idx].totalTaxes}
                              onChange={this.handleChange(idx)}
                              className="form-control"
                            />
                          </td>
                          <td>
                            <button
                              className="btn btn-outline-danger btn-sm"
                              onClick={this.handleRemoveSpecificRow(idx)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="row">
                        <div className="col-md-10"></div>
                        <div className="col-md-2">
                            <button onClick={this.handleAddRow} className="btn btn-primary">
                                Add Item+
                            </button>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-7"></div>
                        <div className="col-md-5 mt-5">
                            <div className="row">
                                <div className="col-md-10"><h3>Sub Total</h3> </div>
                                <div className="col-md-2">$100.00</div>
                            </div>
                            <div className="row">
                                <div className="col-md-10"><h3>Taxes</h3></div>
                                <div className="col-md-2"></div>
                            </div>
                            <div className="row">
                                <div className="col-md-10"><i className="fa fa-html5" aria-hidden="true"></i><h5>Total City Tax</h5></div>
                                <div className="col-md-2">$10.00</div>
                            </div>
                            <div className="row">
                                <div className="col-md-10"><h5>Total County Tax</h5></div>
                                <div className="col-md-2">$5.5</div>
                            </div>
                            <div className="row">
                                <div className="col-md-10"><h5>Total State Tax</h5></div>
                                <div className="col-md-2">$9.24</div>
                            </div>
                            <div className="row">
                                <div className="col-md-10"><h5>Total Federal Tax</h5></div>
                                <div className="col-md-2">$2.49</div>
                            </div>
                            <div className="row">
                                <div className="col-md-10"><h3>Total Taxes</h3></div>
                                <div className="col-md-2">$27.23</div>
                            </div>
                            <div className="row">
                                <div className="col-md-10"><h3>Total</h3></div>
                                <div className="col-md-2">$127.23</div>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                            <div className="row mt-5">
                                    <div className="col-md-8 ">
                                    </div>
                                    <div className="col-md-4">
                                        <button className="btn btn-success">Complete Order</button>{"  "}
                                        <button className="btn btn-danger">Reject Order</button>
                                    </div>
                                </div>
                        </div>
                        <br />
                  {/*<button
                    onClick={this.handleRemoveRow}
                    className="btn btn-danger float-right"
                  >
                    Delete Last Row
                  </button>*/}
                </div>
              </div>
            </div>
          </div>
        );
      }
}

export default DetailOrder
