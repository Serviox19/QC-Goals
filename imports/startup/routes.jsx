import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import { App } from '../ui/layouts/App';
import Home from '../ui/pages/Home';
import WigPage from '../ui/pages/WigPage';

FlowRouter.route('/', {
  action() {
    mount(App, {
      content: <Home />
    });
  }
});

FlowRouter.route('/users/:userID', {
  action() {
    mount(App, {
      content: <WigPage />
    });
  }
});

FlowRouter.route('/admin', {
  action() {
    mount(App, {
      content: <Admin />
    });
  }
});
