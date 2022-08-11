import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Profile from "./routes/Profile";

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}