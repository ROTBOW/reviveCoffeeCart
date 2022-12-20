import React from 'react';
import './aboutPage.scss';
import handingOutCoffee from './../../assets/images/handingOutCoffee.png'


const AboutPage = () =>{
    
  return (
    <div className="about-page">
      <div id="about-text">
        <h2>About Me!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus nec. Vestibulum lorem sed risus ultricies tristique. Dictum non consectetur a erat. Ut ornare lectus sit amet est placerat. Adipiscing enim eu turpis egestas. Lectus proin nibh nisl condimentum id. Tortor posuere ac ut consequat semper viverra. Mi proin sed libero enim sed faucibus turpis. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Pharetra diam sit amet nisl suscipit. Sit amet purus gravida quis blandit turpis cursus in. Scelerisque purus semper eget duis at. Ullamcorper malesuada proin libero nunc consequat. In iaculis nunc sed augue lacus. In massa tempor nec feugiat nisl. Augue ut lectus arcu bibendum at varius vel pharetra vel. Velit sed ullamcorper morbi tincidunt ornare.
        Enim facilisis gravida neque convallis a cras semper. Leo integer malesuada nunc vel risus commodo. Egestas congue quisque egestas diam in arcu cursus euismod. Condimentum mattis pellentesque id nibh tortor id. Maecenas ultricies mi eget mauris. Leo duis ut diam quam. Accumsan lacus vel facilisis volutpat est velit. Eu augue ut lectus arcu bibendum. Dui id ornare arcu odio ut sem nulla pharetra. Lorem dolor sed viverra ipsum nunc. Senectus et netus et malesuada fames ac turpis. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Nisl tincidunt eget nullam non nisi est. Quam vulputate dignissim suspendisse in est. Aenean vel elit scelerisque mauris pellentesque. Phasellus vestibulum lorem sed risus ultricies.</p>
      </div>
      <a
        href="https://www.instagram.com/p/CinaWjTJ0se/"
        target="_blank"
        rel="noopener noreferrer"
        ><img src={handingOutCoffee} alt="Jayda handing out coffee to a customer"/></a>
    </div>
  );
};

export default AboutPage;