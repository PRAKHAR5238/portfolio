import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div className="skillmain">
                <div className="skill">
                    <div className="wrapper">
                        <h2 data-aos="flip-left" data-aos-duration="1000"><strong>Skills</strong></h2>
                        <div className="cards" data-aos="flip-left" data-aos-duration="1000">
                            <figure className="card" id='1' data-aos="flip-left" data-aos-duration="1000">
                                <img src="html.png" alt="HTML5"/>
                                <figcaption>HTML5</figcaption>
                            </figure>
                            <figure className="card" data-aos="flip-left" data-aos-duration="1000">
                                <img src="css.png" alt="CSS"/>
                                <figcaption>CSS</figcaption>
                            </figure>
                            <figure className="card" data-aos="flip-left" data-aos-duration="1000">
                                <img src="react.png" alt="React JS"/>
                                <figcaption>React JS</figcaption>
                            </figure>
                            <figure className="card" data-aos="flip-left" data-aos-duration="1000">
                                <img src="js.png" alt="" />
                                <figcaption>JavaScript</figcaption>
                            </figure>
                            <figure className="card" data-aos="flip-left" data-aos-duration="1000">
                                <img src="figma.png" alt="" />
                                <figcaption>Figma</figcaption>
                            </figure>
                            <figure className="card" data-aos="flip-left" data-aos-duration="1000">
                                <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-9294852-7577995.png" alt="TailWind"/>
                                <figcaption>TailWind</figcaption>
                            </figure>
                            <figure className="card" data-aos="flip-left" data-aos-duration="1000">
                                <img src="Python.png" alt="" />
                                <figcaption>Python</figcaption>
                            </figure>
                            <figure className="card" data-aos="flip-left" data-aos-duration="1000">
                                <img src="bootstrap.png" alt="BootStrap"/>
                                <figcaption>BootStrap</figcaption>
                            </figure>
                            <figure className="card" data-aos="flip-left" data-aos-duration="1000">
                                <img src="ai.png" alt="" />
                                <figcaption>AI Tools</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
