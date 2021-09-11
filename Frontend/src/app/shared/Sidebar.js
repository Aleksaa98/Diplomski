import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import {connect} from 'react-redux';
import {changeState, getByNameSub,getAllSubstations} from '../Redux/actions/substationActions'


class Sidebar extends Component {

  state = {};
  
  updateState(name){
    this.props.subtations.forEach((obj => {
      if(obj.name === name)
      {
        if(!obj.state){
          obj.state = true;
          this.props.changeState(obj,obj.name,true)
        }
        else{
          obj.state = false;
          this.props.changeState(obj,obj.name,false)
        }
      }
      else{
        obj.state = false;
        this.props.changeState(obj,obj.name,false)
      }
  }));
  this.toggleMenuState('novo')
  }

  updateStateFalseAll(){
    this.props.subtations.forEach((obj => {
          obj.state = false;
          this.props.changeState(obj,obj.name,false)
  }));
  }

  updateActiveUser(id){
    this.props.getByNameSub(id);
  }

  updateAllDashBoard(){
    this.props.getAllSubstations();
  }


  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true}); 
    }
  }



  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }


  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      
    ];



    this.props.subtations.forEach((obj => {
        dropdownPaths.push({path:'/substation', state: obj.name});
    }));

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo" href="index.html"><img src={require('../../assets/images/logo.svg')} alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini" href="index.html"><img src={require('../../assets/images/logo-mini.svg')} alt="logo" /></a>
        </div>
        <ul className="nav">
          {/* <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img className="img-xs rounded-circle " src={require('../../assets/images/faces/aleksa.jpg')} alt="profile" />
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal"><Trans>Worker</Trans></h5>
                  <span><Trans>Worker</Trans></span>
                </div>
              </div>
            </div>
          </li> */}

          <li className="nav-item nav-category">
            <span className="nav-link"><Trans>Navigation</Trans></span>
          </li>
          <li className={ this.isPathActive('/dashboard') ? 'nav-item menu-items active' : 'nav-item menu-items' } onClick={ () => this.updateStateFalseAll() }>
            <Link className="nav-link" to="/dashboard">
              <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
              <span className="menu-title"><Trans>Dashboard</Trans></span>
            </Link>
          </li>
          {this.props.subtations.map((sub,index)=> 
							 <li className= 'nav-item menu-items' >
                
               <div className={ this.props.subtations[index].state ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.updateState(sub.name) } data-toggle="collapse">
               <Link className="nav-link"  to= '/substation/Substation' onClick={() => this.updateActiveUser(sub.id)}>
                 <span className="menu-icon">
                   <i className={this.props.icon ? "mdi mdi-houzz-box" : "mdi mdi-domain"}></i>
                 </span>
                 
                 <span  className="menu-title"><Trans>{sub.name}</Trans></span>
                 
                 <i className="menu-arrow"></i>
                </Link>
               </div>
               
               <Collapse in={ this.props.subtations[index].state }>
                 <div>
                   <ul className="nav flex-column sub-menu">
                   <li className="nav-item"> <Link className={ this.isPathActive('/substation/disconnector') ? 'nav-link active' : 'nav-link' } to="/substation/disconnector">
                   <span className="menu-icon"><i className={this.props.icon ? "mdi mdi-flash-off" : "mdi mdi-led-variant-off"}></i></span><Trans>Disconnector</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/substation/fuse') ? 'nav-link active' : 'nav-link' } to="/substation/fuse">
                   <span className="menu-icon"><i className={this.props.icon ? "mdi mdi-image-broken-variant" : "mdi mdi-format-wrap-tight "}></i></span><Trans>Fuse</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/substation/loadBreakSwitch') ? 'nav-link active' : 'nav-link' } to="/substation/loadBreakSwitch">
                   <span className="menu-icon"><i className={this.props.icon ? "mdi mdi-security-network" : " mdi mdi-server-security"}></i></span><Trans>LoadBreakSwitch</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/substation/breaker') ? 'nav-link active' : 'nav-link' } to="/substation/breaker">
                   <span className="menu-icon"><i className={this.props.icon ? "mdi mdi-switch" : " mdi mdi-server-network"}></i></span><Trans>Breaker</Trans></Link></li>
                   </ul>
                 </div>
               </Collapse>
             </li>
						)}
         						
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
  
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}


const allSubs = (state) => {
    return {
      subtations : state.allSubstations.substations,
      icon: state.allIconLists.icon
    }
}

const funkcije = () =>{
  return{
    changeState,
    getAllSubstations,
    getByNameSub
  }
}

export default connect(allSubs,funkcije())(withRouter(Sidebar));