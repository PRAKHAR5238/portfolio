import React, { Component } from 'react';

export class Project extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="row">
            <h1 data-aos="flip-right" data-aos-duration="1000"><strong>Projects</strong></h1>
            <div className="col-md-4 col-sm-6 col-xs-12" data-aos="flip-right" data-aos-duration="1000">
              <div className="card">
                <div className="cover item-a">
                  <div className="card-back">

                    <a href="https://prakhar5238.github.io/" target="_blank">Click here for demo</a>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12" data-aos="flip-right" data-aos-duration="1000">
              <div className="card">
                <div className="cover item-b">
                  <div className="card-back">
                    <a href="#">Click here for demo</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12" data-aos="flip-right" data-aos-duration="1000">
              <div className="card">
                <div className="cover item-c">
                  <div className="card-back">
                    <a href="https://amzon-ux.netlify.app/" target="_blank">Click here for demo</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12" data-aos="flip-right" data-aos-duration="1000">
              <div className="card">
                <div className="cover item-d">
                  <div className="card-back">
                    <a href="https://passwordgenerato.netlify.app/" target="_blank">Click here for demo</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12" data-aos="flip-right" data-aos-duration="1000">
              <div className="card">
                <div className="cover item-e">
                  <div className="card-back">
                    <a href="https://todo-notes-html.netlify.app/" target="_blank">Click here for demo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Project;





