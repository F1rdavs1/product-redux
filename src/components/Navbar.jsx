import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function ResponsiveAppBar() {
  const likeCount = useSelector((state) => state.likeList)?.length || 0;
  const buyCount = useSelector((state) => state.buyList)?.length || 0;
  const saveCount = useSelector((state) => state.savedProduct)?.length || 0;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-4 ">
              <NavLink
                to={"/"}
                className="text-white text-lg font-mono hover:bg-[#8ad21e] duration-300 hover:rounded-[10px]  font-bold  flex items-center justify-center px-[20px] py-[5px] "
              >
                <AdbIcon
                  sx={{
                    display: { xs: "none", md: "flex justify-between" },
                    mr: 1,
                  }}
                />
                ALL Products
              </NavLink>
              <div className="flex items-center space-x-3">
                <Badge badgeContent={likeCount} color="error" showZero>
                  <NavLink
                    to={"/liked"}
                    className="text-white  font-bold  px-[10px] py-[7px] hover:bg-[#8ad21e] duration-300 hover:rounded-[10px] "
                  >
                    Liked
                  </NavLink>
                </Badge>
                <Badge badgeContent={saveCount} color="secondary" showZero>
                  <NavLink
                    to={"/saved"}
                    className="text-white  font-bold  px-[10px] py-[7px] hover:bg-[#8ad21e] duration-300 hover:rounded-[10px] "
                  >
                    Saved
                  </NavLink>
                </Badge>
                <Badge badgeContent={buyCount} color="success" showZero>
                  <NavLink
                    to={"/order"}
                    className="text-white  font-bold  px-[10px] py-[7px] hover:bg-[#8ad21e] duration-300 hover:rounded-[10px] "
                  >
                    Order
                  </NavLink>
                </Badge>
              </div>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
