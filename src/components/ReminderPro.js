import React, { Component } from "react";
import {connect} from 'react-redux';
import {addReminder, deleteReminder, deleteAllReminders, updateReminder} from '../actions';
import Reminders from './Reminders';

class RemindersPro extends Component {


  deleteAllReminders = () => {
    this.props.deleteAllReminders()
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <Reminders />
        <button className="btn btn-danger" onClick={this.deleteAllReminders}>Delete All Reminders</button>
      </div>
    )
  }
}

// function mapDispatchToProps(disptach) {
//   return bindActionCreators({addReminder, deleteReminder}, disptach);
// }

function mapStateToProps(state) {
  return {
    reminders: state
  }
}
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default connect(mapStateToProps, {addReminder, deleteReminder, deleteAllReminders, updateReminder})(RemindersPro);
