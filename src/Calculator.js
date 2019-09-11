import React from 'react';

// // class Calculator extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.handleChange = this.handleChange.bind(this);
// //     this.state = { temperature: '' };
// //   }
// //   handleChange(e) {
// //     this.setState({ temperature: e.target.value });
// //   }
// //   render() {
// //     const temperature = this.state.temperature;
// //     return (<fieldset>
// //       <legend>Enter temperature in Celsius:</legend>
// //       <input value={temperature} onChange={this.handleChange} />

// //       <BoilingVerdict celsius={parseFloat(temperature)} />
// //     </fieldset>);
// //   }
// // }

// class Calculator extends React.Component {
   
//     render() {
//       return (
//           <div>
//               <temperatureInput scale="c" />
//               <temperatureInput scale="f" />
//           </div>
//       );
//     }
//   }

// function BoilingVerdict(props) {
//     if(props.celsius >= 100){
//          return <p>The water would boil</p>
//     }else {
//       return <p>The water would not  boil</p>
//     }
//   }

// const scaleNames = {
//      c: 'Celsius',
//      f: 'Fahrenheit'
// };

// class temperatureInput extends React.Component {
//     constructor(props){
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {temperature:''};
//     }

//     handleChange(e){
//         this.setState({temperature: e.target.value});
//     }

//     render (){
//         const temperature  = this.static.temperature;
//         const scale = this.props.scale;
//         return (
//              <fieldset>
//                  <legend>Enter temperature in {scaleNames[scale]}:</legend>
//                  <input value={temperature}
//                         onChange={this.handleChange}/>
//              </fieldset>
//         );
//     }
// }

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

export default Calculator
