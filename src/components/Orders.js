import React, { useState, useEffect } from 'react';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
//import { faEdit } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Link,
  } from "react-router-dom";

const Orders = () => {

    const [order, setOrder]=useState([]);
    const [modalEdit, setModalEdit] = useState(false);
    const [orderEdit, setOrderEdit] = useState({
        id: '',
        orderNumber: '',
        condition:'', 
        date: '',
        custumer: '',
        taxAmounts:'', 
        totalTaxes: '',
        totalQuantity:'', 
        orderItemList: ''
    })

    const ListOrderGet = async()=>{
       const data = await fetch('http://localhost:6039/findAllOrders');
       const order = await data.json();
       console.log(order);
       setOrder(order);
    };

    const selectOrder = (elemento, caso) => {
        //console.log(elemento);
        setOrderEdit(elemento);
        (caso ==='Editar')&&setModalEdit(true)
    };

    const handleChange=e=>{
        const {name, value}=e.target;
        selectOrder((prevState)=>({
          ...prevState,
          [name]: value
        }));

        console.log(orderEdit);
    }
    
    const getEdit=async()=>{
        const data = await fetch('http://localhost:6039/findAllOrders/'+orderEdit.id, orderEdit);
        const ordersUpdate = await data.json();
       console.log(ordersUpdate);
       ListOrderGet();

    }

    useEffect(() => {
        ListOrderGet();
    }, []);

    return (
        <div>
            <h1>Orders</h1>
            <br />
            <div    >
                <div className="row">
                    <div className="col-md-10">

                    </div>
                    <div className="col-md-2">
                        <Link to="/newOrder" className="btn btn-primary float-left">Create Order</Link>
                    </div>
                </div>
                <br />
            </div>
            <hr />
            <div>
                <table className="table">
                    <thead className="thead-dark">
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
                        {
                            order.map((elemento, i) => (

                                <tr key={elemento.id}>
                                    <th scope="row">{i}</th>
                                    <td>{elemento.custumer}</td>
                                    <td>{elemento.condition}</td>
                                    <td>{elemento.date}</td>
                                    <td>{elemento.totalTaxes}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={()=>selectOrder(elemento, 'Editar')}>Edit</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Modal isOpen={modalEdit}>
                    <ModalHeader>
                        <div>
                            <h3>Editar Order</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label>Id</label>
                            <input 
                             className="form-control"
                             type="text"
                             name="id"
                             value={orderEdit && orderEdit.id}
                              />
                            <br />
                            <label>orderNumber</label>
                            <input 
                             className="form-control"
                             type="text"
                             name="orderNumber"
                             value={orderEdit && orderEdit.orderNumber}
                             onChange={handleChange}
                              />
                            <label>condition</label>
                            <input 
                             className="form-control"
                             readonly
                             type="text"
                             name="condition"
                             value={orderEdit &&  orderEdit.condition}
                             onChange={handleChange}
                              />
                            <label>date</label>
                            <input 
                             className="form-control"
                             readonly
                             type="text"
                             name="date"
                             defaultValue={orderEdit &&  orderEdit.date}
                             onChange={handleChange}
                              />
                             <label>custumer</label>
                            <input 
                             className="form-control"
                             readonly
                             type="text"
                             name="custumer"
                             value={orderEdit &&  orderEdit.custumer}
                             onChange={handleChange}
                              />
                            <label>taxAmounts</label>
                            <input 
                             className="form-control"
                             readonly
                             type="text"
                             name="taxAmounts"
                             value={orderEdit &&  orderEdit.taxAmounts}
                             onChange={handleChange}
                              />
                               <label>totalTaxes</label>
                            <input 
                             className="form-control"
                             readonly
                             type="text"
                             name="totalTaxes"
                             value={orderEdit &&  orderEdit.totalTaxes}
                             onChange={handleChange}
                              />
                               <label>totalQuantity</label>
                            <input 
                             className="form-control"
                             readonly
                             type="text"
                             name="totalQuantity"
                             value={orderEdit && orderEdit.totalQuantity}
                             onChange={handleChange}
                              />
                            <label>orderItemList</label>
                            <input 
                             className="form-control"
                             readonly
                             type="text"
                             name="orderItemList"
                             value={orderEdit && orderEdit.orderItemList}
                             onChange={handleChange}
                              />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-primary" onClick={()=>getEdit()}>
                            Update
                        </button>
                        <button className="btn btn-danger"
                            onClick={()=>setModalEdit(false)}
                        >
                            Cancelar
                        </button>
                    </ModalFooter>
                </Modal>

            </div>
        </div>
    )
}

export default Orders

