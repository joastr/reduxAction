
import uuid from uuid;

const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const ADD_COMMENT= 'ADD_COMMENT';
const VOTE_UP = 'VOTE_UP';
const VOTE_DOWN = 'VOTE_DOWN';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    };
}

function removeCommment(id) {
    return {
    type: REMOVE_COMMENT,
    id
    };
} 

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    };
}

function voteUp(id, vote) {
    return {
        type: VOTE_UP,
        vote: vote++,
        id
    };
} 

function voteDown (id, vote) {
    return {
        type: VOTE_DOWN,
        vote: vote--,
        id
    };
}