import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {setAlert} from '../../actions/alert';
import {connect} from 'react-redux';
import Navbar from './Navbar';


const Landing= (props)=> {
    
    if(props.isAuthenticated){
        return <Redirect to='/dashboard' />
    }
    
    if(! props.isAuthenticated && props.loading){
        return <div className="container">loading...</div>
    }
   
    return(
        <div className="landing">
          <Navbar />
          <div className="dark-overlay">
            <div className="landing-inner">
              <h1 className="x-large">E-Ticket</h1>
              <p className="lead">
                Create an event and posts and comments and you can book tickets to attend events
              </p>
              <div className="buttons">
                <Link to="/register" className="btn btn-primary">Sign Up</Link>
                <Link to="/loginprivilege" className="btn btn-light">Login</Link>
              </div>
            </div>
          </div>
        </div>
)}


const mapStateToProps = state => ({
  isAuthenticated: state.auth_reducer.isAuthenticated,
  loading:state.auth_reducer.loading
});

export default connect(mapStateToProps,{setAlert})(Landing);

