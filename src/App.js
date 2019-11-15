import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Timeline from './components/timeline/timeline';
import Testimonials from './components/testimonials/testimonials';
import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './resumeData';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About />
        <Resume />
        <Portfolio />
        <Timeline />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default App;

