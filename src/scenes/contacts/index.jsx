import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { tokens } from "../../utils/tokens.js";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "registrarId",
      headerName: "آیدی ثبت نام",
    },
    {
      field: "name",
      headerName: "نام",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "سن",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "شماره تلفن",
      flex: 1,
    },
    {
      field: "email",
      headerName: "ایمیل",
      flex: 1,
    },
    {
      field: "addres",
      headerName: "آدرس",
      flex: 1,
    },
    {
      field: "city",
      headerName: "شهر",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "کد زیپ",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="اطلاعات کاربران" subtitle="صفحه مدیریت کاربران" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-vertualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
