import React, {useEffect,useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import  {getAllSubstations}  from '../Redux/actions/substationActions';
import { Doughnut} from 'react-chartjs-2';


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

     
const doughnutPieData = {
  datasets: [{
    data: [23, 12, 15, 30],
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


  

    return (
      <div>
        <h1> SUBSTATION  <i className="mdi mdi-houzz-box"></i> - Naziv</h1>
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

        <div className="row">
          <div className="col-md grid-margin strech-card">
            <div className="card">
              <div className="card-body">
                <div className='row'>
                <div className="col-md-10"> 
                  <h3 className="Title"> Substation Information 
                  </h3>
                </div>
                  <button type="button" className="btn btn-outline-success btn-icon-text">
                      Edit
                      <i className="mdi mdi-file-check btn-icon-append"></i>                          
                  </button>      
                </div>
                  <div className="aligner-wrapper">
                    <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                      <div className="text-md-center text-xl-left">
                        <h6 className="mb-1">MrID</h6>
                      </div>
                    <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                      <h6 className="font-weight-bold mb-0">MrID</h6>
                    </div>
                  </div>
                    <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                      <div className="text-md-center text-xl-left">
                        <h6 className="mb-1">Name</h6>
                      </div>
                      <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                        <h6 className="font-weight-bold mb-0">Naziv</h6>
                      </div>
                    </div>
                    <div className="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                      <div className="text-md-center text-xl-left">
                        <h6 className="mb-1">Description</h6>
                      </div>
                      <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                        <h6 className="font-weight-bold mb-0">Opis</h6>
                      </div>
                    </div>
                    <div className="d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                      <div className="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                         <button type="button" className="btn btn-danger btn-lg"> <i className="mdi mdi-delete"></i> Delete</button>
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

     
      </div> 
      
    );
  
}

export default Substation;