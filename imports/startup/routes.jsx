import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import { App } from '../ui/layouts/App';
import Home from '../ui/pages/Home';
import WigPage from '../ui/pages/WigPage';
import UserEditPage from '../ui/pages/UserEdit';

FlowRouter.route('/', {
  action() {
    mount(App, {
      content: <Home />
    });
  }
});

FlowRouter.route('/user/:userId', {
  action(params) {
    mount(App, {
      content: <UserEditPage userId={params.userId} />
    })
  }
})

FlowRouter.route('/wigs/:userId', {
  action(params) {
    mount(App, {
      content: <WigPage userId={params.userId} />
    })
  }
})

FlowRouter.route('/admin', {
  action() {
    mount(App, {
      content: <Admin />
    });
  }
});
