import {ADD_REMINDER, DELETE_REMINDER, DELETE_ALL_REMINDERS, UPDATE_REMINDER} from '../constants'

export const addReminder = (text, date) => {
    const action = {
        type: ADD_REMINDER,
        date,
        text
    }
    console.log("Action in addReminder", action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log("Deleting entry ", action);
    return action;
}


export const deleteAllReminders = () => {
    const action = {
        type: DELETE_ALL_REMINDERS
    }
    console.log("Deleting entry ", action);
    return action;
}

export const updateReminder = (id, text, date) => {
    const action = {
        type: UPDATE_REMINDER,
        id,
        text,
        date
    }
    console.log("Deleting entry ", action);
    return action;
}