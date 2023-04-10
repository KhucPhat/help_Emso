import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import ConfimAccount from "../Hooks/ConfimAccount";
import CreateAccount from "../Hooks/CreateAccount";

const Account = () => {
  return (
    <Box
      sx={{
        width: "1080px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ width: "768px", height: "833px", padding: "20px 16px 48px 16px" }}
      >
        <a
          href="https://vi-vn.facebook.com/help/463972400461409?helpref=breadcrumb"
          style={{ color: "rgb(24,118,242)", marginBottom: "20px" }}
        >
          Sử dụng EmsoSocial
        </a>
        <div style={{ height: "33px", paddingBottom: "16px" }}>
          <p
            style={{
              color: "rgb(51, 51, 51)",
              fontWeight: "700",
              fontSize: "24px",
            }}
          >
            Cách tạo tài khoản
          </p>
        </div>

        <div style={{ height: "648px", marginBottom: "48px" }}>
          {/* Box lơn nhất chứa các danh mục */}
          <div style={{ height: "324px", margin: "24px 0" }}>
            {/* Box chứa danh mục tạo tài khoản */}
            <div style={{ height: "24px", margin: "48px 0 16px" }}>
              <p style={{ fontSize: "20px", color: "#333", fontWeight: "700" }}>
                Tạo tài khoản
              </p>
            </div>
            <CreateAccount  />
            <div style={{ height: "24px", margin: "48px 0 16px" }}>
              <p style={{ fontSize: "20px", color: "#333", fontWeight: "700" }}>
                Xác nhận tài khoản
              </p>
              <ConfimAccount />
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Account;
