import React, {
  Component
} from 'react'

import HandlerError from '../../error/containers/handlerError'
import HomeLayout from '../components/home-layout'
import Playlist from '../../playlist/components/playlist'

import { 
  connect 
} from 'react-redux'

class App extends Component {
  render() {
    const {
      artists
    } = this.props
    return (
      <div className="App">
        <HandlerError>
          <HomeLayout>
            <Playlist
              items={artists}
            />
          </HomeLayout>
        </HandlerError>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    artists: state.artists.items,
  }
}

export default connect(mapStateToProps, null)(App)