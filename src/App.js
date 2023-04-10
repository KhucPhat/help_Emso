import "./App.css";
import { Box, Typography,Link } from "@mui/material";
import Header from "./components/Header";
import Category from "./components/Categogy";
import ListHelper  from "./components/helpers_emso/ListHelpers";
import ListItemHelpers from "./components/helpers_emso/ListItemHelpers";

const listHelpers = [
  {
    id: 'personal_page',
    title: 'Trang cá nhân của bạn',
    banner: 'https://static.xx.fbcdn.net/assets/?revision=1329671031208790&name=desktop-creating-an-account-banner&density=1',
    subText: [
      {
        id: 'text_one',
        label: <Typography>
          <Link href="#" underline="hover">
  Trang cá nhân
</Link> nói lên con người bạn.Bạn có thể chọn<Link href="#" underline="hover"> nội dung muốn chia sẻ</Link>,chẳng hạn như sở thích,
 ảnh và thông tin cá nhân như quê quán và đối tượng được chia sẻ. Bạn có thể xem bài viết của riêng mình và bài viết có gắn thẻ bạn.
        </Typography>
      },
      {
        id: 'text_two',
        label: <Typography> Khi bạn muốn thêm bạn bè trên Facebook,hãy lưu ý:
        </Typography>,
        subLabel: [
          {
            id: 'sbl_1',
            sb_label: <Typography>Bạn nên gửi lời mời kết bạn đến những người mà mình biết và tin cậy.<Link>
            Thêm bạn bè</Link> bằng cách  tìm kiếm họ hoặc thêm trực tiếp từ <Link>Những người bạn có thể biết</Link> </Typography>
          },
          {
            id: 'sbl_2',
            sb_label: <Typography>Bạn nên gửi lời mời kết bạn đến những người mà mình biết và tin cậy.<Link>
            Thêm bạn bè</Link> bằng cách  tìm kiếm họ hoặc thêm trực tiếp từ <Link>Những người bạn có thể biết</Link> </Typography>
          },
          {
            id: 'sbl_3',
            sb_label: <Typography>Bạn nên gửi lời mời kết bạn đến những người mà mình biết và tin cậy.<Link>
            Thêm bạn bè</Link> bằng cách  tìm kiếm họ hoặc thêm trực tiếp từ <Link>Những người bạn có thể biết</Link> </Typography>
          },
          {
            id: 'sbl_4',
            sb_label: <Typography>Bạn nên gửi lời mời kết bạn đến những người mà mình biết và tin cậy.<Link>
            Thêm bạn bè</Link> bằng cách  tìm kiếm họ hoặc thêm trực tiếp từ <Link>Những người bạn có thể biết</Link> </Typography>
          },
        ]
      },
      {
        id: 'text_three',
        label_bold: 'Tìm hiểu thêm',
        subLabel: [
          {
            id: 'sbl_1',
            sb_label: <Typography><Link> Công cụ gây quỹ </Link> dành cho tổ chức từ thiện </Typography>
          },
          
          {
            id: 'sbl_2',
            sb_label: <Typography>Bạn nên gửi lời mời kết bạn đến những người mà mình biết và tin cậy.<Link>
            Thêm bạn bè</Link> bằng cách  tìm kiếm họ hoặc thêm trực tiếp từ <Link>Những người bạn có thể biết</Link> </Typography>
          },
          {
            id: 'sbl_3',
            sb_label: <Typography><Link> Công cụ gây quỹ </Link> dành cho tổ chức từ thiện </Typography>
          },
          {
            id: 'sbl_4',
            sb_label: <Typography><Link> Công cụ gây quỹ </Link> dành cho tổ chức từ thiện </Typography>
          },
        ]
      },
    ],
    subTitle: [
      {
        id: 'title_one',
        sb_title: 'Ảnh 360',
      },
      {
        id: 'title_two',
        sb_title: 'Tôi có thể biết ai đang xem trang cá nhân Facebook của mình không?',
      },
      {
        id: 'title_three',
        sb_title: 'Khóa bảo vệ trang cá nhân Facebook',
      },
      {
        id: 'title_for',
        sb_title: 'Ảnh ',
      },
    ],
     subCard: [
      {
        id:'card_one',
        icon: 'https://static.xx.fbcdn.net/assets/?revision=1329671031208790&name=desktop-apps-mobile-and-desktop-icon&density=1',
        title_card: 'Trang chủ của bạn',
        sub_card: 'Tìm hiểu cách hoạt động của Bảng tin, kiểm soát nội dung bạn thấy trong Bảng tin và bày tỏ cảm xúc về bài viết.'
      },
      {
        id:'card_two',
        icon: 'https://static.xx.fbcdn.net/assets/?revision=1329671031208790&name=desktop-apps-mobile-and-desktop-icon&density=1',
        title_card: 'Trang chủ của bạn',
        sub_card: 'Tìm hiểu cách hoạt động của Bảng tin, kiểm soát nội dung bạn thấy trong Bảng tin và bày tỏ cảm xúc về bài viết.'
      },
      {
        id:'card_three',
        icon: 'https://static.xx.fbcdn.net/assets/?revision=1329671031208790&name=desktop-apps-mobile-and-desktop-icon&density=1',
        title_card: 'Trang chủ của bạn',
        sub_card: 'Tìm hiểu cách hoạt động của Bảng tin, kiểm soát nội dung bạn thấy trong Bảng tin và bày tỏ cảm xúc về bài viết.'
      }
     ],
     boxHelper: 
      <Typography>Bài viết này đề cập việc sử dụng tin nhắn trên Facebook.
         Để được trợ giúp về ứng dụng Messenger hoặc messenger.com, hãy truy cập <Link href="#" underline="hover">Trung tâm trợ giúp Messenger </Link>
        . Bạn cũng có thể <Link >tìm hiểu cách cài đặt ứng dụng Messenger.</Link></Typography>
     
  }
]

const listItemHelpers = [
  {
    id: 'your_person',
    title: 'Trang cá nhân của bạn',
    title_helper: 'Thêm và chỉnh sửa thông tin trên trang cá nhân của bạn',
    list_item: [
      {
        id: 'info',
        title_item: 'Thông tin cơ bản về trang cá nhân',
        item_child: 
        [
          {
            id: '1',
            title_child: 'Cách đổi tên trên Facebook',
            item_title: [
              {
                id: 'item_one',
                text: <Typography>Cách đổi tên trên Facebook:</Typography>,
                info_child: [
                  {
                    id: '1',
                    label: <Typography>Xem lại <Link>các tiêu chuẩn đặt tên </Link> của chúng tôi.</Typography>
                  },
                  {
                    id: '2',
                    label: <Typography>Nhấp vào ảnh đại diện của bạn ở trên cùng bên phải Facebook.</Typography>
                  },
                  {
                    id: '3',
                    label: <Typography>Chọn <strong>Cài đặt & quyền riêng tư</strong>, rồi nhấp vào <strong>Cài đặt.</strong></Typography>,
                    childrent: [
                      {
                        id: '1',
                        childrent_label: <Typography><strong>Công khai:</strong> Bất kỳ ai cũng có thể xem ảnh</Typography>
                      },
                      {
                        id: '2',
                        childrent_label: <Typography><strong>Bạn bè của người đóng góp cho album:</strong>Người đóng góp, bạn bè của người đóng góp, người được 
                        gắn thẻ và bạn bè của người được gắn thẻ đều có thể xem ảnh.</Typography>
                      },
                      {
                        id: '3',
                        childrent_label: <Typography><strong>Chỉ người đóng góp cho album:</strong> Người đóng góp và người được gắn thẻ có thể xem ảnh.</Typography>
                      }
                    ]
                  },
                  {
                    id: '4',
                    label: <Typography>Nhấp vào <strong>Tên.</strong></Typography>
                  },
                  {
                    id: '5',
                    label: <Typography>Nhập tên bạn và nhấp vào <strong>Xem lại thay đổi.</strong></Typography>
                  },
                  {
                    id: '6',
                    label: <Typography>Nhập mật khẩu của bạn, rồi nhấp vào <strong>Lưu thay đổi.</strong></Typography>
                  }
  
                ]
              },
              {
                id: 'item_two',
                text: <Typography>Nếu bạn gặp sự cố khi đổi tên, hãy <Link href="#" underline="hover"> điền vào mẫu này</Link> để cho chúng tôi biết. Bạn chỉ có thể đổi tên 60 ngày một lần.</Typography>
              }
            ]
          },
          {
            id: '2',
            title_child: 'Làm cách nào để thêm hoặc chỉnh sửa phần giới thiệu trên trang cá nhân Facebook của tôi?',
            box_child: <Typography>Phần <strong>Giới thiệu</strong> tách biệt với phần thông tin cơ bản trên trang cá nhân của bạn.
               Tìm hiểu cách <Link href='#' underline="hover">cập nhật thông tin cơ bản</Link> như địa chỉ email và số điện thoại.</Typography>,
            item_title: [
              {
                id: '1',
                text: <Typography>Một số thông tin trên trang cá nhân Facebook sẽ luôn hiển thị công khai. Ví dụ: ảnh đại diện,
                   ảnh bìa và tên sẽ luôn hiển thị công khai để mọi người dễ nhận ra bạn nếu họ muốn gửi lời mời kết bạn.</Typography>
              },
              {
                id: '2',
                text: <Typography>Thông tin trong phần <strong>Giới thiệu</strong> của trang cá nhân luôn hiển thị công khai, 
                  nhưng bạn có thể chọn thông tin mà mình muốn thêm vào phần <strong>Giới thiệu.</strong></Typography>
              }
            ],
            item_textBold: [
              {
                id: '1',
                text_bold: 'Cách thêm hoặc chỉnh sửa phần Giới thiệu trên trang cá nhân:',
                text_child: [
                  {
                    id: '1',
                    label_child: <Typography>Nhấp vào ảnh đại diện của bạn ở trên cùng bên phải Facebook.</Typography>
                  },
                  {
                    id: '2',
                    label_child: <Typography>Trong phần Giới thiệu bên dưới ảnh đại diện, nhấp vào <strong>Chỉnh sửa chi tiết.</strong></Typography>
                  }
                ]
              },{
                id: '2',
                text_bold: 'Thêm ảnh và tin vào phần đang chú ý',
                text_child: [
                  {
                    id: '1',
                    label_child: <Typography>Khi bạn thêm ảnh và tin vào phần <strong> Đáng chú ý:</strong></Typography>,
                    item_textChild: [
                      {
                        id: '1',
                        textChild: <Typography>Hành động này sẽ tạo bản sao của ảnh hoặc tin gốc. 
                          Điều này có nghĩa là lượt thích và bình luận từ ảnh hoặc tin gốc sẽ không xuất hiện trên ảnh/tin đáng chú ý.</Typography>,
                        styleList: {
                          listStyleType: 'disc'
                        }
                      },
                      {
                        id: '2',
                        textChild: <Typography>Hành động này sẽ tạo bản sao của ảnh hoặc tin gốc. 
                          Điều này có nghĩa là lượt thích và bình luận từ ảnh hoặc tin gốc sẽ không xuất hiện trên ảnh/tin đáng chú ý.</Typography>,
                        styleList: {
                          listStyleType: 'disc'
                        } 
                      },
                      {
                        id: '3',
                        textChild: <Typography>Hành động này sẽ tạo bản sao của ảnh hoặc tin gốc. 
                          Điều này có nghĩa là lượt thích và bình luận từ ảnh hoặc tin gốc sẽ không xuất hiện trên ảnh/tin đáng chú ý.</Typography>,
                        styleList: {
                          listStyleType: 'disc'
                        } 
                      },
                    ]
                  },
                  {
                    id: '2',
                    label_child: <Typography>Cách thêm ảnh hoặc tin vào phần<strong> Đáng chú ý:</strong></Typography>,
                    item_textChild: [
                      {
                        id: '1',
                        textChild: <Typography>Nhấp vào ảnh đại diện của bạn ở trên cùng bên phải Facebook.</Typography>,
                        styleList: {listStyleType: 'auto'}
                      },
                      {
                        id: '2',
                        textChild: <Typography>Trong phần Giới thiệu, nhấp vào Chỉnh sửa phần Đáng chú ý.</Typography>,
                        styleList: {listStyleType: 'auto'}
                      },
                      {
                        id: '3',
                        textChild: <Typography>Trong phần Giới thiệu, nhấp vào Chỉnh sửa phần Đáng chú ý.</Typography>,
                        styleList: {listStyleType: 'auto'}
                      },
                      {
                        id: '4',
                        textChild: <Typography>Trong phần Giới thiệu, nhấp vào Chỉnh sửa phần Đáng chú ý.</Typography>,
                        styleList: {listStyleType: 'auto'}
                      },
                      {
                        id: '5',
                        textChild: <Typography>Trong phần Giới thiệu, nhấp vào Chỉnh sửa phần Đáng chú ý.</Typography>,
                        styleList: {listStyleType: 'auto'}
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

function App() {
  return (
    <Box>
    <Header />
    <Box sx={{ display: "flex" }}>
      <Category />
      <Box sx={{width: '100%'}}>
       {/* <ListHelper listHelpers={listHelpers} /> */}
       <ListItemHelpers listItemHelpers={listItemHelpers} />
      </Box>
    </Box>
  </Box>
  );
}

export default App;
