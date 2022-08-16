import Header from './components/Header'
import { Outlet } from "react-router-dom";
import VerticalNavBar from './components/VerticalNavBar';

export default function App() {
  return (
    <>
      <Header />
      <VerticalNavBar />
      <Outlet />
    </>
  );
}