/*
  NAVIGATION COMPONENT ON SIDE

  NOT CURRENTLY IN USE OR PLANNED TO BE IN USE. KEPT IN CASE NEEDED FOR AESTHETIC APPEAL


*/

import React, { Component } from 'react'

import styles from './registerNav.scss'

class RegisterNav extends Component {
  render() {
    // Variables setup
    const step = this.props.step


    return(
      <ul className="navBar">
        <li className={ step == 0 ? 'active' : null}>
          <div className="nav_title">
            GENERAL INFORMATION
          </div>
        </li>
        <li className={ step == 1 ? 'active' : null}>
          <div className="nav_title">
            PROFESSIONAL INFORMATION
          </div>
        </li>
        <li className={ step == 2 ? 'active' : null}>
          <div className="nav_title">
            CODE OF CONDUCT
          </div>
        </li>
      </ul>
    )
  }
}

export default RegisterNav
