import React, { Component } from "react";




export default class About extends Component {
    render() {
        let resumeData=this.props.resumeData;
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        
                            <img className="profile-pic" src="../images/Colton.jpg" alt="Colton" />
                        
                    </div>
                    
                    <div className="nine columns main-col">
                        <div className="aboutHeader">About Me:</div>
                        <div className="aboutMe">
                        <p>Let me tell you a little bit about myself: I am a hard worker, determined and love to live a positive life.




                       I currently work as a Data Center Operations Manager at DataBank, located in Utah.


                       I am a self trained IT Professional, currently studying towards various industry standard certifications. With over 10 years of Data Center and Management experience, I am capable of problem solving, delivering quality results, and grooming exemplary technicians. What does this mean for you? Well, these skills would be used


                       assisting in creating long lasting customer relationships and efficient Data Centers; which is how expectations would be exceeded


                       at your company.</p>






                       <p>I am also a very fun, upbeat, creative individual that create a positive environment and put a smile on anyone’s


                           face. I feel I would be a great asset to your company.</p>


                       <p>I would love to hear from you! Let's t


                        <p>I would love to hear from you! Let's talk!</p>

                        </div>
                        <div className="row">
                            <div className="columns contact-details">
                                <div className="contactHeader">Contact Details:</div>
                                    <div className="contact-wigdet">
                                        <div className="emailContact"><span className="icons"><i class="far fa-envelope"></i></span>Email: shakeca@gmail.com</div>
                                        <div className="phoneContact"><span className="icons"><i class="fas fa-phone"></i></span>Phone: 385.210.5739</div>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
