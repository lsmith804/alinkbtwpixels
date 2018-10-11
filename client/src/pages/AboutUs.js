import React, { Component } from 'react';

class AboutUs extends Component {

  //Handle clicks! More to come.
  handleClick = event => {
    event.preventDefault();
    event.target.selected = true;
    let member = event.target.name;  
    console.log(member);
  }
 
  render() {
    return (

      <div>
        <section className="hero is-light">
          <div class="hero-body">
            <div className="container">
                <h1 class="title">
                  About Us
                </h1>
                <h1 class="subtitle">
                  GM&T History - Today
                </h1>
            </div>
          </div>
        </section>
        <div className="p">Welcome to [Gaming Mysteries & Theories!], your number one source for researching and sharing oddities in video games! We're dedicated to keeping you up to date with new theories and providing information for newcomers.

        Founded in 2018 by Lori Smith, [GM&T] has come a long way from its beginnings in the comments sections of MatPat's Game Theory and YuriOfWind's Gaming Mysteries. When Lori first started out, her passion for [video games and the theories surrounding their backstories] drove her to do intense research, and lead her to look for a website or social media platform that catered to individuals with the same interest. After she was unable to find a "hub" for this culture, she decided to create her own.

        We hope you enjoy [GM&T] as much as we enjoy offering this platform. If you have any questions or comments, please don't hesitate to contact us.

        Sincerely,
        GM&T
        </div>
              
      </div>
    );
  };
}

export default AboutUs;
