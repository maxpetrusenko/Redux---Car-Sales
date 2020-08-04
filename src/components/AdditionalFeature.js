import React from 'react';
import {connect} from 'react-redux'
import {AddReducer} from '../reducers/actions'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button" 
        onClick = {() => {
          console.log('add')
          console.log(props.feature)
          props.AddReducer(props.feature)}}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStatetoProps = state => {
  return ({
    // feature: state.feature
  })
}

export default connect(mapStatetoProps,{AddReducer})(AdditionalFeature);
