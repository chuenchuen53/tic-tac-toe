import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  retry: () => void;
}

export default function Loading(props: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <div>
        <CircularProgress />
      </div>
      <div>
        <Button variant="contained" onClick={props.retry}>
          Reload
        </Button>
      </div>
    </Box>
  );
}
