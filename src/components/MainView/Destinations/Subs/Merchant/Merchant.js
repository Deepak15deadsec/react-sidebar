import MotionHoc from "./MotionHoc";

const MerchantComponent = () => {
  return (
      <div className="w-96 h-96 bg-blue-500">
           <p className ="text-red-500">Merchant</p>
        
      </div>
  )







};

const Merchant = MotionHoc(MerchantComponent);

export default Merchant;