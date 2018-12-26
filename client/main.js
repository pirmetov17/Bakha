import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import './main.html'
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.js';
// это функция показывает(обрабатывет)цель
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});