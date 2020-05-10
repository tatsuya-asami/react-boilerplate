import React from 'react';
import { Route, Switch } from 'react-router';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Home } from '@ts/components/routs/Home';
import { Menu } from '@ts/components/routs/Menu';
import { Test } from '@ts/components/routs/Test';

type Props = { history: History };

export const App: React.FC<Props> = ({ history }: Props) => {
  return (
    <ConnectedRouter history={history}>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
      </Switch>
    </ConnectedRouter>
  );
};
