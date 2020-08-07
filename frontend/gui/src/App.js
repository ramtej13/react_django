import React from 'react';
import 'antd/dist/antd.css';
import CustomLayout from './containers/layout';
import ArticleList from './containers/articles';



class App extends React.Component {
    render() {
          return (
            <div className="App">
                <CustomLayout>
                    <ArticleList />
                </CustomLayout>
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
