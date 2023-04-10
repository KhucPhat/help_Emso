import { Box, Divider } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "1080px",
        height: "250px",
        backgroundColor: "rgb(240,242,245)",
        marginTop: "144px",
      }}
    >
      <Box
        sx={{
          width: "840px",
          height: "188px",
          margin: "0 120px",
          padding: "16px 0",
        }}
      >
        <Box
          sx={{
            width: "840px",
            height: "156px",
            padding: "16px 6px",
            display: "grid",
            gridTemplateColumns: "auto auto auto",
          }}
        >
          <Box
            sx={{
              height: "36px",
              color: "rgb(101,103,107)",
              width: "270px",
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Giới thiệu
          </Box>
          <Box
            sx={{
              height: "36px",
              color: "rgb(101,103,107)",
              width: "270px",
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Quyền riêng tư
          </Box>
          <Box
            sx={{
              height: "36px",
              color: "rgb(101,103,107)",
              width: "270px",
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Điểu khoản và chính sách
          </Box>
          <Box
            sx={{
              height: "36px",
              color: "rgb(101,103,107)",
              width: "270px",
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Lựa chọn quảng cáo
          </Box>
          <Box
            sx={{
              height: "36px",
              color: "rgb(101,103,107)",
              width: "270px",
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Nghề nghiệp
          </Box>
          <Box
            sx={{
              height: "36px",
              color: "rgb(101,103,107)",
              width: "270px",
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Cookie
          </Box>
          <Box
            sx={{
              height: "36px",
              color: "rgb(101,103,107)",
              width: "270px",
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Tạo quảng cáo
          </Box>
          <Box
            sx={{
              height: "36px",
              color: "rgb(101,103,107)",
              width: "270px",
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Tạo trang
          </Box>
        </Box>
        <Divider />
        {/*  */}
        <Box
          sx={{
            width: "840px",
            height: "61px",
            margin: "6px 0",
            padding: "16px 0 0 ",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/h9b1AHfIb8K.png"
              width={100}
              height={19}
            />
          </Box>
          <Box
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              color: "rgb(101,103,107)",
            }}
          >
            {" "}
            © 2023 Meta
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
