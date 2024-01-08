import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch]=useDataLayerValue()
  return (
    <div className='body'>
      <Header spotify={spotify}  />
      <div className='body_info'>
        <img src={discover_weekly?.images[0].url} />
        <div className='body_infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          {/* {discover_weekly?.tracks.items.map(item => (
            <h1>
              {item.track.name}
            </h1>
          ))} */}
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body_songs'>
        <div className='body_icons'>
          <PlayCircleFilledIcon className='body_shuffle' />
          <FavoriteIcon fontSize='large' className='heart' />
          <MoreHorizIcon />
        </div>
        <div>
          {discover_weekly?.tracks.items.map(item => (
            <div className='songRow'>
            <img className='songRow_album' key={item.track.id} src={item.track.album.images[0].url} alt='TR' />
            <div className='songRow_info'>
              <h1 key={item.track.id}>
                {item.track.name}
              </h1>
              <p>
               {item.track.artists.map((artist) => artist.name).join(", ")} -{" "}
               {item.track.album.name}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Body

// {/* <div>
//           <p style={{color: 'red'}}>hello</p>
//           {discover_weekly?.tracks.items.map(item => {
//             {/* <SongRow track={item.track} /> */}
//             <h1 key={item.track.id} style={{ color: 'red' }}>
//               {item.track.name}
//             </h1>
//           })}
//         </div> */}