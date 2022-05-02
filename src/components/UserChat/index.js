import './userchat.css';

export function UserChat({ name }) {
  return ( 
    <div className='userchat__container unselectable'>
      {name}
    </div>
   );
}