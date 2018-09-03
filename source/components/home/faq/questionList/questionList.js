import React, { Component } from 'react'
import styles from './styles.scss'

class QuestionList extends Component {

    constructor() {
        super();
        this.scrollToTagWithId = this.scrollToTagWithId.bind(this);
    }

    /*
        Scrolls to the element specified by the given id.
        Note: `id`s are unique.
    */
    scrollToTagWithId(id) {
        let element = document.getElementById(id);
        let targetScrollHeight = element.offsetTop;
        window.scrollTo(0, targetScrollHeight);
    }

    render() {
        return (
            <section className="faq-columns">
                    <h2 className="faq-heading">General</h2>
                    <ul className="column">
                        <li>
                            <div className="question">
                                What is Reflections | Projections?
                            </div>
                            <div className="answer">
                                Reflections | Projections is an annual technology conference organized and run by students at the University of Illinois at Urbana-Champaign, drawing students, speakers, and companies from around the world. The conference features speaker talks, workshops, career and startup job fairs, a hackathon, and more!
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
                                When should I come?
                            </div>
                            <div className="answer">
                                Check out the posted <a onClick={() => this.scrollToTagWithId("Schedule")}>R|P schedule</a>! You don’t have to attend every event, but be sure to stop by the events you are most interested in!
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
                                A large variety of meals, snacks, and drinks will be provided throughout the week, that will be free for registered attendees. If you have a dietary restriction, please mention it in the online registration that will be released in Fall 2018.
                            </div>
                        </li>
                        <li>
                            <div className="question">
                                What should I bring?
                            </div>
                            <div className="answer">
                                You don’t need to bring anything in particular. It mainly depends on the events you will be attending. If you plan to compete in our AI hackathon, MechMania, you should bring a laptop. If you want to talk to companies at the career fair, you should bring a couple copies of your resume. We will not print résumés.
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
                                Please fill out our volunteer form <a href="/volunteer" target ="_blank">here</a>.
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
                    <ul className="column">
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
                    </ul>
                    <h2 className="faq-heading">Travel</h2>
                    <ul className="column">
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
                    <h2 className="faq-heading">Attendee Gas Reimbursements</h2>
                    <ul className="column">
                        <li>
                            <div className="question">
                                How do I ask for a reimbursement?
                            </div>
                            <div className="answer">
                              The registration form has a transportation question that asks the user how they intend on getting to campus. Simply select the "Driving and will need Gas Reimbursements" option to ask for a reimbursement.
                              Please note that we are only offering reimbursements to the first <strong>200</strong> attendees that ask for one.
                            </div>
                        </li>
                        <li>
                            <div className="question">
                                How much will I be reimbursed?
                            </div>
                            <div className="answer">
                              The amount varies depending on where you are driving from:
                            </div>
                            <div className="answer">
                                <ul>
                                  <li><strong> $15 </strong> per attendee if location is beyond 160 miles </li>
                                  <li><strong> $10 </strong> per attendee if location is between 60 and 160 miles </li>
                                  <li><strong> $5  </strong> per attendee if location is within 60 miles of campus </li>
                                </ul>
                            </div>
                            <div className="answer">
                                All distances are as the crow flies and R|P staff has the final say on which radius level your departure location falls in.
                                Note that these numbers are per attendee to incentivize attendees to carpool.
                            </div>
                        </li>
                        <li>
                            <div className="question">
                                How will I know if I'm within the first 200 people to sign up for a reimbursement?
                            </div>
                            <div className="answer">
                                Assuming you have registered, we will send you an email by September 17th notifying you of your status. If you register after that date, we will do our best to notify you as soon as possible but cannot guarantee immediate confirmation.
                            </div>
                        </li>
                        <li>
                            <div className="question">
                                How do I collect my reimbursement?
                            </div>
                            <div className="answer">
                                We will hold a gas reimbursements booth on both Friday and Saturday. You must have explicitly requested reimbursements on your registration to be given money.
                                You MUST have your School ID as proof that you are from the school you claim to be from.
                                We will be reimbursing via Venmo and cash.
                            </div>
                        </li>
                    </ul>
            </section>
        );
    }
}

export default QuestionList
