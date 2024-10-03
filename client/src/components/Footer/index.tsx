import { Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Tổng đài hỗ trợ miễn phí
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">
                <a href="#" className=" hover:underline text-xs">
                  Gọi mua hàng 1800.2097 (7h30 - 22h00)
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-xs">
                  Gọi khiếu nại 1800.2063 (8h00 - 21h30)
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-xs">
                  Gọi bảo hành 1800.2064 (8h00 - 21h00)
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Thông tin và chính sách
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">
                <a href="#" className="hover:underline text-xs">
                  Mua hàng và thanh toán Online
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-xs">
                  Chính sách giao hàng
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-xs">
                  Tra thông tin bảo hành
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-xs">
                  Tra cứu hoá đơn điện tử
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Dịch vụ và thông tin khác
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-2">
                <a href="#" className="hover:underline text-xs">
                  Ưu đãi thanh toán
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-xs">
                  Quy chế hoạt động
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline text-xs">
                  Chính sách bảo mật thông tin cá nhân
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Kết nối với Phone
            </h2>
            <ul className="text-gray-500 flex ml-2 font-medium">
              <li className="mb-2 ml-2">
                <a href="#" className="hover:underline">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                </a>
              </li>
              <li className="mb-2 ml-2">
                <a href="#" className="hover:underline">
                <Youtube />
                </a>
              </li>
              <li className="mb-2 ml-2">
                <a href="#" className="hover:underline">
                <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-16 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
          © 2023 <a href="https://flowbite.com/">Phone™</a>. All Rights
          Reserved.
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <span className="text-xs">Điện thoại iPhone</span>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <span className="text-xs">Điện thoại Vivo</span>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <span className="text-xs">Điện thoại Xiaomi</span>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >

            <span className="text-xs">Điện thoại Samsung Galaxy</span>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <span className="text-xs"> Điện thoại </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
