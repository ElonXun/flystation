import dva from 'dva';
import './index.css';
import data from './data';

// 1. Initialize
const app = dva({
  initialState: {
    data: data.data,
  },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/products'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

