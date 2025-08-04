import * as React from 'react';
import Button from '@mui/material/Button';

export default function DisableElevation({buttonName}) {
  return (
    <Button variant="contained" disableElevation>
      {buttonName}
    </Button>
  );
}