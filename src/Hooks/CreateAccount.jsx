import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { styled } from "@mui/styles";

// import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import UserReport from "./UserReport";
import CommonUl from "./CommonUl";

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

const FolderList = [
  {
    id: 1,
    subDetail1: "Tạo tài khoản Emso",
    subDetail2: "Nếu bạn gặp sự cố khi đăng nhập",
    title: "Tạo tài khoản Emso",
    detail1: [
      { li: "Truy cập Emso.com và nhấp vào Tạo tài khoản mới." },
      {
        li: "Nhập tên, email hoặc số điện thoại di động, mật khẩu, ngày sinh và giới tính của bạn.",
      },
      { li: "Nhấp vào Đăng ký." },
      {
        li: "Để hoàn tất quá trình tạo tài khoản, bạn cần xác nhận email hoặc số điện thoại di động của mình.",
      },
    ],
    detail2: [
      {
        li: "Nếu gặp sự cố về mật khẩu, hãy tìm hiểu cách đặt lại mật khẩu.",
      },
      {
        li: "Nếu vẫn không đăng nhập được, hãy tìm hiểu điều cần làm tiếp theo.",
      },
    ],
    detail3: [],
  },
  {
    id: 2,
    title:
      "Tại sao lại yêu cầu tôi thêm số điện thoại di động vào tài khoản của mình?",
    subDetail1:
      "Chúng tôi có thể sử dụng số điện thoại di động của bạn cho các mục đích như:",
    subDetail2:
      "Chúng tôi có thể gợi ý số di động cho bạn dựa trên thông tin nhận được từ những nguồn như:",
    detail1: [
      {
        li: "Giúp bạn đăng nhập. Nếu quên mật khẩu, bạn cần có số di động hoặc địa chỉ email đã cập nhật để đặt lại.",
      },
      {
        li: "Gợi ý Những người bạn có thể biết để bạn có thể kết nối với họ trên Emso.",
      },
      {
        li: "Hiển thị cho bạn quảng cáo phù hợp. Tuy nhiên, chúng tôi không bao giờ bán thông tin cá nhân, bao gồm cả số điện thoại di động của bạn, cho bất kỳ ai.",
      },
      {
        li: "Giữ an toàn cho tài khoản của bạn bằng cách chọn các tính năng như cảnh báo qua email hoặc tin nhắn văn bản về những lần đăng nhập không nhận ra hoặc xác thực 2 yếu tố.",
      },
    ],
    detail2: [
      {
        li: "Điện thoại di động hoặc máy tính bảng của bạn.",
      },
      {
        li: "Thông tin liên hệ do người khác cung cấp trên Emso.",
      },
      {
        li: "Số di động mà bạn đã nhập trước đây nhưng chưa xác nhận.",
      },
    ],
    detail3: [],
  },
  {
    id: 3,
    title: "Tạo mật khẩu Emso mạnh",
    subDetail1: "Khi tạo mật khẩu mới, hãy lưu ý:",

    detail1: [
      {
        li: "Mật khẩu nên dễ nhớ với bạn nhưng khó đoán với người khác.",
      },
      {
        li: "Mật khẩu Emso nên khác với mật khẩu mà bạn sử dụng để đăng nhập tài khoản khác, như email hoặc tài khoản ngân hàng.",
      },
      { li: "Mật khẩu càng dài càng an toàn." },
      {
        li: "Không nên sử dụng email, số điện thoại hay sinh nhật của bạn làm mật khẩu.",
      },
      {
        li: "Tránh sử dụng những từ phổ biến như 'Mật Khẩu' ",
      },
      {
        li: "Sử dụng công cụ quản lý mật khẩu. Có nhiều ứng dụng khác nhau để lưu trữ mật khẩu của bạn một cách an toàn.",
      },
      {
        li: "Đừng chia sẻ mật khẩu với bất kỳ ai, dù là trên mạng hay gặp mặt trực tiếp. Nếu bạn lỡ chia sẻ, hãy đổi mật khẩu càng sớm càng tốt.",
      },
    ],
    detail2: [],
    detail3: [],
  },
  {
    id: 4,
    title:
      "Tôi không thể tạo tài khoản Emso bằng số điện thoại di động của mình.",
    subDetail1:
      "Nếu bạn đang gặp sự cố khi tạo tài khoản bằng số điện thoại di động:",
    subDetail2:
      "Nếu bạn đã có tài khoản Emso với số di động nhưng đã quên mật khẩu:",
    detail1: [
      {
        li: "Nếu bạn nhìn thấy thông báo cho biết không nhận dạng được số di động, hãy đảm bảo bạn nhập chính xác số điện thoại di động của mình. Nhập mã quốc gia (ví dụ: 91 cho Ấn Độ) trước số điện thoại.",
      },
      {
        li: "Nếu nhìn thấy thông báo cho biết đã có tài khoản sử dụng số di động của mình, bạn có thể phải chờ vài ngày để thêm số đó vào tài khoản.",
      },
      { li: "Thử tạo tài khoản bằng email thay vì số di động." },
      {
        li: "Nếu đăng ký tài khoản Emso mới bằng số điện thoại và mật khẩu giống hoặc tương tự với tài khoản đã tạo, bạn sẽ đăng nhập vào tài khoản hiện có.",
      },
    ],
    detail2: [
      {
        li: "Bạn có thể đặt lại mật khẩu và đăng nhập tài khoản.",
      },
      {
        li: "Nếu không có quyền truy cập số di động đó, bạn có thể thử các bước này để đăng nhập lại tài khoản.",
      },
    ],
    detail3: [],
  },
  {
    id: 5,
    title: "Tên bị từ chối khi tạo tài khoản Emso",
    subDetail1: "Nếu bạn đang tiến hành tạo tài khoản cá nhân:",
    detail1: [
      {
        li: "Hãy đảm bảo tên bạn tuân thủ các nguyên tắc của chúng tôi.",
      },
      {
        li: "Thử đăng ký lại trên Emso.com.",
      },
      {
        li: "Nếu bạn vẫn gặp sự cố khi đăng ký hoặc cho rằng tên mình bị từ chối do nhầm lẫn, hãy cho chúng tôi biết.",
      },
    ],
    detail2: [],
    detail3: [],
  },
  {
    id: 6,
    title:
      "Trên Emso, điểm khác biệt giữa tài khoản và trang cá nhân là gì?",
    subDetail1:
      "Bạn phải tạo tài khoản Emso thì mới dùng được Emso. Tài khoản là nơi để bạn:",
    subDetail2:
      "Trang cá nhân này đại diện cho bạn trên Emso và là nơi bạn có thể chia sẻ thông tin về chính mình (ví dụ: sở thích, ảnh, video, thành phố hiện tại và quê quán). Đây cũng là nơi bạn sẽ:",
    subDetail3:
      "Phần cài đặt tài khoản áp dụng cho tất cả các trang cá nhân và bạn có thể truy cập phần cài đặt này thông qua trang cá nhân chính. Chế độ cài đặt trang cá nhân, bao gồm quyền riêng tư và những người bạn chặn, sẽ áp dụng riêng cho từng trang cá nhân. Khi bạn tạo trang cá nhân Facebook bổ sung, phần cài đặt trang cá nhân sẽ tự động được đặt theo cách cài đặt mặc định. Phần cài đặt trang cá nhân có các mục như:",
    detail1: [
      {
        li: "Nhập thông tin về bản thân như tên thường gọi, email, số điện thoại di động, ngày sinh và giới tính. Bạn có thể phải xác nhận rằng đây là tên gọi thường ngày của mình. Tìm hiểu thêm về tên trên Emso.",
      },
      {
        li: "Tạo mật khẩu để đăng nhập tài khoản và truy cập trang cá nhân chính của bạn.",
      },
    ],
    detail2: [
      {
        li: "Sử dụng tên thường gọi.",
      },
      {
        li: "Sử dụng Messenger làm trang cá nhân chính hoặc tạo tài khoản Messenger nhí cho con bạn.",
      },
      {
        li: "Cập nhật danh bạ di động.",
      },
      {
        li: "Quản lý một số phần cài đặt như mọi người có thể tìm và liên hệ với bạn bằng thông tin liên hệ của bạn như thế nào.",
      },
      {
        li: "Truy cập Trang mà bạn quản lý với vai trò quản trị viên.",
      },
      {
        li: "Quản lý các phần cài đặt tài khoản của bạn, chẳng hạn như:",
      },
    ],
    detail3: [
      {
        li: "Quyền riêng tư: Điều chỉnh ai có thể xem những nội dung như bài viết của trang cá nhân.",
      },
      {
        li: "Trang cá nhân và gắn thẻ: Kiểm soát nội dung xuất hiện trên trang cá nhân bằng cách điều chỉnh phần cài đặt cho việc gắn thẻ và xem xét bài viết.",
      },
      {
        li: "Chặn: Quản lý những người bạn chặn đối với từng trang cá nhân. Tìm hiểu thêm về cách chặn trang cá nhân trên Emso.",
      },
      {
        li: "Nhắn tin: Bạn có thể sử dụng Messenger làm trang cá nhân Emso bổ sung. Nếu xóa hoặc vô hiệu hóa một trang cá nhân Emso bổ sung, bạn vẫn có thể sử dụng Messenger.",
      },
    ],
  },
];

console.log(FolderList);

const CreateAccount = () => {
  return (
    <Box sx={{ maxHeight:2000 }}>
      {FolderList.map((item) => {
        return (
          <Accordion
            key={item.id}
            sx={{
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box>
                <MyTypography>{item.title}</MyTypography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <MySubDetail>{item.subDetail1}</MySubDetail>

                {item.detail1.map((e) => {
                  return <CommonUl e={e} />;
                })}
                <div>
                  <MySubDetail>{item.subDetail2}</MySubDetail>

                  {item.detail2.map((e) => {
                    return <CommonUl e={e} />;
                  })}
                </div>
                <div>
                  <MySubDetail>{item.subDetail3}</MySubDetail>
                  {item.detail3.map((e) => {
                    return <CommonUl e={e} />;
                  })}
                </div>
                <UserReport />
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default CreateAccount;
