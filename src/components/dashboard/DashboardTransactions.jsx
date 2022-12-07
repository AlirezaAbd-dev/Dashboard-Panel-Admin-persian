import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { mockTransactions } from "../../data/mockData";
import DashboardTransaction from "./DashboardTransaction";
import {tokens} from "../../utils/tokens.js";

const DashboardTransactions = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
      overflow="auto"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`4px solid ${colors.grey[900]}`}
        color={colors.grey[100]}
        p="15px"
      >
        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
          تراکنش های اخیر
        </Typography>
      </Box>
      {mockTransactions.map((transaction, i) => (
        <DashboardTransaction
          key={`${transaction.txId}-${i}`}
          transaction={transaction}
        />
      ))}
    </Box>
  );
};

export default DashboardTransactions;
