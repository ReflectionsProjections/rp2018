import React, { Component } from 'react'
import { Grid, Container, Segment, Responsive, Image} from 'semantic-ui-react';

import styles from './dashboardEvents.scss'
import moment from 'moment'
import axios from 'axios';

export default class DashboardEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: {},
      upcomingEvent: [],
      currentEvent: []
    };
  };

  componentWillMount() {
    this.getEventData();
  };

  componentDidMount() {
    setInterval(() => {
      this.getEventData();
    }, 600000);
  }

  upcomingEvents(event) {
    return (event.startTime > currentTime);
  }

  getEventData = () => {
    // axios.get("https://api.reflectionsprojects.org/event/")
    // .then(response => {
    //   const data = response.data.data;
    //   let locations = {};
    //   data.map(location => {
    //     const id = location['id'];
    //     const name = location['name'];
    //     locations[id] = name
    //   });
    //   this.setState({locations: locations});
    // })
    // .catch(error => {
    //   console.log(error);
    // });

    axios.get("https://api.reflectionsprojections.org/event/")
    .then(response => {
      const currentTime = new Date();
      const data = response.data.events;
      console.log(data);

      // filter events
      let currentEvent = data.filter(event => new Date(event.startTime*1000) < currentTime && new Date(event.endTime*1000) > currentTime && event.name != "Example Event 2" && event.name != "Corporate Social");
      console.log("BREAK");
      let upcomingEvent = data.filter((event) => (event.startTime*1000) > currentTime && event.name != "Corporate Social");


      currentEvent.sort(function(a, b) {
          return new Date(a.startTime) - new Date(b.startTime)
      });

      upcomingEvent.sort(function(a, b) {
          return new Date(a.startTime) - new Date(b.startTime)
      });

      this.setState({currentEvent: currentEvent, upcomingEvent: upcomingEvent});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const {currentEvent, upcomingEvent, locations} = this.state;

    //console.log("Events" + upcomingEvent);
    return (
      <Segment textAlign="center" className="eventsContainer">
        <div className="eventsTitle">
          HAPPENING NOW
        </div>
        {
          currentEvent.length == 0 ?
            <Segment basic textAlign="left" className="cellContainer">
              <div className="cellTitle">
                No events
              </div>
              <div className="cellLocation">

              </div>
            </Segment>

          :
          currentEvent.map((event, index) => {
            return(
              <Segment key={index} basic textAlign="left" className="cellContainer">
                <div className="cellTitle">
                  {event.name}
                </div>
                {
                  moment(event.endTime *1000).format('hh:mm a') + " @ " + (event.name == "Startup Fair" ? "Siebel Atrium" : "Siebel Center 2405")
                }
              </Segment>

            )
          })
        }
        <div className="eventsTitle">
          UPCOMING
        </div>
        {
          upcomingEvent.length == 0 ?
            <Segment basic textAlign="left" className="cellContainer">
              <div className="cellTitle">
                No events
              </div>
              <div className="cellLocation">

              </div>
            </Segment>
          :
          upcomingEvent.map((event, index) => {
            return(
              <Segment key={index} basic textAlign="left" className="cellContainer">
                <div className="cellTitle">
                  {event.name}
                </div>
                <div className="cellLocation">
                {
                    moment(event.startTime *1000).format('hh:mm a') + " @ " + (event.name == "Startup Fair" ? "Siebel Atrium" : "Siebel Center 2405")
                                  /*  event.locations.map((location, index) => {
                    const divider = index != event.locations.length - 1 ? " | ": "";
                    return this.state.locations[location.locationId] + divider
                  })*/

                }
                </div>
              </Segment>
            )
          })
        }
      </Segment>
    )
  }

}
