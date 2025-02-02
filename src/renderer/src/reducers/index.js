// src/reducers/index.js
import { combineReducers } from 'redux';
import batchReducer from './batchReducer';
import authReducer from './authReducer'; // Adjust the import based on your authReducer location
import questionReducer from './questionReducer';
import answerReducer from './answerReducer';
const rootReducer = combineReducers({
    auth: authReducer,
    batches: batchReducer,
    questions: questionReducer,
    submissions:answerReducer
});

export default rootReducer;
