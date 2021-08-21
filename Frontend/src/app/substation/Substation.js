import React, {useEffect,useState} from 'react';
import {Bar, Pie} from 'react-chartjs-2';
import { useDispatch,useSelector } from "react-redux";
import  {getAllSubstations}  from '../Redux/actions/substationActions';


const Substation = () => {
    const substations = useSelector((state) => state.allSubstations.substations);
    const [activeSub,getActiveSub] = useState();
    
    const name = window.location.pathname.substring(1).split('/')[7];
    console.log(name);
    // const dispatch = useDispatch();

     useEffect(() => {
         //dispatch(getAllSubstations());
     },[]);

     console.log(activeSub);

    return (
      <div>
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
                      {/* <h2 className="mb-0"> {activeSub.dissCount}   </h2> */}
                      <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                    </div>
                    <h6 className="text-muted font-weight-normal"> Means of quickly disconnecting mechanical or electronic systems from their primary power source safely</h6>
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
                      {/* <h2 className="mb-0">{activeSub.fuseCount} </h2> */}
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
                      <h2 className="mb-0">15</h2>
                      <p className="text-danger ml-2 mb-0 font-weight-medium">-2.1% </p>
                    </div>
                    <h6 className="text-muted font-weight-normal"> Substation2 has the most</h6>
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
                      <h2 className="mb-1">30</h2>
                      <p className="text-danger ml-2 mb-0 font-weight-medium">-2.1% </p>
                    </div>
                    <h6 className="text-muted font-weight-normal"> Substation1 has the most</h6>
                  </div>
                  <div className="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                    <i className="icon-lg mdi mdi-switch text-warning ml-auto"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div> 
    );
  
}

export default Substation;