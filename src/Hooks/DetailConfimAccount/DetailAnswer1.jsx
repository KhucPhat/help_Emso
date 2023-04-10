import { Box } from '@mui/material'
import React from 'react'

const DetailAnswer1 = () => {
  return (
    <Box>
        <div>
          <ul>
            <li>           
              Để xác nhận số di động, hãy nhập mã bạn nhận được qua tin nhắn văn
              bản (SMS) vào ô <strong>Xác nhận</strong> hiển thị khi bạn đăng
              nhập. Tìm hiểu việc cần làm nếu bạn
              <a href="https://hocwebchuan.com/reference/cssSection/pr_content.php">
                {" "}
                không nhận được SMS
              </a>
            </li>
            <li>
              Để xác nhận email, hãy nhấp hoặc nhấn vào liên kết trong email mà
              bạn nhận được khi tạo tài khoản. Tìm hiểu việc cần làm nếu bạn
              <a href="https://hocwebchuan.com/reference/cssSection/pr_content.php">
                không tìm thấy email
              </a>{" "}
            </li>
          </ul>
        </div>
        <div>
          <p>
            Khi bạn xác nhận email hoặc số di động, chúng tôi biết mình gửi
            thông tin tài khoản đến đúng chỗ.
          </p>
        </div>
        <div>
          <p>
            Lưu ý: Vui lòng xác nhận email hoặc số di động sớm nhất có thể. Bạn
            có thể không sử dụng được tài khoản của mình khi chưa xác nhận email
            hoặc số di động. Nếu bạn không xác nhận, tài khoản có thể bị xóa sau
            một năm không hoạt động.
          </p>
        </div>
      </Box>
  )
}

export default DetailAnswer1