import React from 'react';
import Slider from 'material-ui/Slider';
import logo from './red-blue-line.png'; 

const PoliticalSlider = (props) => {
  return (
    <div id="slider">
      <Slider
        defaultValue={0}
        step={1}
        min={-10}
        max={10}
        value={props.sliderValue}
        onChange={(e, val) => {
          props.sliderChange(val);
          props.filterArticles();
        }}
      />
      <img id='red-blue-line' src={logo}/>
      <div id="sliderText">
        Adjusting the slider modifies the political leaning of the news below. 
      </div>
    </div>
  );
};

export default PoliticalSlider;
