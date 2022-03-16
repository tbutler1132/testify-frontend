import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDeleteTestMutation } from '../redux/services/testify';

function DeletePopup({userId, testId}) {
    const [open, setOpen] = useState(false);
    const [deleteTest] = useDeleteTestMutation()

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const deleteHandler = () => {
        deleteTest({userId, testId})
        setOpen(false)
    }

    return (
        <div>
            <DeleteOutlineIcon style={{cursor: 'pointer'}} onClick={handleClickOpen}/>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Are you sure you want to delete this test?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                This action will permanently delete this test and you want be able to view it's results
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={handleClose}>
                No
              </Button>
              <Button color='error' onClick={() => deleteHandler()} autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}

export default DeletePopup;