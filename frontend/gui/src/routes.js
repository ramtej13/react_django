import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from './containers/articleslist';
import ArticleDetail from './containers/articlesdetail'
const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/:articleID' component={ArticleDetail} />
    </div>
);

export default BaseRouter;