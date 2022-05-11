import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showModal } from '../../redux/actions/modalAction';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './ModalFeedback.css';

export function ModalFeedback() {
  const [input, setInput] = useState('');
  const modal = useSelector(store => store.modal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(showModal(false));
  };

  const handleSubmit = async (e) => {
    // отправка на бэк input
    // console.log('inputvalue ----->', input);
    handleClose();
  };

  return ( 
    <div>
      <Dialog open={modal} onClose={handleClose}>
        <DialogTitle>Обратная связь</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Напишите нам всё, что вы о нас думаете! Нам очень важно знать Ваше мнение! :)
          </DialogContentText>
          <TextField
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Сообщение"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleSubmit}>Отправить</Button>
        </DialogActions>
      </Dialog>
    </div>
   );
}