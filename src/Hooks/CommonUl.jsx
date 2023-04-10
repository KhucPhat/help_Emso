import { Typography } from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";


const MyDetail = styled(Typography)({
  fontFamily:'sans-serif',
  fontSize:17,
  fontWeight:400
})

const CommonUl = (props) => {
  const { e  } = props;
  console.log(props)
  return (
    <div> 
      <ul>
        <li>
        <MyDetail>{e.li}</MyDetail>
        </li>
      </ul>
    </div>
  );
};

export default CommonUl;
