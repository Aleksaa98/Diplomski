import React, { useEffect, useState, lazy } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateSubstation, getAllSubstations, deleteSubstation } from '../Redux/actions/substationActions';
import { Doughnut } from 'react-chartjs-2';
import { Switch, Link, Route, Redirect } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';


const Substation = () => {
  const activeSub = useSelector((state) => state.allSubstations.active);
  const [openAddMenu, setOpenAddMenu] = useState(false);
  const [substation, setSubstation] = useState({
    disconnector: activeSub.disconnector,
    fuses: activeSub.fuses,
    loadBreakSwitches: activeSub.loadBreakSwitches,
    breakers: activeSub.breakers,
    id: activeSub.id,
    mrId: activeSub.mrid,
    name: activeSub.name,
    description: activeSub.description,
    state: false
  })

  const handleDelete = (id) => {
    dispatch(getAllSubstations());
    dispatch(deleteSubstation(id));
  }

  const dispatch = useDispatch();
  // console.log(activeSub);
  // console.log(substations);
  //  useEffect(() => {
  //   dispatch(getByNameSub(id));
  //  },[]);



  const doughnutPieData = {
    datasets: [{
      data: [activeSub.disconnector.length, activeSub.fuses.length, activeSub.loadBreakSwitches.length, activeSub.breakers.length],
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255,99,132,1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Disconnector',
      'Fuse',
      'LoadBreakSwitch',
      'Breaker',
    ]
  };

  const doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: false,
      animateRotate: false
    }
  };


  const handleMenuClose = () => {
    setOpenAddMenu(false);
  }

  const handleMenuOpen = () => {
    setOpenAddMenu(true);
    setSubstation({
      disconnector: activeSub.disconnector,
      fuses: activeSub.fuses,
      loadBreakSwitches: activeSub.loadBreakSwitches,
      breakers: activeSub.breakers,
      id: activeSub.id,
      mrid: activeSub.mrid,
      name: activeSub.name,
      description: activeSub.description,
      state: false
    });
  }

  const handleUpdateSubstation = () => {
    dispatch(getAllSubstations());
    dispatch(updateSubstation(substation));
    setSubstation({
      disconnector: activeSub.disconnector,
      fuses: activeSub.fuses,
      loadBreakSwitches: activeSub.loadBreakSwitches,
      breakers: activeSub.breakers,
      id: activeSub.id,
      mrid: activeSub.mrid,
      name: activeSub.name,
      description: activeSub.description,
      state: false
    });
    handleMenuClose();

  }

  const handleInputChange = (event) => {
    setSubstation({
      ...substation,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <h1> SUBSTATION  <i className="mdi mdi-houzz-box"></i> - {activeSub.name} </h1>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">

        </div>
      </div>

      <div className="row">
        <div className="col-sm-3 grid-margin">
          <div className="card">
            <div className="card-body">
              <h3>Disconnector</h3>
              <div className="row">
                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                  <div className="d-flex d-sm-block d-md-flex align-items-center">
                    <h2 className="mb-0">  {activeSub.disconnector.length}   </h2>
                    <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                  </div>
                  <h6 className="text-muted font-weight-normal"> Means of quickly disconnecting electronic systems from their primary power source</h6>
                </div>
                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                  <i className="icon-lg mdi mdi-flash-off text-primary ml-auto"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 grid-margin">
          <div className="card">
            <div className="card-body">
              <h3>Fuse</h3>
              <div className="row">
                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                  <div className="d-flex d-sm-block d-md-flex align-items-center">
                    <h2 className="mb-0">{activeSub.fuses.length} </h2>
                    <p className="text-success ml-2 mb-0 font-weight-medium">+8.3%</p>
                  </div>
                  <h6 className="text-muted font-weight-normal"> Switch that's used to isolate electrical equipment from the mains supply</h6>
                </div>
                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                  <i className="icon-lg mdi mdi-image-broken-variant text-danger ml-auto"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 grid-margin">
          <div className="card">
            <div className="card-body">
              <h3>Load Break Switch</h3>
              <div className="row">
                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                  <div className="d-flex d-sm-block d-md-flex align-items-center">
                    <h2 className="mb-0">{activeSub.loadBreakSwitches.length}</h2>
                    <p className="text-danger ml-2 mb-0 font-weight-medium">-2.1% </p>
                  </div>
                  <h6 className="text-muted font-weight-normal"> A disconnect switch designed to provide making or breaking of specified currents</h6>
                </div>
                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                  <i className="icon-lg mdi mdi-security-network text-success ml-auto"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 grid-margin">
          <div className="card">
            <div className="card-body">
              <h3>Breaker</h3>
              <div className="row">
                <div className="col-8 col-sm-12 col-xl-8 my-auto">
                  <div className="d-flex d-sm-block d-md-flex align-items-center">
                    <h2 className="mb-1">{activeSub.breakers.length}</h2>
                    <p className="text-danger ml-2 mb-0 font-weight-medium">-2.1% </p>
                  </div>
                  <h6 className="text-muted font-weight-normal">A switch that is designed to provide switching power on and off in a system.</h6>
                </div>
                <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                  <i className="icon-lg mdi mdi-switch text-warning ml-auto"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md grid-margin strech-card">
          <div className="card">
            <div className="card-body">
              <div className='row'>
                <div className="col-md-10">
                  <h3 className="Title"> Substation Information
                  </h3>
                </div>
              </div>
              <div className="aligner-wrapper">
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1">MrID</h6>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">{activeSub.mrid}</h6>
                  </div>
                </div>
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1">Name</h6>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">{activeSub.name}</h6>
                  </div>
                </div>
                <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <div className="text-md-center text-xl-left">
                    <h6 className="mb-1">Description</h6>
                  </div>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <h6 className="font-weight-bold mb-0">{activeSub.description}</h6>
                  </div>
                </div>
                <div className="d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                  <button type="button" className="btn btn-outline-success btn-icon-text" onClick={handleMenuOpen}>
                    Edit
                    <i className="mdi mdi-file-check btn-icon-append"></i>
                  </button>
                  <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                    <Link to='dashboard' type="button" className="btn btn-danger btn-lg" onClick={() => handleDelete(activeSub.id)}> <i className="mdi mdi-delete"> </i> Delete</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6  stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Doughnut Chart</h4>
              <Doughnut data={doughnutPieData} options={doughnutPieOptions} />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={openAddMenu} onClose={() => setOpenAddMenu(!openAddMenu)} >
        <div className="col-md-20  stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Update Substation</h4>
              <p className="card-description"> User can update existing substiation here </p>
              <form className="forms-sample" >
                <Form.Group className="row">
                  <label htmlFor="exampleInputMrid" className="col-sm-3 col-form-label">MrID</label>
                  <div className="col-sm-9">
                    <Form.Control type="text" className="form-control" id="exampleInputMrid" value={substation.mrid} placeholder="MrID" name="mrid" onChange={handleInputChange} />
                  </div>
                </Form.Group>
                <Form.Group className="row">
                  <label htmlFor="exampleInputName" className="col-sm-3 col-form-label">Name</label>
                  <div className="col-sm-9">
                    <Form.Control type="name" className="form-control" id="exampleInputName" value={substation.name} placeholder="Name" name="name" onChange={handleInputChange} />
                  </div>
                </Form.Group>
                <Form.Group className="row">
                  <label htmlFor="exampleInputDescription" className="col-sm-3 col-form-label">Desc</label>
                  <div className="col-sm-9">
                    <Form.Control type="text" className="form-control" id="exampleInputDescription" value={substation.description} placeholder="Description" name="description" onChange={handleInputChange} />
                  </div>
                </Form.Group>
                <div className="template-demo">
                  <button type="button" className="btn btn-primary btn-icon-text" onClick={handleUpdateSubstation} >
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

export default Substation;