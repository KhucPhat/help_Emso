import React from "react";

const UserReport = () => {
  return (
    <div
      style={{
        width: "688px",
        height: "104px",
        backgroundColor: "rgb(240,242,245)",
        borderRadius: "10px",
        padding: "16px",
      }}
    >
      <div
        style={{
          width: "328px",
          height: "104px",
          backgroundColor: "rgb(255,255,255)",
          borderRadius: "10px",

          // display: "flex",
        }}
      >
        <div
          style={{
            width: "316px",
            height: "28px",
            padding: "16px 12px 0",
            margin: "-6px",
            fontWeight: "600",
          }}
        >
          Nội dung này có hữu ích không?
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "122px",
              height: "40px",
              background: "rgb(240,242,245)",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              top: "10px",
              left: "15px",
              padding: "0 12px",
              fontWeight: "600",
            }}
          >
            Có
          </div>
          <div
            style={{
              width: "122px",
              height: "40px",
              background: "rgb(240, 242, 245)",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              top: "10px",
              left: "20px",
              fontWeight: "600",
              padding: "0px 12px",
            }}
          >
            Không
          </div>
        </div>
      </div>
      <div
        style={{
          width: "150px",
          height: "36px",
          background: "rgb(228,230,235)",
          padding: "0 12px",
          position: "relative",
          bottom: "36px",
          left: "460px",
          alignItems: "center",
          fontSize: "15px",
          display: "flex",
          fontWeight: "600",
          borderRadius: "10px",
        }}
      >
        Xem toàn bộ bài viết
      </div>
    </div>
  );
};

export default UserReport;
