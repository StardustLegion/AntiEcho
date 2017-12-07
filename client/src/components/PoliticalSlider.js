import React from 'react';
import Slider from 'material-ui/Slider';

const PoliticalSlider = (props) => {
  console.log(props.sliderValue);
  return (
    <div>
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
    </div>
  );
};

export default PoliticalSlider;
