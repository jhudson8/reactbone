registerMixin({"title":"Reactive-backbone","summary":"Reactive-backbone contains both enhancements to [React](http://facebook.github.io/react/), [Backbone](http://backbonejs.org/), and additional mixins to allow [React](http://facebook.github.io/react/) to work seamelessly with [Backbone](http://backbonejs.org/).\n\nWhile others projects might consider complete [Backbone](http://backbonejs.org/) integration with [React](http://facebook.github.io/react/) to be a mixin which will refresh the [React](http://facebook.github.io/react/) component when the model changes, there are many other ways that [React](http://facebook.github.io/react/) can be more integrated with [Backbone](http://backbonejs.org/) and, in addition, more familiar with [Backbone](http://backbonejs.org/) developers.\n\nWe expose several isolated backbone-specific mixins which can be individually included to meet the needs of the specific [React](http://facebook.github.io/react/) component.  This includes things like\n\n* automatically set the ```loading``` state when a component is fetching or performing any other ajax operations\n* refresh the component when the associated model contents change\n* refresh the component when a specific event is triggered on the model\n* set an invalid state on the component when the model triggers the invalid event for a specific field\n* and others...\n\nSince all of these mixins are registered using [react-mixin-manager](https://github.com/jhudson8/react-mixin-manager), they can easily be added to your components simply by using their mixin alias.  For example:\n\n```\nReact.createClass({\n  mixins: ['events']\n})\n```","bundledProjects":[{"id":"mixin manager","url":"https://github.com/jhudson8/react-mixin-manager"},{"id":"declaritive events","url":"https://github.com/jhudson8/react-events"},{"id":"flexible model async activity binding","url":"https://github.com/jhudson8/backbone-async-event"},{"id":"many backbone-aware React mixins","url":"https://github.com/jhudson8/react-backbone"}]});