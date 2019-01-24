import {ADD_COMMENT} from './action'
import {EDIT_COMMENT} from './action'
import {REMOVE_COMMENT} from './action'
import {VOTE_UP} from './action'
import {VOTE_DOWN} from './action'

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state];
        case EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        text: action.text
                    }
                }
            });

        case VOTE_UP:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        votes: comment.vote + 1
                    };
                }
            return comment;
          });   
        case VOTE_DOWN:
        return state.map(comment => {
            if (comment.id === action.id) {
              return {
                ...comment,
                votes: comment.vote - 1
              };
            }
            return comment;
          });   
        case REMOVE_COMMENT:
            return  state.comments.filter(comment => comment.id !== action.id);

        default:
            return state;
    }
}

