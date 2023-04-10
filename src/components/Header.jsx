import { Box, Button, Typography } from "@mui/material";
import OutboxIcon from "@mui/icons-material/Outbox";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomStyle:'ridge'
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", padding: "0 12px 0 12px" }}
      >
        <img
          src="https://www.facebook.com/images/fb_icon_325x325.png"
          alt=""
          width={40}
        />
        <Typography
          sx={{ marginLeft: "5px", fontSize: "17px", fontWeight: "600" }}
        >
          Trung tâm trợ giúp
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{width: '40px',
height: '40px',
borderRadius: '50%',
backgroundColor: 'rgb(228,230,235)',
marginRight: '20px',
display: 'flex',
alignItems: 'center',
justifyContent: 'center'}}>
        <OutboxIcon sx={{}} />
        </Box>
        <Button >
  <Typography sx={{width: '102px',
marginRight: '10px',
height: '40px',
fontWeight: '600',
color: 'black',
backgroundColor: 'rgb(228,230,235)',
padding: '0 12px',
display: 'flex',
alignItems: 'center',
justifyContent: 'center'}}>
    tiếng việt
  </Typography>
</Button>
      </Box>
    </Box>
  );
};

export default Header;
{
  /* <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" width={40} /> */
}
