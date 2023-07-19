import React from 'react';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { Container, Typography, Box } from '@mui/material';
import { Button } from '@mui/material';
import { Modal, Alert } from '@mui/material';
const Test = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container component="main">
      <ThemeToggleButton />
      <Typography variant="h3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Nobis magni consequatur earum sunt ut, hic voluptas repellat
        reiciendis iste, unde possimus praesentium. Atque quo cumque
        saepe alias dolores distinctio rerum. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Iusto veniam placeat vero
        fugiat, rem adipisci facilis deleniti repellat maiores aperiam
        hic ipsum, vitae odio voluptates esse dignissimos dolores cum
        repellendus? Lorem ipsum dolor sit amet consectetur
        adipisicing
      </Typography>
      <Alert severity="error">
        This is an error alert — check it out!
      </Alert>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: 400,
            height: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            overflow: 'scroll',
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor
            ligula. Nobis magni consequatur earum sunt ut, hic
            voluptas repellat reiciendis iste, unde possimus
            praesentium. Atque quo cumque saepe alias dolores
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
};

export default Test;
