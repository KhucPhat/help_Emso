import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DetailAnswer1 from "./DetailConfimAccount/DetailAnswer1";
import DetailAnswer2 from "./DetailConfimAccount/DetailAnswer2";
import DetailAnswer3 from "./DetailConfimAccount/DetailAnswer3";
import { styled } from "@mui/styles";
import UserReport from "./UserReport";


const listConfim = [
  {
    id: 1,
    title:
      "Hoàn tất quá trình tạo tài khoản Facebook và xác nhận email hoặc số di động",
    detail: <DetailAnswer1 />,
  },
  {
    id: 2,
    title:
      "Tôi không nhận được mã từ Facebook để xác nhận số điện thoại di động của mình.",
    detail: <DetailAnswer2 />,
  },
  {
    id: 3,
    title: "Tìm email xác nhận đăng ký Facebook",
    detail: <DetailAnswer3 />,
  },
];

const MyTypography = styled(Typography)({
  fontSize: "17px",
  fontWeight: 500,
  fontFamily: "inherit",
});
const MySubDetail = styled(Typography)({
  fontFamily: "sans-serif",
  fontSize: 20,
  fontWeight: 700,
});
const ConfimAccount = () => {
  console.log(listConfim);
  return (
    <Box sx={{}}>
      {listConfim.map((item) => {
        return (
          <Accordion
            key={item.id}
            sx={{
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <MyTypography>{item.title}</MyTypography>
            </AccordionSummary>
            <AccordionDetails>
              <MySubDetail>{item.detail}</MySubDetail>
              <UserReport/>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default ConfimAccount;
