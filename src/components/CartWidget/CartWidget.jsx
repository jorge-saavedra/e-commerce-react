import { BsFillCartCheckFill } from "react-icons/bs";

import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div class="icon-bar mr-0 d-none d-md-flex">
      <BsFillCartCheckFill size={30} />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
