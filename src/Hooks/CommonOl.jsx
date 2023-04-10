import React from "react";
import { styled } from "@mui/styles";
import { Typography } from "@mui/material";

const MyDetail = styled(Typography)({
  fontFamily: "sans-serif",
  fontSize: 17,
  fontWeight: 400,
});
const CommonOl = ({ item }) => {
  return (
    <div>
      <MyDetail>{item.subText}</MyDetail>
      <ol>
        {item.text.map((i) => {
          return (
            <li>
              <MyDetail>{i.li}</MyDetail>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default CommonOl;
