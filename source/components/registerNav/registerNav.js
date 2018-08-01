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
            PERSONAL INFORMATION
          </div>
        </li>
        <li className={ step == 1 ? 'active' : null}>
          <div className="nav_title">
            PROFESSIONAL INFORMATION
          </div>
        </li>
        <li className={ step == 2 ? 'active' : null}>
          <div className="nav_title">
            TEAM
          </div>
        </li>
        <li className={ step == 3 ? 'active' : null}>
          <div className="nav_title">
            CODE OF CONDUCT
          </div>
        </li>
        <li className={ step == 4 ? 'active' : null}>
          <div className="nav_title">
            OPTIONAL INFORMATION
          </div>
        </li>
      </ul>
    )
  }
}

export default RegisterNav
