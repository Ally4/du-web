import React, { Component } from 'react';
import 'react-jquery-plugin';

export default class index extends Component {

    state={
        showCard: false
    }

    handleclick= () => {
        this.setState({
            showCard:!this.state.showCard   // if I us showCard:true it will display and stay there
        });
    }

    render() {

        // const styles = this.state.showCard?{display:'block'}:{display:'none'};

        return (
            <div>

{/* <head>
    <meta charset="UTF-8"> */}
    <title>Simple Recorder</title>
    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./main.css">
    <link rel="stylesheet" href="./node_modules/bootstrap-icons/font/bootstrap-icons.css">
</head> */}

    {/* Full Page Intro  */}
    <div className="view">

        <div className="mask gradient-card align-items-center">
             {/* Content  */}
            <div className="container d-flex justify-content-center">
                <div id="mobile-box">
                    <h3 className="my-5 h5 text-center" style={{color:"rgb(235, 232, 234)"}}>Simple Recorder <i
                            className="bi bi-file-play-fill"></i>
                    </h3>
                    <div id="controls">
                        <button id="recordButton" type="button" className="btn btn-primary btn-sm"
                            data-bs-toggle="button">Record</button>
                        <button id="stopButton" type="button" className="btn btn-danger btn-sm" disabled>Finish</button>
                    </div>
                    <div id="formats">Format: start recording to see sample rate</div>
                    <div style={{visibility: "hidden;"}} id="displayContent">
                        <div className="card">
                            <div>
                                <img className="card-img-top"
                                    src="./images/b4efb6c6682b2a808631bf8fbd96d015-sound-wave-icon-by-vexels.png"
                                    alt="Card image cap" />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="h5 font-weight-bold"><a id="audioLink" href="">Dj Flam</a></h5>
                                <div id="recordedArea"></div>
                                <div className="row">
                                    <br />
                                </div>
                                <button id="Transilate" type="button" className="btn btn-primary btn-sm"
                                    data-bs-toggle="button" onClick={this.handleclick}>
                                    Transilate
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                        </div>
                    </div>
  {                  
      this.state.showCard && <div id="transilatedAudio">
                        <div className="card">
                            <div className="card-body">
                                <figure className="text-center">
                                    <blockquote className="blockquote">
                                        <p>A well-known quote, contained in a blockquote element.</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div> }
                    <div className="row">
                        <br /><br />
                    </div>
                </div>
            </div>
             {/* Content  */}
        </div>

        <div className="overlay show"></div>
        <div className="spanner show">
            <div className="loader"></div>
            {/* <p>Please be patient, we are setting up everthing for you. {.. <i
                className="bi bi-emoji-heart-eyes"></i> ..}</p> */}
        </div>
        
    </div>
    {/* <script src="./node_modules/jquery/dist/jquery.min.js" type="text/javascript"></script> */}
    <script src="./js/recorder.js"></script>
    <script src="./js/app.js"></script>
            </div>
        )
    }
}
