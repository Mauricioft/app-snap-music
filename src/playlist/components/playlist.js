import React from 'react'
import Search from '../../widgets/containers/search'
import Media from './media'

const Playlist = (props) => (
  <div className="Playlist">
    <Search />
    {
      props.items.map((item, key) => {
        return (
          <Media
            key={key}
            id={item.id}
            href={item.href}
            name={item.name}
            genres={item.genres}
            images={item.images}
            popularity={item.popularity}
          />
        )
      })
    }
  </div>
)

export default Playlist