import { Box } from '@mui/material'
import React from 'react'

const DetailAnswer3 = () => {
  return (
    <Box>
  <div>Nếu bạn tạo tài khoản Facebook bằng email, chúng tôi sẽ gửi liên kết xác nhận đến email đó. Nếu bạn không tìm thấy email xác nhận:
    <ul>
      <li>
        Hãy kiểm tra thư mục thư rác. Nếu bạn dùng Gmail, hãy kiểm tra
        email thuộc hạng mục <b>Xã hội</b>
      </li>
      <li>
        Đảm bảo rằng bạn đã nhập đúng email. Nếu nhập sai email, bạn có
        thể <a href="https://mui.com/system/styles/basics/">thay đổi</a>và
        gửi lại email
      </li>
      <li>
        Bạn có thể thử tạo tài khoản EmsoSocial bằng số điện thoại di động
        thay vì email.
      </li>
    </ul>
  </div>
  <div>
    <p>
      Nếu bạn tạo tài khoản bằng số điện thoại di động nhưng chưa nhận
      được SMS kèm theo mã xác nhận, hãy{" "}
      <a href="https://mui.com/system/styles/basics/">thử các bước này</a>
    </p>
  </div>
</Box>
  )
}

export default DetailAnswer3