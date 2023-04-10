import { Box } from "@mui/material";
import React from "react";
import CommonOl from "../CommonOl";

const listText = [
  {
    id: 1,
    subText: "Kiểm tra số mà bạn đã nhập",
    text: [
      { li: "Nhấp vào đây để xem số di động bạn đã nhập." },
      {
        li: "Nếu bạn đã nhập sai số, hãy nhấp vào Cập nhật thông tin liên hệ.",
      },
      { li: "Nhập số đúng và nhấp vào Thêm." },
    ],
  },
  {
    id: 2,
    subText: "Gửi lại SMS",
    text: [{ li: "Nhấp vào đây." }, { li: "Nhấp vào Gửi lại SMS." }],
  },
  {
    id: 3,
    subText: "Sử dụng email",
    text: [
      { li: "Nhấp vào đây." },
      { li: "Nhấp vào Cập nhật thông tin liên hệ." },
      { li: "Nhập email của bạn và nhấp vào Thêm." },
      { li: "Xác nhận tài khoản Facebook bằng email thay vì số di động." },
    ],
  },
  {
    id: 2,
    subText: "Gửi lại SMS",
    text: [{ li: "Nhấp vào đây." }, { li: "Nhấp vào Gửi lại email." }],
  },
];
const DetailAnswer2 = () => {
  return (
    <Box>
      <div>
        Chúng tôi rất tiếc khi bạn gặp sự cố trong quá trình xác nhận số di động
        của mình. Dưới đây là một số cách bạn có thể làm thử:
      </div>
      <div>
        {listText.map((item) =>{
          return(<CommonOl item={item} />)
        })}
      </div>
    </Box>
  );
};

export default DetailAnswer2;
