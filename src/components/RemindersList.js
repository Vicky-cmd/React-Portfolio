import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addReminder, deleteReminder, deleteAllReminders, updateReminder} from '../actions';


class RemindersList extends Component{

    editReminder = (reminder) => () => {
        console.log("Editing", reminder);
        this.props.editReminder(reminder);
    }
    
    deleteReminder = (id) => () => {
        this.props.deleteReminder(id);
    }
    parseDate = (reminder) => {
        // console.log("reminder ", reminder);
        let date = Date.parse(reminder.date) - (new Date()).getTime();
        const days = parseInt(date /  (24 * 60 * 60 * 1000));
        const daysrem = date %  (24 * 60 * 60 * 1000);
        const hours = parseInt(daysrem / (60 * 60 * 1000));
        const hoursrem = daysrem % (60 * 60 * 1000);
        const mins = parseInt(hoursrem / (60 * 1000));
        return (
          <p>{days} days {hours} hours {mins} mins to go...</p>
        )
      }
    render() {
        console.log(this.props);
        const { reminders } = this.props;
        return (
            
        <ul className="list-group col-sm-4">
            {
            reminders.map(reminder => (
                <li className="list-group-item" key={reminder.id}>
                <div className="list-item">
                    {reminder.text}
                    <br />
                    {
                    this.parseDate(reminder)
                    }
                </div>
                <div className="list-item delete-button">
                    <i onClick={this.deleteReminder(reminder.id)}>&#x2715;</i>
                    <br/>
                    <i className="fa fa-edit" onClick={this.editReminder(reminder)}></i>
                </div>
                {/* <div>
                    
                </div> */}
                </li>
            ))
            }
        </ul>        
        )
    }
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, {addReminder, deleteReminder, deleteAllReminders, updateReminder})(RemindersList);