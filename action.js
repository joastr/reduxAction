
import uuid from uuid;

export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const ADD_COMMENT= 'ADD_COMMENT';
export const VOTE_UP = 'VOTE_UP';
export const VOTE_DOWN = 'VOTE_DOWN';

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



