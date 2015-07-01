'use strict';

describe('TheRedLineApp', function () {
  var React = require('react/addons');
  var TheRedLineApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    TheRedLineApp = require('components/TheRedLineApp.js');
    component = React.createElement(TheRedLineApp);
  });

  it('should create a new instance of TheRedLineApp', function () {
    expect(component).toBeDefined();
  });
});
