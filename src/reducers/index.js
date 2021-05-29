import {ADD_REMINDER, DELETE_REMINDER, DELETE_ALL_REMINDERS, UPDATE_REMINDER} from '../constants';
import {bake_cookie, read_cookie} from 'sfcookies';

const reminder = (action) => {
    let id = action.id;
    if(typeof id === 'undefined') {
        console.log("id undefined!");
        id = Math.random();
    }
    return {
        text: action.text,
        date: action.date,
        id
    }
}

const updateReminder = (action, state) => {
    let reminders = state.filter(reminder => reminder.id!==action.id)
    console.log(reminders);
    reminders.push(reminder(action));
    return reminders;
}

const removeIdFromState = (action, state) => {
    let reminders = [];
    state.forEach(reminder => {
        if(action.id !== reminder.id) {
            reminders.push(reminder);
        }
    });
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;
    // bake_cookie('reminders', []);
    state = read_cookie('reminders')
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)]
            bake_cookie('reminders', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeIdFromState(action, state);
            bake_cookie('reminders', reminders);
            return reminders;
        case DELETE_ALL_REMINDERS:
            reminders = []
            bake_cookie('reminders', reminders);
            return reminders;
        case UPDATE_REMINDER:
            reminders = updateReminder(action, state);
            bake_cookie('reminders', reminders);
            return reminders;
        default:
            return state;
    }
}

export default reminders;