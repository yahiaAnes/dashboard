import { itemProps } from "@/utils/faker";

interface MainProps {
  item: itemProps;
}
function Main({ item }: MainProps) {
  // relative before:absolute before:contents-[''] before:top-0 before:left-0 before:bg-[#00000082] before:w-full before:h-full before:z-[-1]

  return (
    <>
      {/* <div
      className=" border bg-white w-[150px] cursor-pointer pb-2 "
      // style={{
      //   background: `url(${item.images[0]})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   // backgroundRepeat: "no-repeat",
      // }}
    >
      <div className=" w-full ">
        <img
          src={item.images[0]}
          alt=""
          className="w-full h-[100px] object-cover "
        />
        <h2 className=" px-2 capitalize font-semibold mt-2 ">
          Sub-Categories
        </h2>
      </div>
    </div> */}
      <div
        className=" w-[140px] cursor-pointer pb-2 "
        // style={{
        //   background: `url(${item.images[0]})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   // backgroundRepeat: "no-repeat",
        // }}
      >
        <div className=" w-full ">
          <div className=" bg-white border p-4 rounded-xl ">
            <img
              src={item.images[0]}
              alt=""
              className="w-[100px] mx-auto h-[100px] object-cover rounded "
            />
          </div>
          <h2 className=" px-2 capitalize font-semibold mt-2 text-center ">
            Sub-Categories
          </h2>
        </div>
      </div>
    </>
  );
}

export default Main;
