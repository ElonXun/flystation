import dva from 'dva';
import data from '../data';

export default {
  namespace: 'blog',
  state: {
    blogs: data.data,
    blogTypeVisibilityFilter: 'SHOW_ALL_BLOG',
  },
  reducers: {
    blogTypeVisibilityFilter(state, { payload: filter }) {
      return Object.assign({}, state, { blogTypeVisibilityFilter: filter });
    },
  },
};
