import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import background from '../img/dg1.jpg';
// import background1 from '../img/examples/office2.jpg';
// import background2 from '../img/examples/card-blog3.jpg';
import background3 from '../img/examples/card-project6.jpg';
import face1 from '../img/faces/card-profile1-square.jpg';
import face2 from '../img/faces/card-profile2-square.jpg';
import face3 from '../img/faces/card-profile4-square.jpg';
import face4 from '../img/faces/card-profile6-square.jpg';
import { Phone, PinDrop } from '@material-ui/icons';


//navigation bar
import Navigation from './navbar/Navbar';
import FullWidthTabs from './Tabs'






// import { makeStyles, createStyles } from '@material-ui/core/styles';

export default class index extends Component {


  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_33qbo66', 'template_af256wy', e.target, 'user_uL2C0Mc7JfAqOSBxda8gJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }


    render() {
        return (
            <div>
                <div className="header-1">
        {/* <nav className="navbar navbar-transparent navbar-absolute fixed-top navbar-expand-lg">
            <div className="container">
              <div className="navbar-translate">
                <a className="navbar-brand" href="digitalumuganda.com">Digital Umuganda</a>
                <button type="button" className="ml-auto navbar-toggler" data-toggle="collapse" data-target="#navigation-example3">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="navigation-example3">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a href="#du" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#du" className="nav-link">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#du" className="nav-link">
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#du" className="nav-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav> */}
        <div className="page-header header-filter" style={{backgroundImage: `url(${background})`}} >
                <div className=".nav-cont">
          <Navigation className="navnav"/>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h5 className="font-weight-bold">AI POWERED INFRASTRUCTURE</h5>
                <h1 className="title">Digital Umuganda.</h1>
                <h4>Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h4>
                <br />
                <a href="https://www.youtube.com/channel/UChuGfNrDM0j9DqnLDgXmzcA" rel="noopener" target="blank" className="btn btn-danger btn-lg"  >
                  <i className="fa fa-ticket"></i> Get Started
                </a>
              </div>
              <div className="col-md-5 ml-auto">
                <div className="iframe-container">
                  <iframe height="250" src="https://www.youtube.com/embed/YihNXFj-n2Q?feature=oembed" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen="" title="youtube video"></iframe>
                </div>
              </div>
          </div>
          </div>
          </div>
        </div>
      </div>

    {/* <!-- PROJECT --> */}
    <div className="projects-1" id="projects-1">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
                <h2 className="text-muted">Our work</h2>
                <h3 className="title">Our Awesome Projects</h3>
              {/* <ul className="nav nav-pills nav-pills-rose">
                <li className="nav-item">
                  <a className="nav-link active" href="#pill1" data-toggle="tab">All</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pill2" data-toggle="tab">Mbaza AI</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pill3" data-toggle="tab">Data Collection</a>
                </li>
              </ul>
              <div className="tab-content tab-space">
                <div className="tab-pane active" id="pill1">
                </div>
                <div className="tab-pane" id="pill2">
                </div>
                <div className="tab-pane" id="pill3">
                </div>
              </div> */}
      <FullWidthTabs />
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-6">
              <div className="card card-raised card-background" style={{backgroundImage: `url(${background1})`}}>
                <div className="card-body">
                  <h6 className="card-category text-info">Mbaza AI</h6>
                    <h3 className="card-title">The Best Productivity Apps on Market</h3>
                  <p className="card-description">
                    Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
                  </p>
                  <a href="#du" className="btn btn-danger btn-round">
                  <i className="fa fa-wrench"></i> View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-raised card-background" style={{backgroundImage: `url(${background2})`}}>
                <div className="card-body">
                  <h6 className="card-category text-info">Data Collection</h6>
                  <h3 className="card-title">The Sculpture Where Details Matter</h3>
                  <p className="card-description">
                    Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
                  </p>
                  <a href="collection.html" className="btn btn-info btn-round">
                  <i className="fa fa-wrench"></i> View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card card-raised card-background" style={{backgroundImage: `url(${background3})`}}>
                <div className="card-body">
                  <h6 className="card-category text-info">Mbaza AI</h6>
                  <h3 className="card-title">0 to 100.000 Customers in 6 months</h3>
                  <p className="card-description">
                    Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....
                  </p>
                  <a href="#du" className="btn btn-warning btn-round">
                  <i className="fa fa-wrench"></i> View Project
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

    {/* <!-- TEAM -->  */}
    <div className="team-3">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
                <h2 className="text-muted">Our Team</h2>
                <h3 className="title">The Core Team</h3>
              <h5 className="description">Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card card-profile card-plain">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card-header card-header-image">
                      <a href="#du">
                        <img className="img" src={face1} alt="Face 1"/>
                      </a>
                    <div className="colored-shadow" style={{backgroundImage: `url(${background3})`, opacity: "1"}}></div></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title">Audace Niyonkuru</h4>
                      <h6 className="card-category text-muted">Founder & CEO</h6>
                      <p className="card-description">
                        Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="#du" className="btn btn-just-icon btn-link btn-twitter"><i className="fa fa-twitter"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-facebook"><i className="fa fa-facebook-square"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-google"><i className="fa fa-google"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-profile card-plain">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card-header card-header-image">
                      <a href="#du">
                        <img className="img" src={face2} alt="face 2"/>
                      </a>
                    <div className="colored-shadow" style={{backgroundImage: `url(${background})`, opacity: "1"}}></div></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title">Ali Niyonzima</h4>
                      <h6 className="card-category text-muted">Founder & COO</h6>
                      <p className="card-description">
                        Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="#du" className="btn btn-just-icon btn-link btn-linkedin"><i className="fa fa-linkedin"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-facebook"><i className="fa fa-facebook-square"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-dribbble"><i className="fa fa-dribbble"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-google"><i className="fa fa-google"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-profile card-plain">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card-header card-header-image">
                      <a href="#du">
                        <img className="img" src={face3} alt="face 3"/>
                      </a>
                    <div className="colored-shadow" style={{backgroundImage: `url(${background})`, opacity: "1"}}></div></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title">Eseza Muwanga</h4>
                      <h6 className="card-category text-muted">Software Engineer & Team Lead</h6>
                      <p className="card-description">
                        Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="#du" className="btn btn-just-icon btn-link btn-youtube"><i className="fa fa-youtube-play"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-twitter"><i className="fa fa-twitter"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-instagram"><i className="fa fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-profile card-plain">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card-header card-header-image">
                      <a href="#du">
                        <img className="img" src={face4} alt="face 3"/>
                      </a>
                    <div className="colored-shadow" style={{backgroundImage: `url(${background})`, opacity: "1"}}></div></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title">Samuel Rutunda</h4>
                      <h6 className="card-category text-muted">Software Engineer</h6>
                      <p className="card-description">
                        Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="#du" className="btn btn-just-icon btn-link btn-linkedin"><i className="fa fa-linkedin"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-facebook"><i className="fa fa-facebook-square"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-google"><i className="fa fa-google"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-profile card-plain">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card-header card-header-image">
                      <a href="#du">
                        <img className="img" src={face4} alt="face 3"/>
                      </a>
                    <div className="colored-shadow" style={{backgroundImage: `url(${background})`, opacity: "1"}}></div></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title">Samuel Rutunda</h4>
                      <h6 className="card-category text-muted">Software Engineer</h6>
                      <p className="card-description">
                        Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="#du" className="btn btn-just-icon btn-link btn-linkedin"><i className="fa fa-linkedin"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-facebook"><i className="fa fa-facebook-square"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-google"><i className="fa fa-google"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-profile card-plain">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card-header card-header-image">
                      <a href="#du">
                        <img className="img" src={face4} alt="face 3"/>
                      </a>
                    <div className="colored-shadow" style={{backgroundImage: `url(${background})`, opacity: "1"}}></div></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title">Samuel Rutunda</h4>
                      <h6 className="card-category text-muted">Software Engineer</h6>
                      <p className="card-description">
                        Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="#du" className="btn btn-just-icon btn-link btn-linkedin"><i className="fa fa-linkedin"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-facebook"><i className="fa fa-facebook-square"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-google"><i className="fa fa-google"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-profile card-plain">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card-header card-header-image">
                      <a href="#du">
                        <img className="img" src={face4} alt="face 3"/>
                      </a>
                    <div className="colored-shadow" style={{backgroundImage: `url(${background})`, opacity: "1"}}></div></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title">Samuel Rutunda</h4>
                      <h6 className="card-category text-muted">Software Engineer</h6>
                      <p className="card-description">
                        Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="#du" className="btn btn-just-icon btn-link btn-linkedin"><i className="fa fa-linkedin"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-facebook"><i className="fa fa-facebook-square"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-google"><i className="fa fa-google"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-profile card-plain">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card-header card-header-image">
                      <a href="#du">
                        <img className="img" src={face4} alt="face 3"/>
                      </a>
                    <div className="colored-shadow" style={{backgroundImage: `url(${background})`, opacity: "1"}}></div></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title">Samuel Rutunda</h4>
                      <h6 className="card-category text-muted">Software Engineer</h6>
                      <p className="card-description">
                        Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="#du" className="btn btn-just-icon btn-link btn-linkedin"><i className="fa fa-linkedin"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-facebook"><i className="fa fa-facebook-square"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-google"><i className="fa fa-google"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-profile card-plain">
                <div className="row">
                  <div className="col-md-5">
                    <div className="card-header card-header-image">
                      <a href="#du">
                        <img className="img" src={face4} alt="face 3"/>
                      </a>
                    <div className="colored-shadow" style={{backgroundImage: `url(${background})`, opacity: "1"}}></div></div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h4 className="card-title">Samuel Rutunda</h4>
                      <h6 className="card-category text-muted">Software Engineer</h6>
                      <p className="card-description">
                        Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum...
                      </p>
                    </div>
                    <div className="card-footer">
                      <a href="#du" className="btn btn-just-icon btn-link btn-linkedin"><i className="fa fa-linkedin"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-facebook"><i className="fa fa-facebook-square"></i></a>
                      <a href="#du" className="btn btn-just-icon btn-link btn-google"><i className="fa fa-google"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CONTACT --> */}
    <div className="pricing-5 section-gray" id="pricing-5">
    <div className="container">
        <div className="row">
        <div className="col-md-4">
            <h2 className="title">Contact us for your next project</h2>
            <ul className="nav nav-pills nav-pills-primary">
            <li className="nav-item">
                <a className="nav-link active" href="#normal" data-toggle="tab">Normal</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#zamad" data-toggle="tab">Zamad</a>
            </li>
            </ul>
            <p className="text-gray">Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className="col-md-7 ml-auto mr-auto">
            <div className="tab-content tab-space">
            <div className="tab-pane active" id="normal">
                <div className="card card-contact card-raised">
                    {/* <form id="contact-form2" method="post" onSubmit={this.sendEmail}> */}
                        <div className="card-header card-header-rose text-center">
                        <h4 className="card-title">Contact Us</h4>
                        </div>
                        <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="info info-horizontal" style={{padding: "0"}}>
                                <div className="icon icon-rose">
                                <Phone style={{ fontSize: 40 }}/>
                                </div>
                                <div className="description">
                                <h5 className="info-title">Give us a ring</h5>
                                <p> Ali Niyonzima
                                    <br /> +40 762 321 762
                                    <br /> Mon - Fri, 8:00-22:00
                                </p>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="info info-horizontal" style={{padding: "0"}}>
                                <div className="icon icon-rose">
                                <PinDrop style={{ fontSize: 40 }}/>
                                </div>
                                <div className="description">
                                <h5 className="info-title">Find us at the office</h5>
                                <p> Kimihurura Kimihurura Kimihurura,
                                    <br /> KG XXX Kigali,
                                    <br /> Rwanda
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-md-6">
                            <div className="form-group label-floating is-empty has-rose bmd-form-group">
                                <label className="bmd-label-floating" ></label>
                                <input type="text" name="name" className="form-control" placeholder="Full Name"/>
                                <span className="material-input"></span>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group label-floating is-empty has-rose bmd-form-group">
                                <label className="bmd-label-floating"></label>
                                <input type="email" name="email" className="form-control"  placeholder="Email address"/>
                                <span className="material-input"></span>
                            </div>
                            </div>
                        </div> */}
                        {/* <div className="form-group label-floating has-rose is-empty bmd-form-group">
                            <label for="exampleMessage" className="bmd-label-floating" ></label>
                            <textarea name="message" className="form-control" id="exampleMessage" rows="6" placeholder="Your Message"></textarea>
                            <span className="material-input"></span>
                        </div> */}
                        </div>
                        {/* <div className="card-footer justify-content-between">
                        <div className="form-check">
                            <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" value="" /> I'm not a robot
                            <span className="form-check-sign">
                                <span className="check"></span>
                            </span>
                            </label>
                        </div>
                        <button type="submit" className="btn btn-rose pull-right" >Send Message</button>
                        </div> */}
                    {/* </form> */}
                    



                        <div className="container">
                          <form onSubmit={this.sendEmail}>
                              <div className="row pt-5 mx-auto">
                              <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="name" />
                              </div>
                              <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email address" name="email" />
                              </div>
                              <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject" />
                              </div>
                              <div className="col-8 form-group pt-2 mx-auto">
                                <textarea id="" cols="30" rows="8" className="form-control" placeholder="Your message" name="message" />
                              </div>
                              <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="Send message" />
                              </div>
                              </div>
                          </form>
                        </div>












                    </div>
                </div>
            <div className="tab-pane" id="zamad">
                {/* <!-- Zamad contact form --> */}
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>

    {/* <!-- FOOTER --> */}
    <footer className="footer bg-dark">
        <div className="container">
          <div className="copyright text-white">
            &copy;{new Date().getFullYear()} Digital Umuganda | All Rights Reserved.
          </div>
        </div>
      </footer>
            </div>
        )
    }
}
