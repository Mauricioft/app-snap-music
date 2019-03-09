import React, {
  Component
} from 'react'

import * as actions from '../../actions/index'

import { 
  connect 
} from 'react-redux'

import { 
  bindActionCreators
} from 'redux'

import Search from '../components/search'

class SearchContainer extends Component {
  state = {
    value: '',
  }
  handlerSubmit = (event) => {
    event.preventDefault()
    this.handlerSearch(this.input.value)
  }
  async handlerSearch(query){
    await this.props.actions.searchArtists(query)
  }
  setInputRef = (event) => {
    this.input = event
  }
  handlerInputChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  render(){
    return(
      <Search
        setRef={this.setInputRef}
        handlerSubmit={this.handlerSubmit}
        handlerChange={this.handlerInputChange}
        value={this.state.value}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(null, mapDispatchToProps)(SearchContainer)