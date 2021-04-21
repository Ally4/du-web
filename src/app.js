// import "./App.scss";
// import React, { useEffect } from "react";
// import spinner from "./assets/spinner.png";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// // import { Parallax } from "react-parallax";
// import "react-slideshow-image/dist/styles.css";
// import { Slide } from "react-slideshow-image";
// import Aos from "aos"; 
// import "aos/dist/aos.css"

// // import image1 from "./assets/serrah-galos-bVMnhNOfFCo-unsplash.jpg";
// // import pic1 from "./assets/digital1.jpeg";
// import giz from "./assets/giz.jpeg";
// import ralc from "./assets/ralc.jpeg";
// import voice from "./assets/Common_Voice_Banner2.png";
// import robot from "./assets/robot.png";
// import robot1 from "./assets/code.png";
// import robot2 from "./assets/ai.png";
// import robot3 from "./assets/chip.png";
// import robot4 from "./assets/robot2.png";
// import robot5 from "./assets/africa3.png";
// // import sound from "./assets/sound.png";
// import sound1 from "./assets/seo.png";
// import robot6 from "./assets/technical-support.png";
// import contact from "./assets/contact.svg";


// // import { UncontrolledCarousel } from 'reactstrap';
// // import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // import { Container } from 'reactstrap';

// // import Rasa from './components/rasa';



// import DeepSpeech from './components/deeepspeech/index';




// function App() {

//   useEffect(() => {
//     Aos.init({duration: 2000 })
//   }, [])



//   // const items = [
//   //   {
//   //     src: {giz},
//   //     altText: 'Slide 1',
//   //     caption: 'Slide 1',
//   //     header: 'Slide 1 Header',
//   //     key: '1'
//   //   },
//   //   {
//   //     src: {ralc},
//   //     altText: 'Slide 2',
//   //     caption: 'Slide 2',
//   //     header: 'Slide 2 Header',
//   //     key: '2'
//   //   },
//   //   {
//   //     src: {voice},
//   //     altText: 'Slide 3',
//   //     caption: 'Slide 3',
//   //     header: 'Slide 3 Header',
//   //     key: '3'
//   //   }
//   // ];




// //   let settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     cssEase: "linear"
// // }






//   return (
//     <div className="App">


//       <div className="navigation">
//   <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
//     <label for="navi-toggle" className="navigation__button">
//       <span className="navigation__icon">&nbsp;</span>
//     </label>
//       <div className="navigation__background">&nbsp;</div>
//         <nav className="navigation__nav">
//           <ul className="navigation__list">
//             <li className="navigation__item"><a href="#home__id" className="navigation__link"> HOME</a></li>
//             <li className="navigation__item"><a href="#projects__id" className="navigation__link"> PROJECTS</a></li>
//             <li className="navigation__item"><a href="#team__id" className="navigation__link"> TEAM</a></li>
//             <li className="navigation__item"><a href="#partner__id" className="navigation__link"> PARTNERS</a></li>
//             <li className="navigation__item"><a href="#contact__id" className="navigation__link"> CONTACT</a></li>
//           </ul>
//         </nav>
// </div>



//       {/* <Parallax bgImage={image1} strength={500}> */}
//         <div className="about" id="home__id">
//           <h1 className="about__description title">
//             {" "}
//             Digital umuganda
//           </h1>
//           <div className="about__description--parapic">
//             <p className="about__description--paragraph">
//               {/* Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's . */}
//             </p>
//             {/* <img
//               className="about__description--pic"
//               src={pic1}
//               alt="pic intro"
//             /> */}
//           </div>
//           <img
//             className="about__description--spinner"
//             src={spinner}
//             alt="spinner"
//           />
//         </div>
//       {/* </Parallax> */}



//     {/* <Container> */}

//     <div className="container">


//       <div className="projects" id="projects__id">
//         <h1 className="projects__description title">PROJECTS</h1>
//         <img src={robot} className="projects__description__background robot" alt="robot"></img>
//         <img src={sound1} className="projects__description__background sound1" alt="sound1"></img>
//         <img src={robot1} className="projects__description__background robot1" alt="robot1"></img>
//         <img src={robot2} className="projects__description__background robot2" alt="robot2"></img>
//         <img src={robot4} className="projects__description__background robot4" alt="robot1"></img>
//         <img src={robot5} className="projects__description__background robot5" alt="robot2"></img>
//         <img src={robot3} className="projects__description__background robot3" alt="robot"></img>
//         <img src={robot6} className="projects__description__background robot6" alt="robot"></img>
//       <h1 className="title1">MBAZA AI</h1>
//         <div className="projects__set-of-two">
//         <div data-aos="fade-left" className="projects__description__body">
//         <h1><u>This is about mbaza ai DEEPSPEECH</u></h1>
//         <p>Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.0<a href="#popup" className="btn popup__btn">MORE ...</a></p>
//         </div>
//         <div data-aos="fade-left" className="projects__description__body--1">
//         <h1><u>This is about mbaza ai CHATBOT</u></h1>
//         <p>Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.1<a href="#popup" className="btn popup__btn">MORE ...</a></p>
//         </div>
//       </div>
//         <div className="projects__set-of-two">
//         <div data-aos="fade-left" className="projects__description__body">
//         <h1><u>This is about mbaza ai IVR</u></h1>
//         <p>Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.0<a href="#popup" className="btn popup__btn">MORE ...</a></p>
//         </div>
//         <div data-aos="fade-left" className="projects__description__body--1">
//         <h1><u>This is about mbaza ai IVR-CHATBOT</u></h1>
//         <p>Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.1<a href="#popup" className="btn popup__btn">MORE ...</a></p>
//         </div>
//       </div>
//         <div className="projects__set-of-two">
//         <div data-aos="fade-left" className="projects__description__body">
//         <h1><u>This is about mbaza ai CRM</u></h1>
//         <p>Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.0<a href="#popup" className="btn popup__btn">MORE ...</a></p>
//         </div>
//         <div data-aos="fade-left" className="projects__description__body--1">
//         <h1><u>This is about mbaza ai USSD</u></h1>
//         <p>Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.1<a href="#popup" className="btn popup__btn">MORE ...</a></p>
//         </div>
//       </div>






//       <h1 className="title1">DATA COLLECTION</h1>
//       <div className="set__of__two">
//         <div data-aos="fade-left" className="projects__description__body">
//         <h1><u>This is about data collection STT</u></h1>
//         <p>Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.0<a href="#popup" className="btn popup__btn">MORE ...</a></p>
//         </div>
//         <div data-aos="fade-left" className="projects__description__body--1">
//         <h1><u>This is about data collection TTS</u></h1>
//         <p>Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.1<a href="#popup" className="btn popup__btn">MORE ...</a></p>
//         </div>
//       </div>
//       <div className="set__of__two">
//         <div data-aos="fade-left" className="projects__description__body">
//         <h1><u>This is about data collection Q&A</u></h1>
//         <p>Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.0<a href="#popup" className="btn popup__btn">MORE ...</a></p>
//         </div>
//       </div>
//       </div>



//       <h1 className="title">TEAM</h1>
//     <div className="cards" id="team__id">
//     <div className="cards__trio">
//           <div className="card">
//             <div className="card__side card__side--front">
//               <div className="card__picture card__picture--1">&nbsp;</div>
//               <h4 className="card__heading">
//               </h4>
//               <div className="card__details">
//               <h1 className="card__details__title">Chief Operation Officer</h1>
//               <h1 className="card__details__title">Ali NIYONZIMA</h1>
//               </div>
//             </div>
//             <div className="card__side card__side--back card__side--back-1">
//               <div className="card__cta">
//                 <div className="card__price-box">
//                   <p className="card__price-only">Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card__side card__side--front">
//               <div className="card__picture card__picture--1">&nbsp;</div>
//               <h4 className="card__heading">
//               </h4>
//               <div className="card__details">
//               <h1 className="card__details__title">Chief Operation Officer</h1>
//               <h1 className="card__details__title">Ali NIYONZIMA</h1>
//               </div>
//             </div>
//             <div className="card__side card__side--back card__side--back-1">
//               <div className="card__cta">
//                 <div className="card__price-box">
//                   <p className="card__price-only">Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card__side card__side--front">
//               <div className="card__picture card__picture--1">&nbsp;</div>
//               <h4 className="card__heading">
//               </h4>
//               <div className="card__details">
//               <h1 className="card__details__title">Chief Operation Officer</h1>
//               <h1 className="card__details__title">Ali NIYONZIMA</h1>
//               </div>
//             </div>
//             <div className="card__side card__side--back card__side--back-1">
//               <div className="card__cta">
//                 <div className="card__price-box">
//                   <p className="card__price-only">Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </div>
//           <div className="cards__trio">
//           <div className="card">
//             <div className="card__side card__side--front">
//               <div className="card__picture card__picture--1">&nbsp;</div>
//               <h4 className="card__heading">
//               </h4>
//               <div className="card__details">
//               <h1 className="card__details__title">Chief Operation Officer</h1>
//               <h1 className="card__details__title">Ali NIYONZIMA</h1>
//               </div>
//             </div>
//             <div className="card__side card__side--back card__side--back-1">
//               <div className="card__cta">
//                 <div className="card__price-box">
//                   <p className="card__price-only">Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card__side card__side--front">
//               <div className="card__picture card__picture--1">&nbsp;</div>
//               <h4 className="card__heading">
//               </h4>
//               <div className="card__details">
//               <h1 className="card__details__title">Chief Operation Officer</h1>
//               <h1 className="card__details__title">Ali NIYONZIMA</h1>
//               </div>
//             </div>
//             <div className="card__side card__side--back card__side--back-1">
//               <div className="card__cta">
//                 <div className="card__price-box">
//                   <p className="card__price-only">Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card__side card__side--front">
//               <div className="card__picture card__picture--1">&nbsp;</div>
//               <h4 className="card__heading">
//               </h4>
//               <div className="card__details">
//               <h1 className="card__details__title">Chief Operation Officer</h1>
//               <h1 className="card__details__title">Ali NIYONZIMA</h1>
//               </div>
//             </div>
//             <div className="card__side card__side--back card__side--back-1">
//               <div className="card__cta">
//                 <div className="card__price-box">
//                   <p className="card__price-only">Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//           <div className="cards__trio">
//           <div className="card">
//             <div className="card__side card__side--front">
//               <div className="card__picture card__picture--1">&nbsp;</div>
//               <h4 className="card__heading">
//               </h4>
//               <div className="card__details">
//               <h1 className="card__details__title">Chief Operation Officer</h1>
//               <h1 className="card__details__title">Ali NIYONZIMA</h1>
//               </div>
//             </div>
//             <div className="card__side card__side--back card__side--back-1">
//               <div className="card__cta">
//                 <div className="card__price-box">
//                   <p className="card__price-only">Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card__side card__side--front">
//               <div className="card__picture card__picture--1">&nbsp;</div>
//               <h4 className="card__heading">
//               </h4>
//               <div className="card__details">
//               <h1 className="card__details__title">Chief Operation Officer</h1>
//               <h1 className="card__details__title">Ali NIYONZIMA</h1>
//               </div>
//             </div>
//             <div className="card__side card__side--back card__side--back-1">
//               <div className="card__cta">
//                 <div className="card__price-box">
//                   <p className="card__price-only">Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <div className="card__side card__side--front">
//               <div className="card__picture card__picture--1">&nbsp;</div>
//               <h4 className="card__heading">
//               </h4>
//               <div className="card__details">
//               <h1 className="card__details__title">Chief Operation Officer</h1>
//               <h1 className="card__details__title">Ali NIYONZIMA</h1>
//               </div>
//             </div>
//             <div className="card__side card__side--back card__side--back-1">
//               <div className="card__cta">
//                 <div className="card__price-box">
//                   <p className="card__price-only">Only Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>







//       <div className="partner" id="partner__id">
//         <h1 className="partner__description title">PARTNERS</h1>
//         <div className="partner__description--figure">
//           <div className="partner__description__slide-container">
//             <Slide className="fade" scale={1.4}>
//               <div className="each-fade">
//                 <div className="image-container">
//                   <img src={giz} alt="pat1" className="image-container-slide" />
//                 </div>
//               </div>
//               <div className="each-fade">
//                 <div className="image-container">
//                   <img src={voice} alt="pat2" className="image-container-slide" />
//                 </div>
//               </div>
//               <div className="each-fade">
//                 <div className="image-container">
//                   <img src={ralc} alt="pat3" className="image-container-slide" />
//                 </div>
//               </div>
//             </Slide>





//           </div>
//         </div>
//       </div>
//       </div>




// {/* <Rasa /> */}








//       <div className="contact">
//                 <div className="contact_form">
//                     <div className="contact_form_one">
//                     <h1 className="intro_title_contact">CONTACT US</h1>
//                     <form method="POST" action="/action_page.php" />
//                         <input type="text" id="email" name="email" placeholder="E-mail" className="input_email" /><br />
//                         <textarea type="text" id="message" name="message" placeholder="Message" className="input_message" /><br /><br />
//                         <button type="submit" value="Submit" className="submit">Send</button>
//                     </div>
//                     <div>
//                     <img className="contact_picture" src={contact} alt="contactp"/>
//                     </div>
//                 </div>
//         </div>





//       <div className="footer">
//         <div className="footer__name">&copy;{new Date().getFullYear()} Digital Umuganda</div>
//         <div className="footer__icons">
//           <a href="https://twitter.com/dumuganda?lang=en" target="blank" className="icons">
//             <TwitterIcon className="footer__icons__twitter" />
//           </a>
//           <a href="https://www.youtube.com/channel/UChuGfNrDM0j9DqnLDgXmzcA" target="blank" className="icons">
//             <YouTubeIcon className="footer__icons__youtube" />
//           </a>
//         </div>
//       </div>





//       <div className="popup" id="popup">
//   <div className="popup__content">
//        <a href="#projects__id" className="popup__close">&times;</a>
//        <DeepSpeech className="DeepSpeech"/>
//   </div>
// </div>





//     </div>
//   );
// }


// export default App;







import './App.css';
import 'fontsource-roboto';
import 'typeface-roboto-slab';
import '@material-ui/icons';
import './components/navbar/Navbar.css';
import Index from './components/index';

function App() {
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;