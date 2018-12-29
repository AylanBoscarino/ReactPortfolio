import React from 'react';

export default function Services() {
    return (
        <section className="section" id="services">
            <div className="section-heading">
                <h3 className="title is-2">Services</h3>
                <h4 className="subtitle is-5">What can I do for you?</h4>
            </div>
            <br />
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div className="box">
                            <div className="content">
                                <h4 className="title is-5">
                                    Front End Web Development
                                </h4>
                                Develop Front End using latest standards with
                                HTML5/CSS3 with added funtionality using
                                JavaScript and React.js with Redux.
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <div classNameName="content">
                                <h4 className="title is-5">
                                    Back End Web Development
                                </h4>
                                Develop Back End application/service using
                                Node.js or PHP Laravel and MySQL or Mongo DB
                                databases.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <div className="box">
                            <div className="content">
                                <h4 className="title is-5">
                                    Mobile Development
                                </h4>
                                Develop mobile native applications using the
                                React Native framework as well with some support
                                libraries like Redux.
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <div className="content">
                                <h4 className="title is-5">
                                    Software Management
                                </h4>
                                I have experience managing legacy PHP and
                                Javascript applications ensuring that it
                                continues working for as long as needed as well
                                as creating new system to substitute a legacy
                                one that is not optimal anymore.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
