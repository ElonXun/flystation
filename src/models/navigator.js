import dva from 'dva';
import data from '../data';

export default {
  namespace: 'blog',
  state: {
    blogs: data.data,
    blogTypeVisibilityFilter: 'SHOW_ALL_BLOG',
  },
  reducers: {
    /*toRealStuff(state, { payload: type }) {
      console.log('进入toRealStuff');
      return state.filter(item => item.blogType === type);
    },
    toNote(state, { payload: type }) {
      console.log('进入toNote');
      console.log(state);
      return state.filter(item => item.blogType === type);
    },
    toTravel(state, { payload: type }) {
      console.log('进入toTravel');
      return state.filter(item => item.blogType === type);
    },*/
    blogTypeVisibilityFilter(state, { payload: filter }) {
      return Object.assign({}, state, { blogTypeVisibilityFilter: filter });
    },
  },
};
