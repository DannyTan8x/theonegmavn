export default function Footer() {
  return (
    <footer className="footer flex justify-center  py-5">
      <div className="container text-white p-5">
        <div className="flex items-center justify-between">
          <h4 className="text-base md:text-balance font-bold w-3/4">
            CÔNG TY TNHH THE ONE TESTING TECHNOLOGY VIỆT NAM
          </h4>
          <div className="flex gap-2 ">
            <img
              className="object-contain h-5"
              src="assets/f-white.svg"
              alt="Services"
            />
            <img
              className="object-contain h-5"
              src="assets/in-white.svg"
              alt="Services"
            />
          </div>
        </div>
        <ul>
          <li>
            <strong>MSDN :</strong> 0318449051
          </li>
          <li>
            <strong>Email :</strong> service@@theone-gma.vn
          </li>
          <li>
            <strong>Head Office :</strong>V3-37 Vinhomes Grand Park, 512 Nguyễn
            Xiển, Phường Long Bình, Thành Phố Thủ Đức{" "}
          </li>
          <li>
            <strong>Hotline :</strong>0369-614-293{" "}
          </li>
        </ul>
      </div>
    </footer>
  );
}
