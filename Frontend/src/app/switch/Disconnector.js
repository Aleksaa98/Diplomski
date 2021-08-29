import React, { useEffect, useState, lazy } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateSubstation, getAllSubstations, deleteSubstation } from '../Redux/actions/substationActions';
import { addDisconnector } from '../Redux/actions/disconnectorActions';
import { Doughnut } from 'react-chartjs-2';
import { Switch, Link, Route, Redirect } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';


const Disconnector = () => {
    const activeSub = useSelector((state) => state.allSubstations.active);
    const [openAddMenu, setOpenAddMenu] = useState(false);
    const [disconnector, setDisconnector] = useState({
        id: 0,
        mrId: "",
        name: "",
        description: "",
        costPerUnitL: "",
        failureRate: "",
        IsUnderground: "",
        Phases: "",
        RatedVoltage: "",
        NormalOpen: "",
        Retained: "",
        SwitchOnCount: "",
        SubstationId: "",
        ReactiveBreakingCurrent: ""

    })

    const dispatch = useDispatch();

    useEffect(() => {
     
    }, []);

    const handleMenuClose = () => {
        setOpenAddMenu(false);
    }

    const handleNewDisconnector = () => {
        console.log('dasdssssssssssssssssssssssssss')
        dispatch(addDisconnector(disconnector));
        setDisconnector({
            id: 0,
            mrId: "",
            name: "",
            description: "",
            costPerUnitL: "",
            failureRate: "",
            IsUnderground: "",
            Phases: "",
            RatedVoltage: "",
            NormalOpen: "",
            Retained: "",
            SwitchOnCount: "",
            SubstationId: "",
            ReactiveBreakingCurrent: ""
        });
    }

    const handleInputChange = (event) => {
        setDisconnector({
            ...disconnector,
            [event.target.name]: event.target.value,
        });
    }


    return (
        <div>
            <button type="button" className="btn btn-inverse-primary btn-lg" onClick={() => setOpenAddMenu(true)}>+NewDisconnector</button>
            <Dialog open={openAddMenu} onClose={() => setOpenAddMenu(!openAddMenu)} >
                <div className="col-md-20  stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">New Disconnector</h4>
                            <p className="card-description"> User can add new Disconnector here </p>
                            <form className="forms-sample" onSubmit={handleNewDisconnector} >
                                <div className='row'>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputMrid" className="col-sm-3 col-form-label">MrID</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="number" className="form-control" id="exampleInputMrid" placeholder="MrID" name="mrId" onChange={handleInputChange} />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputName" className="col-sm-3 col-form-label">Name</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="number" className="form-control" id="exampleInputName" placeholder="Name" name="name" onChange={handleInputChange} />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputDescription" className="col-sm-3 col-form-label">Desc</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="number" className="form-control" id="exampleInputDescription" placeholder="Description" name="description" onChange={handleInputChange} />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputDescription" className="col-sm-3 col-form-label">Desc</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="number" className="form-control" id="exampleInputDescription" placeholder="costPerUnitL" name="costPerUnitL" onChange={handleInputChange} />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputDescription" className="col-sm-3 col-form-label">Desc</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="number" className="form-control" id="exampleInputDescription" placeholder="failureRate" name="failureRate" onChange={handleInputChange} />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputDescription" className="col-sm-3 col-form-label">Desc</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="number" className="form-control" id="exampleInputDescription" placeholder="SubstationId" name="SubstationId" onChange={handleInputChange} />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className='row'>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputDescription" className="col-sm-3 col-form-label">Desc</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="number" className="form-control" id="exampleInputDescription" placeholder="IsUnderground" name="IsUnderground" onChange={handleInputChange} />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputDescription" className="col-sm-3 col-form-label">Desc</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="number" className="form-control" id="exampleInputDescription" placeholder="Phases" name="Phases" onChange={handleInputChange} />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputDescription" className="col-sm-3 col-form-label">Desc</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="number" className="form-control" id="exampleInputDescription" placeholder="RatedVoltage" name="RatedVoltage" onChange={handleInputChange} />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputDescription" className="col-sm-3 col-form-label">Desc</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="number" className="form-control" id="exampleInputDescription" placeholder="NormalOpen" name="NormalOpen" onChange={handleInputChange} />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputDescription" className="col-sm-3 col-form-label">Desc</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="number" className="form-control" id="exampleInputDescription" placeholder="Retained" name="Retained" onChange={handleInputChange} />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputDescription" className="col-sm-3 col-form-label">Desc</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="number" className="form-control" id="exampleInputDescription" placeholder="SwitchOnCount" name="SwitchOnCount" onChange={handleInputChange} />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row">
                                        <label htmlFor="exampleInputDescription" className="col-sm-3 col-form-label">Desc</label>
                                        <div className="col-sm-9">
                                            <Form.Control type="number" className="form-control" id="exampleInputDescription" placeholder="ReactiveBreakingCurrent" name="ReactiveBreakingCurrent" onChange={handleInputChange} />
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="template-demo">
                                    <button type="submit" className="btn btn-primary btn-icon-text" >
                                        <i className="mdi mdi-file-check btn-icon-prepend"></i>
                                        Submit
                                    </button>
                                    <button type="button" className="btn btn-dark btn-icon-text" onClick={handleMenuClose}>
                                        <i className="mdi mdi-close btn-icon-prepend"></i>
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>

    );



}

export default Disconnector;