var React = require ('react');
var ReactDOM = require ('react-dom');
var PropTypes = require ('prop-types');
require ('./styles/index.scss');


//what component needs:
//UI (almost always)
//state
//lifecycle events


class App extends React.Component {
  render() {
    return (
      <div>
        Yeeah World!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

// module.hot.accept('./app/index.js', () => {
//  const NextRootContainer = require('./app/index.js').default;
//  render(<NextRootContainer />, document.getElementById('app'));
// })
