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

FlowRouter.route('/user/:id', {
  action(params) {
    mount(App, {
      content: <UserEditPage userId={params.id} />
    })
  }
})

FlowRouter.route('/wigs/:id', {
  action(params) {
    mount(App, {
      content: <WigPage userId={params.id} />
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
