import React, {useEffect } from 'react';
//import Slider from "react-slick";
import { TodoListComponent } from '../apps/TodoList'
import { useDispatch,useSelector } from "react-redux";
import { updateActive, getAllSubstations } from '../Redux/actions/substationActions'
import {Bar, Pie} from 'react-chartjs-2';
//import { VectorMap } from "react-jvectormap"

const Dashboard = () => {
  const substations = useSelector((state) => state.allSubstations.substations);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(updateActive());
  },[substations]);

const disconnectorCount= () => {
  var count = 0;

  substations.forEach(sub => {
    count += sub.disconnector.length;
  });

  return count;
}

const fuseCount= () => {
  var count = 0;

  substations.forEach(sub => {
    count += sub.fuses.length;
  });

  return count;
}

const loadBreakSwitchCount= () => {
  var count = 0;

  substations.forEach(sub => {
    count += sub.loadBreakSwitches.length;
  });

  return count;
}

const breakerCount= () => {
  var count = 0;

  substations.forEach(sub => {
    count += sub.breakers.length;
  });

  return count;
}

const fillData = () => {
  const nesto = [];
   substations.forEach(sub => {
 
     nesto.push(sub.name);
     //data.datasets[0].data.push(sub.disconnector.length + sub.fuses.length + sub.loadBreakSwitches.length  + sub.breakers.length );
   });
 
   return nesto;
 }

 const fillNumbers = () => {
  const nesto = [];
   substations.forEach(sub => {
     nesto.push(sub.disconnector.length + sub.fuses.length + sub.loadBreakSwitches.length  + sub.breakers.length );
   });
 
   return nesto;
 }



  const data = {
    labels: fillData(),
    datasets: [{
      label: '# of Switches',
      data: fillNumbers(),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 162, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 162, 86, 1)'
      ],
      borderWidth: 1,
      fill: false
    }]
};

const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      },
      gridLines: {
        color: "rgba(204, 204, 204,0.1)"
      }
    }],
    xAxes: [{
      gridLines: {
        color: "rgba(204, 204, 204,0.1)"
      }
    }]
  },
  legend: {
    display: false
  },
  elements: {
    point: {
      radius: 0
    }
  }
}


 

const doughnutPieData = {
  datasets: [{
    data: [disconnectorCount(), fuseCount(), loadBreakSwitchCount(), breakerCount()],
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
    animateScale: true,
    animateRotate: true
  }
};


  // const toggleProBanner = () => {
  //   document.querySelector('.proBanner').classList.toggle("hide");
  // }
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
                      <h2 className="mb-0">{disconnectorCount()}</h2>
                      <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                    </div>
                    <h6 className="text-muted font-weight-normal"> Substation1 has the most</h6>
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
                      <h2 className="mb-0">{fuseCount()}</h2>
                      <p className="text-success ml-2 mb-0 font-weight-medium">+8.3%</p>
                    </div>
                    <h6 className="text-muted font-weight-normal"> Substation3 has the most</h6>
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
                      <h2 className="mb-0">{loadBreakSwitchCount()}</h2>
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
                      <h2 className="mb-1">{breakerCount()}</h2>
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

        <div className='row'>
          <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Substations - Switch Count</h4>
                        <Bar data={data} options={options} />    
                    </div>
                </div>
            </div>
            <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Switches - Pie Chart</h4>
                        <Pie data={doughnutPieData} options={doughnutPieOptions} />                                
                    </div>
                </div>
            </div>
        </div>

        <div className='row'>
          <div className="col-md-12 col-xl-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">To do list</h4>
                <TodoListComponent />
              </div>
            </div>
          </div>
        </div>

      </div> 
    );
  
}

export default Dashboard;