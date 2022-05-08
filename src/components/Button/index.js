import './button.css';

export function Button({name, type}) {
  return ( 
    <div className='Button unselectable'>{name}</div>
   );
}