import React, { Component } from 'react';
import { Map } from 'immutable';
import DogPosting from './dogPosting';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBone, faDog } from '@fortawesome/free-solid-svg-icons';
import * as db from './datastore';


class DogBoard extends Component {
    constructor(props) {
      super(props);
      this.state = {dogs: Map(), dogID: 0, newDogName: "", newDogBreed: "", newDogImage: "", showAddDog: false};
    }

    newDogNameFunction = (event) => {
        this.setState({newDogName: event.target.value})
    }

    newDogBreedFunction = (event) => {
        this.setState({newDogBreed: event.target.value})
    }

    newDogImageFunction = (event) => {
        this.setState({newDogImage: event.target.value})
    }

    saveDogInfo = () => {
        var dogData = {
            name: this.state.newDogName,
            breed: this.state.newDogBreed,
            image: this.state.newDogImage,
        }

        db.addDog(this.state.newDogName, this.state.newDogBreed, this.state.newDogImage)

        this.setState({
            dogs: this.state.dogs.set(this.state.dogID, dogData),
            dogID: this.state.dogID +1,
            showAddDog: false,
            newDogName: "",
            newDogBreed: '',
            newDogImage: '',
        })

    }

    delete = (id) => {
        this.setState({dogs: this.state.dogs.delete(id)})
    }

    save = (id, field) => {
        this.setState({dogs:this.state.dogs.update(id, (n) => { return Object.assign({}, n, field); })})
    }

    showAddDog = () => {
      this.setState({showAddDog: true})
    }

    testStyle = () => {
      var dogData = {
          name: "test dog",
          breed: "test breed",
          image: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12121353/GoldenRetriever1_stacked.jpg",
      }

      this.setState({
          dogs: this.state.dogs.set(this.state.dogID, dogData),
          dogID: this.state.dogID +1,
      })

      console.log("here")
    }

    render() {

      const allDogs = this.state.dogs.entrySeq().map(
          ([id, dog]) => {
              return <DogPosting
                        save={this.save}
                        delete={this.delete}
                        name={dog.name}
                        breed={dog.breed}
                        dogURL={dog.image}
                        id={id}/>
          }
      )

      const addDog = this.state.showAddDog ?
        <div style= {{display: 'flex', alignItems: 'row', width: '80vw', justifyContent: 'space-around'}}>
          <input placeholder="name" type="text" value={this.state.newDogName} onChange={this.newDogNameFunction}/>

          <input placeholder="breed" type="text" value={this.state.newDogBreed} onChange={this.newDogBreedFunction} />

          <input placeholder="imageURL" type="text" value={this.state.newDogImage} onChange={this.newDogImageFunction} />

          <button onClick={this.saveDogInfo}>Save</button>
        </div>
        :
          <button onClick={this.showAddDog} style={{color: 'black', borderColor: 'black', borderStyle: 'solid', borderRadius: '10px', padding: '10px', borderWidth: '1.25px'}}>
            Add a Dog!
            <FontAwesomeIcon icon={faDog} style={{color: 'black'}}/>
          </button>

      return (
          <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
            <div style={{display:'flex', flexDirection:'row', alignItems: 'center'}}>
               <FontAwesomeIcon icon={faBone} style={{ color: 'white', margin: '10px'}} />
               <p>
               this is the dog board
               </p>
               <FontAwesomeIcon icon={faBone} style={{ color: 'white', margin: '10px' }} />
            </div>
          { /* <button onClick={this.testStyle}> Test </button> */}

            {addDog}

            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
             {allDogs}
            </div>




          </div>
      )
  }
}

  export default DogBoard;
