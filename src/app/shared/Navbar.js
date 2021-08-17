import React, {useState} from 'react';
//import { Dropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Dialog from '@material-ui/core/Dialog';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

const Navbar =  () => {
  const [openAddMenu,setOpenAddMenu] = useState(false);
	const [substation,setSubstation] = useState({
		mrId: "",
		name: "",
		descritpion: "",
	})

  const handleMenuClose = () => {
		setOpenAddMenu(false);
	}

  const handleChangeInput =(event) => {
		setSubstation({
			...substation,
			[event.target.name]: event.target.value,
		});
	};

  const handleNewSubstation = () => {
		// dispatch(getAllSubstations());
		// dispatch(addSubstation(substation));
		// setSubstation({
		// mrId: "",
		// name: "",
		// descritpion: "",
		// });
		// handleMenuClose();
	}


  const toggleOffcanvas = () => {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  const toggleRightSidebar = () => {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }

    return (
      <nav className="navbar p-0 fixed-top d-flex flex-row">
        <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo-mini" to="/"><img src={require('../../assets/images/logo-mini.svg')} alt="logo" /></Link>
        </div>
        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          <button className="navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <span className="mdi mdi-menu"></span>
          </button>
          <ul className="navbar-nav w-100">
            <li className="nav-item w-100">
              <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                <input type="text" className="form-control" placeholder="Search products" />
              </form>
            </li>

          </ul>
          <ul className="navbar-nav navbar-nav-right">
          <button type="button" className="btn btn-inverse-success btn-lg" onClick={() => setOpenAddMenu(true)}>+CreateNewSubstation</button>
          </ul>
          <Dialog open={openAddMenu} onClose={() => setOpenAddMenu(!openAddMenu)} >
            
				  <div className="col-md-20  stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">New Substation</h4>
                <p className="card-description"> User can add new substiation here </p>
                <form className="forms-sample">
                  <Form.Group className="row">
                    <label htmlFor="exampleInputMrid" className="col-sm-3 col-form-label">MrID</label>
                    <div className="col-sm-9">
                    <Form.Control type="text" className="form-control" id="exampleInputMrid" placeholder="MrID" />
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label htmlFor="exampleInputName" className="col-sm-3 col-form-label">Name</label>
                    <div className="col-sm-9">
                    <Form.Control type="name" className="form-control" id="exampleInputName" placeholder="Name" />
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label htmlFor="exampleInputDescription" className="col-sm-3 col-form-label">Desc</label>
                    <div className="col-sm-9">
                    <Form.Control type="text" className="form-control" id="exampleInputDescription" placeholder="Description" />
                    </div>
                  </Form.Group>
                  <div className="template-demo">
                  <button type="submit" className="btn btn-primary btn-icon-text">
                        <i className="mdi mdi-file-check btn-icon-prepend"></i>
                        Submit
                  </button>
                  <button type="button" className="btn btn-dark btn-icon-text"  onClick={handleMenuClose}>
                        <i className="mdi mdi-close btn-icon-prepend"></i>                                                    
                        Close
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
            
				</Dialog>

          <ul className="navbar-nav navbar-nav-right">
            <div alignRight as="li" className="nav-item">
              <div as="a" className="nav-link no-caret">
                <div className="navbar-profile">
                  <img className="img-xs rounded-circle" src={require('../../assets/images/faces/aleksa.jpg')} alt="profile" />
                  <div className="template-demo">
                  <p className="mb-0 d-none d-sm-block navbar-profile-name"><Trans>Aleksa</Trans></p>
                  <small className="text-muted">[ Made Frontend ]</small>
                  </div>
                </div> 
              </div>
            </div>
          </ul>
          
          <ul className="navbar-nav navbar-nav-right">
            <div alignRight as="li" className="nav-item">
              <div as="a" className="nav-link no-caret">
                <div className="navbar-profile">
                  <img className="img-xs rounded-circle" src={require('../../assets/images/faces/Sladja.jpg')} alt="profile" />
                  <div className="template-demo">
                  <p className="mb-0 d-none d-sm-block navbar-profile-name"><Trans>Sladjana</Trans></p>
                  <small className="text-muted">[ Made Backend ]</small>
                  </div>
                </div> 
              </div>
            </div>
          </ul>
          
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={toggleOffcanvas}>
            <span className="mdi mdi-format-line-spacing"></span>
          </button>
        </div>
      </nav>
    );
}

export default Navbar;
