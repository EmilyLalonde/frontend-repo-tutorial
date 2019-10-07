import React, {Component} from 'react';
import { getDataFromBackend } from './apiCalls/apiCalls';
import Container from './Container'

class App extends Component {
  constructor() {
    super();
    this.state = {
      seasons: [],
      message: ''
    }
  }

  async componentDidMount() {
    try {
      const seasons = await getDataFromBackend();
      this.setState({ seasons: seasons.seasons })
    } catch ({ message }) {
      this.setState({error: message})
    }
  }

  render() {
    console.log('app', this.state.seasons)
    return (
      <div>
        <Container seasons={this.state.seasons} />
      </div>
    )
  }
}

export default App
