import { Link, Outlet } from "react-router-dom";
import image from "../assets/image.png";
const AdminLayout = () => {
  return (
      <div className="w-full">
        <div className="flex justify-between justify-items-stretch w-full">
          <header className="max-w-[230px] w-[100%] bg-white p-4 rounded-xl shadow-md">
            <nav className="flex flex-col">
              <div className="flex items-center mx-auto">
                <div className="">
                  <img src={image} alt="" />
                </div>
                <h6 className="font-medium text-3xl">QuanLogin</h6>
              </div>
              <ul className="w-[100%]  mt-3">
                <li className="">
                  <Link
                    to="/logins"
                    className="flex w-full py-3 px-4 hover:bg-red-300 hover:text-white  duration-200 items-center"
                  >
                    <i className="fa-solid fa-database mr-3"></i>
                    <h1 className="text-[20px]">Logins</h1>
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <section className="w-full">
            <div className="flex justify-between items-center w-[100%] p-5 border">
              <h1 className="text-[25px]">Dash board</h1>
              <input
                type="text"
                placeholder="Search"
                className="px-10 w-[500px] py-3 text-[20px] rounded-full border outline-none"
              />
              <div className="flex items-center gap-5">
                <img
                  className="rounded-full h-[50px] w-[50px]"
                  src="https://res.cloudinary.com/djlylbhrb/image/upload/v1684247943/cld-sample.jpg"
                  alt=""
                />
                <div>
                  <h1 className="font-bold">Nguyễn Viết Quân</h1>
                  <p>Admin</p>
                </div>
              </div>
            </div>
            <div className="my-5">
              <Outlet />
            </div>
          </section>
        </div>
      </div>
  );
};

export default AdminLayout;
