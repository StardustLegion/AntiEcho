import React from 'react';
import Slider from 'material-ui-slider-label/Slider';
import logo from './redblue.png'; 

const PoliticalSlider = (props) => {
  const styles = {
    labelStyleOuter: {
      width: '30px',
      height: '30px',
      borderRadius: '50% 50% 50% 0',
      background: '#BE88BF',
      position: 'absolute',
      transform: 'rotate(-45deg)',
      top: '-22px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    labelStyleInner: {
      transform: 'rotate(45deg)',
      color: 'white',
      fontWeight: '800',
      textAlign: 'center',
      position: 'relative',
      fontSize: '1em'
    },
  };
  
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
        label={
          <div style={styles.labelStyleOuter}>
            <div style={styles.labelStyleInner}>
              {props.sliderValue}
            </div>
          </div>
        }
      />
      <img id='red-blue-line' src={logo}/>
      <div id="sliderText">
        Adjust the slider to modify the political leaning of the news below. 
      </div>
    </div>
  );
};

export default PoliticalSlider;
