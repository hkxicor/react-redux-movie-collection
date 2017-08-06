import { combineReducers } from 'redux'
import movie from './movie'

const reducers = combineReducers({
  movie: movie,
})
export default  reducers
