import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
export {};
export const AppIcon: React.FC<{ collapsed?: boolean; size?: number }> = ({
    collapsed = false,
    size = 120,
}) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            component={Link}
            to="/requests"
        >
            <img
                src={collapsed ? "/subtrack-v2.png" : "/subtrack-v2.png"}
                width={collapsed ? 25 : size}
            />
        </Box>
    );
};
