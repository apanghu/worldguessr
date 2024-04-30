import { FaInfo, FaDiscord, FaGithub } from 'react-icons/fa';

export default function Navbar({mapShown, fullReset, setMultiplayerModal, playingMultiplayer}) {
  return (
    <div className={`top ${mapShown?'hideOnMobile':''}`}>
    <div className="topItem navbar">
<div>
<a id="logo" alt="worldguessr logo" onClick={()=> {
  if(!playingMultiplayer) fullReset();
  }} style={{cursor: "pointer"}}>
  <img id="icon" src="/logo.png" alt="WorldGuessr logo" />
</a>
{ playingMultiplayer ? <p style={{color: 'white'}}>Multiplayer</p> :(
<button className="navButton" onClick={()=>setMultiplayerModal(true)}>Play with Friends</button>
)}
{/* <button className="navButton">Game Mode</button>
<button className="navButton">Game Map</button> */}
</div>

</div>
    </div>
  )
}