import './button2.css';

export const Button2 = ({ name, type = 'button', onClick }) => {
  return <input type={type} value={name} onClick={onClick} className="button2" />
};
