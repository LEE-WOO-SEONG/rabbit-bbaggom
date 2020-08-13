import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { history } from './redux/create';

// pages
import Home from './pages/Home';
import Intro from './pages/Intro';
import Preview from './pages/Preview';
import MyPage from './pages/MyPage';
import Favorite from './pages/Favorite';
import NotFound from './pages/NotFound';
import FatalError from './pages/FatalError.jsx';

// components
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <ErrorBoundary FallbackComponent={FatalError}>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/mypage" component={MyPage} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/intro" component={Intro} />
          <Route path="/preview" component={Preview} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
