import React from 'react';
import { render, hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// Real application
// import ClientRouter from '@/routing/ClientRouter';

// Sandbox
import ClientRouter from '@/sandbox/routing/ClientRouterSB';

const renderMethod = (process.env.RENDERING === 'server')
  ? hydrate
  : render;

renderMethod(
  <AppContainer>
    <ClientRouter />
  </AppContainer>,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}