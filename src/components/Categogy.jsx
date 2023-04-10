import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ReportIcon from "@mui/icons-material/Report";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BadgeIcon from "@mui/icons-material/Badge";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/styles";

const MyCategory = styled(Typography)({
  fontSize: 17,
  fontWeight: 600,
  fontFamily:'sans-serif'
});

const Category = () => {
  const [tt, setTt] = React.useState(false);

  const handleClickTt = () => {
    setTt(!tt);
  };
  //
  const [mng, setMng] = React.useState(false);

  const handleClickMng = () => {
    setMng(!mng);
  };
  //
  const [pri, setPri] = React.useState(false);

  const handleClickPri = () => {
    setPri(!pri);
  };
  //
  const [rp, setRp] = React.useState(false);

  const handleClickRp = () => {
    setRp(!rp);
  };
  return (
    <Box sx={{ width: "360px", height: "100vh", borderRightStyle: "ridge" }}>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItemButton onClick={handleClickTt}>
          <ListItemIcon>
            <OfflineBoltIcon sx={{ color: "rgb(5,5,5)" }} />
          </ListItemIcon>
          <ListItemText>
            <MyCategory>Sử dụng tài khoản</MyCategory>
          </ListItemText>
          {tt ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={tt} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AccountCircleIcon sx={{ color: "rgb(5,5,5)" }} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontSize: "17px",
                  color: "rgb(5,5,5)",
                  fontWeight: "600",
                }}
                primary="Cách tạo tài khoản"
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AccountBoxIcon sx={{ color: "rgb(5,5,5)" }} />
              </ListItemIcon>
              <ListItemText primary="Trang cá nhân của bạn" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PersonAddIcon sx={{ color: "rgb(5,5,5)" }} />
              </ListItemIcon>
              <ListItemText primary="Kết bạn" />
            </ListItemButton>
          </List>
        </Collapse>
        {/*  */}
        <ListItemButton onClick={handleClickMng}>
          <ListItemIcon>
            <ManageAccountsIcon sx={{ color: "rgb(5,5,5)" }} />
          </ListItemIcon>
          <ListItemText>
            <MyCategory>Quản lý tài khoản</MyCategory>
          </ListItemText>
          {mng ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={mng} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <VpnKeyIcon sx={{ color: "rgb(5,5,5)" }} />
              </ListItemIcon>
              <ListItemText primary="Đăng nhập và mật khẩu" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PsychologyIcon sx={{ color: "rgb(5,5,5)" }} />
              </ListItemIcon>
              <ListItemText primary="Cài đặt tài khoản" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <BadgeIcon  sx={{ color: "rgb(5,5,5)" }}/>
              </ListItemIcon>
              <ListItemText primary="Tên trên EmsoSocial" />
            </ListItemButton>
          </List>
        </Collapse>
        {/*  */}
        <ListItemButton onClick={handleClickPri}>
          <ListItemIcon>
            <AdminPanelSettingsIcon  sx={{ color: "rgb(5,5,5)" }}/>
          </ListItemIcon>
          <ListItemText>
            <MyCategory>Quyền riêng tư, an toàn và bảo mật</MyCategory>
          </ListItemText>
          {pri ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={pri} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder sx={{ color: "rgb(5,5,5)" }} />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
        {/*  */}
        <ListItemButton onClick={handleClickRp}>
          <ListItemIcon>
            <ReportIcon sx={{ color: "rgb(5,5,5)" }} />
          </ListItemIcon>
          <ListItemText>
            <MyCategory>Chính sách và báo cáo</MyCategory>
          </ListItemText>
          {rp ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={rp} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder sx={{ color: "rgb(5,5,5)" }} />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Box>
  );
};

export default Category;
