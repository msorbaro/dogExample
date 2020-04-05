import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

class DogPosting extends Component {
    constructor(props) {
      super(props);
      this.state = {editing: false, newTitle: ""};
    }

    deletePosting = () => {
        this.props.delete(this.props.id)
    }

    editTitle = () => {
        this.setState({editing: true})
    }

    changeNewTitle = (event) => {
        this.setState({newTitle: event.target.value})
    }

    submit = () => {
        var newName = {
            name:this.state.newTitle
        }
        this.props.save(this.props.id, newName);

        this.setState({editing: false})

    }

    render() {
      var editBoxOrEditButton = null;
      if(this.state.editing){
        editBoxOrEditButton = (
          <div style={{height: '10%', marginTop: '-20px'}}>
                  <input value={this.state.newTitle} onChange={this.changeNewTitle} placeholder="New Dog Name"/>
                  <button onClick={this.submit} style={{background: 'none', borderColor: 'none', borderStyle: 'none'}}>
                       <FontAwesomeIcon icon={faCheckSquare} style={{ color: 'rgb(5, 99, 99)'}} />
                  </button>
            </div>
          )
      }
      else {
        editBoxOrEditButton = null;
      }

      var editDeleteButtons = null;
      if(!this.state.editing){
        editDeleteButtons = (
          <div style={{display: 'flex', alignItems: 'center'}}>
            <button onClick={this.deletePosting} style={{background: 'none', borderColor: 'none', borderStyle: 'none'}}>
              <FontAwesomeIcon icon={faTrash} style={{ color: 'rgb(5, 99, 99)'}} />
            </button>
            <button onClick={this.editTitle} style={{background: 'none', borderColor: 'none', borderStyle: 'none'}}>
              <FontAwesomeIcon icon={faEdit} style={{ color: 'rgb(5, 99, 99)'}} />
             </button>
          </div>
        )
      }

      return (
          <div style={{borderWidth: '2px', borderColor: "rgba(166, 78, 7, 0.98)", borderStyle:"solid", width: '200px', height: '200px', margin: '20px'}}>
            <img src={this.props.dogURL} style={{width: '100%', height: '60%'}}/>
            <div style={{display:'flex', flexDirection:'row', height: '30%', alignItems: 'center', justifyContent: 'space-between'}}>
              <p style={{fontSize: ".5em", marginLeft: '10px', color:'rgb(5, 99, 99)'}}>{this.props.name}, {this.props.breed}</p>
              {editDeleteButtons}
            </div>
            {editBoxOrEditButton}

          </div>
      )
  }
}

  export default DogPosting;
