import { Route, Routes, Navigate } from "react-router-dom";
import Bar from "../scenes/bar/index.jsx";
import Contacts from "../scenes/contacts/index.jsx";
import Dashboard from "../scenes/dashboard/index.jsx";
import FAQ from "../scenes/faq/index.jsx";
import Form from "../scenes/form/index.jsx";
import Geography from "../scenes/geography/index.jsx";
import Invoices from "../scenes/invoices/index.jsx";
import Line from "../scenes/line/index.jsx";
import Pie from "../scenes/pie/index.jsx";
import Team from "../scenes/team/index.jsx";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/line" element={<Line />} />
      <Route path="/geography" element={<Geography />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routing;
