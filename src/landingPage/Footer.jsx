import footerImg from "../assets/dubizzle-group.png"
const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="h-[62px] w-[118px] py-4">
        <img src={footerImg} alt="" />
      </div>
      <h2 className="font-semibold text-[12px]">© dubizzle.com 2025, All Rights Reserved.</h2>
    </div>
  );
}

export default Footer
