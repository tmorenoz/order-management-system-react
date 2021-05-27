import React , { useState, useEffect } from 'react'
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Link,
  } from "react-router-dom";

const Products = () => {

    const [product, setProduct]=useState([]);
    const [modalEdit, setModalEdit] = useState(false);
    const [productEdit, setProductEdit] = useState({
        id :'',
		name :'',
		category :'',
		price : '',
		status :'',
    })

    const ListProductGet = async()=>{
        const data = await fetch('http://localhost:6039/findAllProducts');
        const product = await data.json();
        console.log(product);
        setProduct(product);
     };

    const selectProduct = (elemento, caso) => {
        //console.log(elemento);
        setProductEdit(elemento);
        (caso ==='Editar')&&setModalEdit(true)
    };

    
    useEffect(() => {
        ListProductGet();
    }, []);

    return (
        <div className="App">
            <h1>Products</h1>
            <br />
            <div    >
                <div className="row">
                    <div className="col-md-10">

                    </div>
                    <div className="col-md-2">
                        <Link to="/newOrder" className="btn btn-primary float-left">Create Product</Link>
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
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((elemento, i) => (

                                <tr key={elemento.id}>
                                    <th scope="row">{i}</th>
                                    <td>{elemento.name}</td>
                                    <td>{elemento.category}</td>
                                    <td>{elemento.price}</td>
                                    <td>{elemento.status}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={()=>selectProduct(elemento, 'Editar')}>Edit</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products
