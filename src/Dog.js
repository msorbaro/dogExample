import React, { Component } from 'react';
 
class Dog extends Component {
    constructor(props) {
      super(props);
      this.state = {breed:"Chihuahua"};
    }
  
    changeState = () => {
        this.setState({breed: "Golden"})
    }

    render() {
      return (
          <div>
            <p>I am the Dog Component</p> 
            <p>The dog type is {this.state.breed}</p>
            <p>The name of the dog it {this.props.name}</p>
            <button onClick={this.changeState}>Click Me </button>
          </div>
      )
  }
}

  export default Dog;

