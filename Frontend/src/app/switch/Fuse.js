import React, { useEffect, useState, lazy } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addFuse } from '../Redux/actions/fuseActions';
import { Form } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';


const Fuse = () => {
    const activeSub = useSelector((state) => state.allSubstations.active);
    const [openAddMenu, setOpenAddMenu] = useState(false);
    const [fuse, setFuse] = useState({
        id: 0,
        mrId: "",
        name: "",
        description: "",
        costPerUnit: "",
        failureRate: "",
        IsUnderground: true,
        Phases: "1",
        RatedVoltage: "",
        NormalOpen: true,
        Retained: true,
        SwitchOnCount: "",
        SubstationId: activeSub.id,
        RatingCurrent: "",
        Cutout: true,
        MaxFaultCurrent: ""
    })

    const dispatch = useDispatch();

    useEffect(() => {
     
    }, []);

    const handleMenuClose = () => {
        setOpenAddMenu(false);
    }

    const handleNewFuse = () => {
        console.log('dasdssssssssssssssssssssssssss')
        dispatch(addFuse(fuse));
        setFuse({
            id: 0,
            mrId: "",
            name: "",
            description: "",
            costPerUnit: "",
            failureRate: "",
            IsUnderground: true,
            Phases: "1",
            RatedVoltage: "",
            NormalOpen: true,
            Retained: true,
            SwitchOnCount: "",
            SubstationId: activeSub.id,
            RatingCurrent: "",
            Cutout: true,
            MaxFaultCurrent: ""
        });
    }

    const handleInputChange = (event) => {
        setFuse({
            ...fuse,
            [event.target.name]:  event.target.type === "number" ? parseInt(event.target.value, 10) : event.target.value,
        });
    }


    return (
        <div>
            <button type="button" className="btn btn-inverse-danger btn-lg" onClick={() => setOpenAddMenu(true)}>+NewFuse</button>
            <Dialog open={openAddMenu} onClose={() => setOpenAddMenu(!openAddMenu)} >
                <div className="col-23 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Add New Load Break Switch</h4>
                            <form className="forms-sample" onSubmit={handleNewFuse} >
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-6 col-form-label">MrID</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" placeholder="MrID" name="mrId" onChange={handleInputChange} />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-6 col-form-label">Name</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" placeholder="Name" name="name" onChange={handleInputChange} />
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-6 col-form-label">Description</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" placeholder="Description" name="description" onChange={handleInputChange} />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-12 col-form-label">Is Underground</label>
                                            <div className="col-sm-4">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input" name="IsUnderground" id="IsUnderground" value={true} defaultChecked onChange={handleInputChange} /> True
                                                        <i className="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-sm-5">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input" name="IsUnderground" id="IsUnderground" value={false} onChange={handleInputChange} /> False
                                                        <i className="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-6 col-form-label">Phases</label>
                                            <div className="col-sm-9">
                                                <select className="form-control" name="Phases" id="Phases" onChange={handleInputChange}  >
                                                    <option value='1'> N </option>
                                                    <option value='2'> C </option>
                                                    <option value='3'> CN</option>
                                                    <option value='4'> B </option>
                                                </select>
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-6 col-form-label">Rated Voltage</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="number" placeholder="RatedVoltage" name="RatedVoltage" onChange={handleInputChange} />
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-6 col-form-label">Cost Per Unit</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="number" placeholder="costPerUnit" name="costPerUnit" onChange={handleInputChange} />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-6 col-form-label">Failure Rate</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="number" placeholder="FailureRate" name="failureRate" onChange={handleInputChange} />
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-12 col-form-label">Normal Open</label>
                                            <div className="col-sm-4">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input" name="NormalOpen" id="NormalOpen" value={true} defaultChecked onChange={handleInputChange} /> True
                                                        <i className="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-sm-5">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input" name="NormalOpen" id="NormalOpen" value={false} onChange={handleInputChange} /> False
                                                        <i className="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-12 col-form-label">Retained</label>
                                            <div className="col-sm-4">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input" name="Retained" id="Retained" value={true} defaultChecked onChange={handleInputChange} /> True
                                                        <i className="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-sm-5">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input" name="Retained" id="Retained" value={false} onChange={handleInputChange}/> False
                                                        <i className="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-6 col-form-label" >Rating Current</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="number" placeholder="RatingCurrent" name="RatingCurrent" onChange={handleInputChange} />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-6 col-form-label">Switch On Count</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="number" placeholder="SwitchOnCount" name="SwitchOnCount" onChange={handleInputChange} />
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-12 col-form-label">Cutout</label>
                                            <div className="col-sm-4">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input" name="Cutout" id="Cutout" value={true} defaultChecked onChange={handleInputChange} /> True
                                                        <i className="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-sm-5">
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input" name="Cutout" id="Cutout" value={false} onChange={handleInputChange} /> False
                                                        <i className="input-helper"></i>
                                                    </label>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                    <Form.Group className="row">
                                            <label className="col-sm-6 col-form-label">MaxFault Current</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="number" placeholder="MaxFaultCurrent" name="MaxFaultCurrent" onChange={handleInputChange} />
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                    </div>
                                    <div className="col-md-6">
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
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>

    );



}

export default Fuse;