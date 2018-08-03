import React, { Component } from 'react'
import styles from './styles.scss'

class QuestionList extends Component {

    constructor() {
        super();
    }
    render() {
        return (
            <section className="faq-columns">
                    <h2 className="faq-heading">General</h2>
                    <ul className="column faq_column">
                        <li>
                            <div className="question">
                                What is Reflections | Projections?
                            </div>
                            <div className="answer">
                                Reflections | Projections is an annual technology conference organized and run by students at the University of Illinois at Urbana-Champaign, drawing students, speakers, and companies from around the world.
                            </div>
                        </li>
                        <li>
                            <div className="question">
                                Who can attend?
                            </div>
                            <div className="answer">
                                Reflections | Projections is free and open to anyone regardless of age, major, or affiliation with the University of Illinois. Come join a discussion led by some of the brightest minds in the business about the bleeding edge of the tech industry!
                            </div>
                        </li>
                        <li>
                            <div className="question">
                                Do I need to register?
                            </div>
                            <div className="answer">
                                Nope! But registering is the only way you'll be guaranteed a T-shirt. Registration coming soon!
                            </div>
                        </li>
                        <li>
                            <div className="question">
                                Is the conference free to attend?
                            </div>
                            <div className="answer">
                                Yes! Reflections | Projections is completely free to attend! This includes MechMania and other events.
                            </div>
                        </li>
                        <li>
                            <div className="question">
                                Will food be provided?
                            </div>
                            <div className="answer">
                                All food at the conference will be free for registered attendees.
                            </div>
                        </li>
                        <li>
                            <div className="question">
                                I'm a company! I have questions!
                            </div>
                            <div className="answer">
                                Please email us at <a href="mailto:rp-corporate-l@acm.illinois.edu">rp-corporate-l@acm.illinois.edu</a>.
                            </div>
                        </li>
                        <li>
                            <div className="question">
                                I want to volunteer! How do I get involved?
                            </div>
                            <div className="answer">
                                Please email us at <a href="mailto:conference-chair@acm.illinois.edu">conference-chair@acm.illinois.edu</a>.
                            </div>
                        </li>
                        <li>
                            <div className="question">
                                Interested in writing a blog post?
                            </div>
                            <div className="answer">
                                Have a look at the <a href="https://github.com/ReflectionsProjections/blog/blob/master/README.md">README</a> for our <a href="https://github.com/ReflectionsProjections/blog">GitHub repository</a>!
                            </div>
                        </li>
                    </ul>
                    <h2 className="faq-heading">Events</h2>
                    <ul className="column faq_column">
                        <li>
                            <div className="question">
                                What's the difference between Tech Talks and Speaker Talks?
                            </div>
                            <div className="answer">
                                Tech Talks are given by sponsor representatives who wish to spotlight their company and talk about new products/technologies. Speaker Talks are given by experts in the tech community and are about specific technical or personal topics.
                            </div>
                        </li>
                        <li>
                            <div className="question">
                                What's the difference between the Startup Fair and the Career Fair?
                            </div>
                            <div className="answer">
                                The Startup Fair is for startup companies, and the Career Fair is for established companies.
                                The difference between startup and established companies is determined by conference staff.
                            </div>
                        </li>
                        <li>
                            <div className="question">
                                Do I need to register for MechMania?
                            </div>
                            <div className="answer">
                                Yes! Keep an eye out for our MechMania tab for competition registration! Coming soon.
                            </div>
                        </li>
                        {/* <li>
                            <div className="question">
                                For more information…
                            </div>
                            <div className="answer">
                                You can find out more about us on our website! Please feel free to reach out with questions or comments to <a href="mailto:conference-chair@acm.illinois.edu">conference-chair@acm.illinois.edu</a>!
                            </div>
                        </li> */}
                    </ul>
                    <h2 className="faq-heading">Travel</h2>
                    <ul className="column faq_column">
                        <li>
                            <div className="question">
                                Coming from Willard Airport
                            </div>
                            <div className="answer">
                                Willard Airport is located south of UIUC. If driving, head north from the airport on the 45 and turn right onto Springfield – you'll soon find yourself on UIUC campus! Alternatively, you can catch a cab from the airport to the building.
                            </div>
                        </li>
                        <li>
                            <div className="question">
                                Coming from Amtrak Station
                            </div>
                            <div className="answer">
                                Siebel Center is located 1 mile from the Champaign Amtrak Station. Most buses will take you to campus. The 1S/100S and 12E/120E run every few minutes. Ride one of these buses to the intersection of Wright St and White St, then walk east on Stoughton and you will find yourself at the Siebel Center!
                            </div>
                        </li>
                        <li>
                            <div className="question">
                                Getting around the U of I campus
                            </div>
                            <div className="answer">
                                Most amenities are available within walking distance of the Siebel Center. However, if walking isn't for you then Champaign-Urbana's public transit system can take you where you need to go. Routes can be mapped using Google Maps or the CUMTD app and each ride will cost you $1. No change is given on the buses, so bring exact fare with you!
                            </div>
                        </li>
                    </ul>
            </section>
        );
    }
}

export default QuestionList
