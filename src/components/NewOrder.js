import React, { useState } from 'react'
import {Link} from "react-router-dom";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import DetailOrder from './DetailOrder';

const NewOrder = () => {

    const [startDate, setStartDate] = useState(new Date());

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
            </div>
            <hr />
            <div>
                <div class="form-group row">
                            <label  class="col-sm-2 col-form-label">Customer</label>
                            <div class="col-sm-10">
                            <input type="text" className="form-control" id="customer" />
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
                        <div className="form-group row">
                            <label  class="col-sm-2 col-form-label">Date</label>
                            <div className="col-sm-10">
                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                            </div>
                        </div>
                </div>
                <hr />
            <DetailOrder></DetailOrder>
        </div>
    )
}

export default NewOrder;
