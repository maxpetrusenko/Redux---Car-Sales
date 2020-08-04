import React from 'react';
import {connect} from 'react-redux'
import {RemoveReducer} from '../reducers/actions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button"
        onClick = {() => {
          console.log('remove')
          props.RemoveReducer(props.feature)}}
      >X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) =>{
  return ({
    // name: state.feature.name
  })
}

export default connect(mapStateToProps,{RemoveReducer})(AddedFeature);
