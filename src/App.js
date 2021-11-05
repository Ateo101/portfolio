import './App.css';
import './scripts'
import {calcTime} from "./scripts";

function App() {
  return (
    <div className="App">
        <div className="topbar">
            <div className="container">
                <div className="topbar_inner">
                    <div className="menu">
                        <ul className="anchor_nav">
                            <li className=""><a href="#home">Home</a></li>
                            <li className=""><a href="#about">About</a></li>
                            <li className=""><a href="#skills">Skills</a></li>
                            <li className=""><a href="#portfolio">Portfolio</a></li>
                            <li className=""><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="me" id="home">
            <div className="background">
                <div className="image" style={{backgroundImage:'/src/avatar-rounded.png'}}></div>
                <div className="overlay"></div>
            </div>
            <div className="content">
                <div className="image_wrap">
                    <div className="main"></div>
                </div>
                <div className="name_holder">
                    <h3>Nikita <span>Mikhailov</span></h3>
                </div>
                <div>
                    <p style={{color: 'white', fontSize:'20px'}}>JS Developer</p>
                </div>
            </div>
            <div className="arrow_wrap bounce anchor">
                <a href="#about"><i className="double-down"></i></a>
            </div>
        </div>
        <div className="about"  id="about">
            <div className="container">
                <div className="bio_title">
                    <span>BIOGRAPHY</span>
                    <h3>About Me</h3>
                </div>
                <div className="about_inner">
                    <div className="left">
                        <div className="about_image_wrap">
                            <div className="image-layer">
                                <div className="inner" style={{backgroundImage: '../src/about-photo.jpg'}}></div>
                            </div>
                            <div className="border-layer">
                                <div className="inner" style={{backgroundImage: '../src/about-photo.jpg'}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="about_title">
                            <h3>I'm Nikita Mikhailov, <span>Web Developer</span></h3>
                        </div>
                        <div className="text">
                            <p>Hi! I am a Web Developer, and I'm very passionate
                                and dedicated to my work. Thanks to
                                <a href={'https://it-incubator.by/'} style={{color: '#e65f78', textDecoration: 'none'}}> IT-Incubator </a>
                                I acquired the skills and knowledge necessary
                                to make your project a success.</p>
                        </div>
                        <div className="about_short_contact_wrap">
                            <ul>
                                <li>
								<span><label>Birthday:</label> 15.04.1998</span>
                                </li>
                                <li>
								<span><label>Age:</label> 23</span>
                                </li>
                                <li>
                                    <span><label>Location:</label> Russia, Amur, Blagoveshchensk (local time:
                                        <span style={{color: '#e65f78'}}> ~{calcTime('+9')}</span>)</span>
                                </li>
                                <li>
								<span><label>Email:</label> nikmail242@gmail.com</span>
                                </li>
                                <li>
								<span><label>Phone:</label> +7 999 166 21 81</span>
                                </li>
                            </ul>
                        </div>
                        <div className="button">
                            <a href="" download="" title=""><span title="">Download CV</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="skills" id="skills">
                <div className="container">
                    <div className="main_title">
                        <span>SKILLS</span>
                        <h3>I have some experience in</h3>
                    </div>
                    <div className="skills_inner">
                        <ul>
                            <li className="wow">
                                <div className="inner">
                                    <img src="https://www.svgrepo.com/show/224709/laptop-seo.svg"
                                         width={'50px'} height={'50px'} style={{marginBottom: '17px'}}/>
                                    <h3 style={{color: '#e65f78'}}>Marketing and SEO</h3>
                                    <p>3 years of experience in marketing and SEO
                                        in local company that trades heavy equipment...</p>
                                </div>
                            </li>
                            <li className="wow">
                                <div className="inner">
                                    <img src="https://www.svgrepo.com/show/314526/react.svg"
                                         width={'50px'} height={'50px'} style={{marginBottom: '17px'}}/>
                                    <h3 style={{color: '#e65f78'}}>Web Development</h3>
                                    <p>5 months of learning JavaScript, TypeScript, React, Redux in IT-Incubator...</p>
                                </div>
                            </li>
                            <li className="wow">
                                <div className="inner">
                                    <img src="https://www.svgrepo.com/show/301306/browser-seo-and-web.svg"
                                         width={'50px'} height={'50px'} style={{marginBottom: '17px'}}/>
                                    <h3 style={{color: '#e65f78'}}>Website content management</h3>
                                    <p>Managed websites to keep information, prices and news relevant...</p>
                                </div>
                            </li>
                            <li className="wow">
                                <div className="inner">
                                    <img src="https://www.svgrepo.com/show/125302/adobe-photoshop.svg"
                                         width={'50px'} height={'50px'} style={{marginBottom: '17px'}}/>
                                    <h3 style={{color: '#e65f78'}}>Adobe Photoshop</h3>
                                    <p>Worked on ad templates for different local companies...</p>
                                </div>
                            </li>
                            <li className="wow">
                                <div className="inner">
                                    <img src="https://www.svgrepo.com/show/315505/instagram.svg"
                                         width={'50px'} height={'50px'} style={{marginBottom: '17px'}}/>
                                    <h3 style={{color: '#e65f78'}}>Social Media</h3>
                                    <p>Have some experience in copywriting and social media promotion...</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="lets_work">
                    <p>Are you interested in working with me? <a href="#contact"> Let's start now</a></p>
                </div>
            </div>
        </div>
        <div className="section" id="portfolio">
            <div className="portfolio">
                <div className="container">
                    <div className="main_title">
                        <span>PORTFOLIO</span>
                        <h3>Recent Works</h3>
                    </div>
                    <div className="portfolio_inner">
                        <div className="portfolio_list">
                            <ul>
                                <li>
                                    <div className="inner">
                                        <div className="entry">
                                            <a className="zoom" href="">
                                                <img src="https://marketifythemes.net/html/arlo/img/portfolio/2.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="inner">
                                        <div className="entry">
                                            <a className="zoom"
                                               href="">
                                                <img src="https://marketifythemes.net/html/arlo/img/portfolio/2.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="inner">
                                        <div className="entry" >
                                            <a className="zoom" href="">
                                                <img src="https://marketifythemes.net/html/arlo/img/portfolio/2.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="inner">
                                        <div className="entry">
                                            <a className="zoom" href="">
                                                <img src="https://marketifythemes.net/html/arlo/img/portfolio/2.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="inner">
                                        <div className="entry">
                                            <a className="zoom"
                                               href="">
                                                <img src="https://marketifythemes.net/html/arlo/img/portfolio/2.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="inner">
                                        <div className="entry">
                                            <a className="zoom" href="">
                                                <img src="https://marketifythemes.net/html/arlo/img/portfolio/2.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" id="contact">
            <div class="contact">
                <div class="container">
                    <div class="contact_inner">
                        <div class="main_title">
                            <span>CONTACT</span>
                            <h3>Get in Touch</h3>
                        </div>
                        <div class="desc">
                            <p class="wow txt animated">Please fill out the form on this section to contact me.
                                Or call between 9:00 a.m. and 8:00 p.m. Monday to Friday</p>
                        </div>
                        <div class="wrapper">
                            <div class="left wow fadeInLeft">
                                <div class="fields">

                                    <form action="/" method="post" class="contact_form" id="contact_form">
                                        <div class="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                                        <div class="empty_notice"><span>Please Fill Required Fields</span></div>
                                        <div class="first">
                                            <ul>
                                                <li>
                                                    <input id="name" type="text" placeholder="Name" autocomplete="off"/>
                                                </li>
                                                <li>
                                                    <input id="email" type="text" placeholder="Email" autocomplete="off"/>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="last">
                                            <textarea id="message" placeholder="Message"></textarea>
                                        </div>
                                        <div class='btn'>
                                            <button class="send">Send Message</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            <div class="right wow fadeInLeft">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
