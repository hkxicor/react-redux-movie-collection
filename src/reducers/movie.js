import {
  SEARCH_MOVIE,
  MAKE_WATCHED,
  CHANGE_CURRENT,
  START_PROCESSING,
  STOP_PROCESSING,
  CHANGE_STATUS,
} from '../actions'

export function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].Title === obj.Title) {
            return true;
        }
    }

    return false;
}
function getId(Title,list) {
  for (var i = 0; i < list.length; i++) {
    if(Title === list[i].Title){
      return i
    }
  }
  return -1
}

const initialState = {
  isProcessing: false,
  current:{},
  watched:[]
}

function movie(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return state
    case MAKE_WATCHED:
      return containsObject(action.payload,state.watched) ? state :
              Object.assign({},state,{
              watched: [...state.watched, action.payload]
            })
    case CHANGE_CURRENT:
      return Object.assign({},state,{
        current:{
          Title: action.payload.Title,
          Released: action.payload.Released,
          Ratings: action.payload.Ratings,
          Description: action.payload.Plot,
          Poster: action.payload.Poster,
          like: 'none'
        }
      })
    case START_PROCESSING:
      return Object.assign({},state,{
        isProcessing: true
      })
    case STOP_PROCESSING:
      return Object.assign({},state,{
        isProcessing: false
      })
    case CHANGE_STATUS:
      let id = getId(action.payload.Title, state.watched)
      console.log("id",id);
      return Object.assign({},state,{
        watched: state.watched.map((item,key) => {
          if(item.Title == action.payload.Title){
            return Object.assign({},item,{
              like: action.payload.like
            })
          }
          return item
        })
      })
    default:
      return state
  }
}

export default movie
