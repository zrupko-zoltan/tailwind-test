import { GiAbstract003, GiAbacus, GiAbstract027 } from "react-icons/gi";
import {
  AiFillCar,
  AiFillAlert,
  AiFillAlipayCircle,
  AiFillCamera,
} from "react-icons/ai";

function SideBar() {
  return (
    <div className="fixed left-0 m-0 top-0 w-16 h-screen flex flex-col bg-primary text-white shadow-lg">
      <SideBarIcon icon={<GiAbacus size="30" />} />
      <SideBarIcon icon={<GiAbstract003 size="30" />} />
      <SideBarIcon icon={<GiAbstract027 size="30" />} />
      <SideBarIcon icon={<AiFillCar size="30" />} />
      <SideBarIcon icon={<AiFillAlert size="30" />} />
      <SideBarIcon icon={<AiFillAlipayCircle size="30" />} />
      <SideBarIcon icon={<AiFillCamera size="30" />} />
    </div>
  );
}

export default SideBar;

function SideBarIcon({ icon }) {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-content group-hover:scale-100">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>
    </div>
  );
}
