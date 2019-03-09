import React from 'react'

const Search = (props) => (
  <form onSubmit={props.handlerSubmit}>
    <input
      type="text"
      ref={props.setRef}
      placeholder="Search here..."
      onChange={props.handlerChange}
      value={props.value}
      id="search"
    />
  </form>
)

export default Search