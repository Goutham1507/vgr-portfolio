import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer Intern at Amazon <span>June 2019- Decemeber 2019</span></h2>
                        <ul><b>Software Engineer Intern</b>
                          <li>Modified multiple systems, each in a different language, to enable Secure Delivery to support the retail website customers in Germany to receive packages that were statistically shown would have resulted in a missing package</li>
                          <li>Removed country specific code and made it more agonistic to enable new countries without code changes</li>
                          <li>Refactored notifications to remove hard coded text and pull from a localization service to enable text changes without code deploys</li>
                          <li>Used Native AWS services to create new rules to drive recommendations in Secure Delivery features that resulted in an annual savings </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at Unisys <span>July 2016 - August 2018</span></h2>
                        <ul><b>Software Engineer</b>
                        <li>Developed an end to end application which interacts with hardware modules, which outruns the existing application by 3 times</li>
                        <li>Coordinated with quality assurance and support teams to fix any application defects</li>
                        <li>Utilized Spring boot for creating RESTful services for client and server interactions</li>
                        <li>Experienced in employing test-driven development using JUnit and maintained 95% code coverage</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer Intern at Unisys <span>January 2016 - July 2016</span></h2>
                        <ul><b>Software Engineer Intern</b>
                        <li>Designed a mobile responsive robust web application with an end goal of enabling customers to book, update or cancel appointments with the bank</li>
                        <li>Implemented JavaScript client-side functions for custom validators</li>
                        <li>Improved the user interface of existing web applications by reducing the number of clicks by 10%</li>
                        <li>Enforced test-driven development in all the phases with 100% functional coverage</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Education <span>June 2012- May 2016</span></h2>
                        <p>I have completed my Bachelors in Electrical and Computer engineering  from <b>VIT University</b> with major subjects as Object-oriented programming, Computer organization and architecture, Computer Networks. During my time at school, I have developed interest in solving complex problems using technology which helped me to improve my analytical and problem solving skill.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
