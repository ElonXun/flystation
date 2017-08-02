import dva from 'dva';
import './index.css';
import data from './data';

// 1. Initialize
const app = dva({
  // initialState: {
  //   blog: data.data,
  //   blogTypeVisibilityFilter: 'SHOW_ALL_BLOG',
  // },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/products'));
app.model(require('./models/navigator'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

