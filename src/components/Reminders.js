import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addReminder, deleteReminder, deleteAllReminders, updateReminder} from '../actions';
import RemindersList from './RemindersList';

class Reminders extends Component {

    state = {
        text: '',
        date: '',
        updateId: '',
        isUpdate: false
    }

    addReminder = () => {
        if(this.state.text === '' || typeof this.state.text === 'undefined') {
            alert("Reminder field cannot be blank!");
            document.getElementById("reminderTxt").focus();
            return;
        }
        
        if(this.state.date === '' || typeof this.state.date === 'undefined') {
            alert("Please Enter The Reminder Date!");
            document.getElementById("reminderTime").focus();
            return;
        }
        
        document.getElementById("reminderTxt").value = "";
        document.getElementById("reminderTime").value = "";
        this.props.addReminder(this.state.text, this.state.date);
        this.setState({text:'', date: '', updateId: '', isUpdate: false})
    }

    deleteAllReminders = () => {
        this.props.deleteAllReminders();
    }

    editReminder = (reminder) => {
        console.log("Inside editor", reminder )
        let editFlg = window.confirm("Do You want to Edit this Reminder?");
        if(editFlg) {
            document.getElementById("reminderTxt").value = reminder.text;
            document.getElementById("reminderTime").value = reminder.date;
            this.setState({isUpdate: true, updateId: reminder.id, text: reminder.text, date: reminder.date});
            document.getElementById("reminderTxt").focus();
        }
    }

    updateReminder = () => {
        if(this.state.text === '' || typeof this.state.text === 'undefined') {
            alert("Reminder field cannot be blank!")
            document.getElementById("reminderTxt").focus();
            return;
        }
        if(this.state.date === '' || typeof this.state.date === 'undefined') {
            alert("Please Enter The Reminder Date!");
            document.getElementById("reminderTime").focus();
            return;
        }
        
        this.props.updateReminder(this.state.updateId, this.state.text, this.state.date);
        document.getElementById("reminderTxt").value = "";
        document.getElementById("reminderTime").value = "";
        this.setState({isUpdate: false, updateId:''});
    }

    keyPressListener = event => {
        if(event.key === "Enter") {
            document.getElementById("reminderTime").focus();
        }
    }
    
    render() {
        return(
            <div  style={{width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
            <div className="form-inline">
            <div className="input-group">
              <input className="form-control" id="reminderTxt" placeholder="I have to..." onKeyPress={this.keyPressListener} onChange={event => this.setState({text: event.target.value})}/>
              <input type="datetime-local" id="reminderTime" className="form-control" onInput={event => {console.log(event.target.value);this.setState({date: event.target.value})}}/>
              <div className="input-group-append">
  
                {
                  !this.state.isUpdate?
                  <button type="button" id="submitReminder" className="btn btn-success" onClick={this.addReminder}>Add Reminder</button>
                  :
                  <button type="button" id="updateReminder" className="btn btn-success" onClick={this.updateReminder}>Update Reminder</button>
                }
              </div>
            </div>
          </div>
          <RemindersList editReminder={this.editReminder}/>
          </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, {addReminder, deleteReminder, deleteAllReminders, updateReminder})(Reminders);