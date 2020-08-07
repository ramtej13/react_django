import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import 'antd/dist/antd.css';
import CustomLayout from './containers/layout';
import ArticleList from './containers/articleslist';



class App extends React.Component {
    render() {
          return (
            <div className="App">
                <Router>
                    <CustomLayout>
                        <BaseRouter />
                    </CustomLayout>
                </Router>
            </div>
          );
        }

    }
//  return (
//    <div className="App">
//        <CustomLayout>
////            <ArticleList />
//        </CustomLayout>
//    </div>
//  );
//}

export default App;
