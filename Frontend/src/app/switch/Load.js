import React, { useEffect, useState, lazy } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteLoad, getAllLoad, addLoad } from '../Redux/actions/loadActions';
import { getAllSubstations } from '../Redux/actions/substationActions'
import { Form } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import DatePicker from "react-datepicker";
import { actions } from 'react-table';
import { Dropdown } from 'react-bootstrap';


const Load = () => {
    const activeSub = useSelector((state) => state.allSubstations.active);
    const switches = activeSub.loadBreakSwitches;
    const icon = useSelector((state) => state.allIconLists.icon);
    
    const [openAddMenu, setOpenAddMenu] = useState(false);
    const [loadBS, setLoadBS] = useState({
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
        RatedCurrent: "",
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllLoad());
    }, [switches]);

    const handleMenuClose = () => {
        setOpenAddMenu(false);
        setLoadBS({
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
            RatedCurrent: "",
        });
    }

    const handleNewLoadBS = () => {
        dispatch(addLoad(loadBS));
        setLoadBS({
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
            RatedCurrent: "",
        });
    }

    const handleInputChange = (event) => {
        setLoadBS({
            ...loadBS,
            [event.target.name]: event.target.type === "number" ? parseInt(event.target.value, 10) : event.target.value,
        });
    }
    const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const renderTableHeader = () => {
        console.log(switches[0].isUnderground)
        const array = Object.keys(switches[0]).map(element => <th className="card-title" key={element}>
            {Capitalize(element)}
        </th>)

        const reversed = array.reverse();
        const second = reversed.slice(4);
        const slice = reversed.slice(0, 4);
        const newSlice = slice.reverse();
        const ret = newSlice.concat(second);
        const retWihoutID = ret.slice(1);
        retWihoutID.splice(8, 1);
        retWihoutID.splice(11, 1);
        var retValue = [<th className="card-title" key="Actions">Actions</th>, <th>|</th>].concat(retWihoutID);
        return retValue;
    }

    const handleDelete = (id) => {
        dispatch(deleteLoad(id));
        dispatch(getAllLoad());
        window.location.reload();
    }

    const renderTableBody = () => {
        return switches.map(element => {
            return (
                <tr key={element}>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle variant="btn btn-outline-success btn-icon-text" id="dropdownMenuIconButton6">
                                <i className="mdi mdi-wrench"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Header>Settings</Dropdown.Header>
                                <Dropdown.Divider></Dropdown.Divider>
                                <Dropdown.Item>Edit</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleDelete(element.id)}>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                    <td>|</td>
                    <td>{element.mrid}</td>
                    <td>{element.name}</td>
                    <td>{element.description}</td>
                    <td> {element.isUnderground ? <label className="badge badge-success">True</label> : <label className="badge badge-danger">False</label>} </td>
                    <td>{element.failureRate}</td>
                    <td>{element.costPerUnit}</td>
                    <td>{element.ratedVoltage}</td>
                    <td>{element.phases}</td>
                    <td>{element.switchOnCount}</td>
                    <td>{element.retained ? <label className="badge badge-success">True</label> : <label className="badge badge-danger">False</label>}</td>
                    <td>{element.normalOpen ? <label className="badge badge-success">True</label> : <label className="badge badge-danger">False</label>}</td>
                    <td>{element.ratedCurrent}</td>

                </tr>
            )
        })
    }



    const renderTable = () => {
        return switches.length > 0
            ? (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            {renderTableHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableBody()}
                    </tbody>
                </table>
            ) : (

                <h3><i className="mdi mdi-worker"></i>  There are no elements in the table at the moment </h3>
            )
    }


    return (
        <div>
            <h1>Load Break Switch <i class={icon ? "mdi mdi-security-network" : " mdi mdi-server-security"}></i> <button type="button" className="btn btn-inverse-success btn-lg" onClick={() => setOpenAddMenu(true)}>+NewLoadBreakSwitch</button>
            </h1>

            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">List of all Elements</h4>
                        <p className="card-description"> Item can be edited and deleted in this table
                        </p>
                        <div className="table-responsive">
                            {renderTable()}
                        </div>
                    </div>
                </div>
            </div>

            <Dialog open={openAddMenu} onClose={() => setOpenAddMenu(!openAddMenu)} >
                <div className="col-23 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Add New Load Break Switch</h4>
                            <form className="forms-sample" onSubmit={handleNewLoadBS} >
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
                                            <label className="col-sm-6 col-form-label">Cost Per Unit</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="number" placeholder="costPerUnit" name="costPerUnit" onChange={handleInputChange} />
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
                                            <label className="col-sm-6 col-form-label" >Rated Current</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="number" placeholder="RatedCurrent" name="RatedCurrent" onChange={handleInputChange} />
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
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
                                                        <input type="radio" className="form-check-input" name="Retained" id="Retained" value={false} onChange={handleInputChange} /> False
                                                        <i className="input-helper"></i>
                                                    </label>
                                                </div>
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
                                    </div>
                                    <div className="col-md-6">
                                        <div className="template-demo">
                                            <button type="submit" disabled={!loadBS.mrId || !loadBS.name || !loadBS.description || (loadBS.costPerUnit < 0 || !loadBS.costPerUnit)
                                                || (loadBS.failureRate < 0 || !loadBS.failureRate) || (loadBS.RatedVoltage < 0 || !loadBS.RatedVoltage) || (loadBS.SwitchOnCount < 0 || !loadBS.SwitchOnCount) || (loadBS.RatedCurrent < 0 || !loadBS.RatedCurrent)} className="btn btn-primary btn-icon-text" >
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

export default Load;