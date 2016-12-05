import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import * as actions from '../actions/fuelSavingsActions';
import MainForm from '../components/MainForm';

export const MainPage = (props) => {
  return (
    <MainForm
      todoList={props.todoList}
     />
  );
};

MainPage.propTypes = {
//  actions: PropTypes.object.isRequired,
  todoList: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todoList: state.todoList
  };
}

function mapDispatchToProps(dispatch) {
  return {
//    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
