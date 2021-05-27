import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const NewOrder = () => {
    
    const [startDate, setStartDate] = useState(new Date());
    const [dataOrder, setDataOrder ] = useState([]);
    
    const handleChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...dataOrder];
        rows[idx] = {
          [name]: value
        };
        setDataOrder({
          rows
        });
    };

    const handleAddRow = () => {
        const item = {
            id: '',
            orderNumber: '',
            condition:'', 
            date: '',
            custumer: '',
            taxAmounts:'', 
            totalTaxes: '',
            totalQuantity:'', 
            orderItemList: ''
        };
        setDataOrder({
          rows: [...dataOrder, item]
        });
      };
    const  handleRemoveRow = () => {
        setDataOrder({
          rows: dataOrder.slice(0, -1)
        });
      };


    return (
        <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <input type="hidden"  />
                        <h1>Order N° 1</h1>
                    </div>
                    <div className="col-md-2">
                        <Link to="/" className="btn btn-secondary float-left">Back</Link>
                    </div>
                </div><br />
                <div>
                <div class="form-group row">
                            <label  class="col-sm-2 col-form-label">Customer</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="customer" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label  class="col-sm-2 col-form-label">Status</label>
                            <div class="col-sm-10">
                                <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>Pending</option>
                                <option>Completed</option>
                                <option>Rejected</option>
                            </select>
                            </div>
                            
                        </div>
                        <div class="form-group row">
                            <label  class="col-sm-2 col-form-label">Date</label>
                            <div class="col-sm-10">
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                            </div>
                        </div>
                </div>
                <div>
                <table className="table table-hover" id="tab_logic">
                    <thead className="thead-dark" >
                        <tr>
                            <th scope="col">N°</th>
                            <th scope="col">Consumer</th>
                            <th scope="col">Status</th>
                            <th scope="col">Date</th>
                            <th scope="col">Total</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {dataOrder.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{idx}</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={dataOrder[idx].name}
                          onChange={handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="mobile"
                          value={dataOrder[idx].mobile}
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
                            <button className="btn btn-primary"  onClick={handleAddRow}>Add Item +</button>
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
                                <div className="col-md-10"><i class="fa fa-html5" aria-hidden="true"></i><h5>Total City Tax</h5></div>
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
                </div>
                    
        </div>
    )
}

export default NewOrder;
