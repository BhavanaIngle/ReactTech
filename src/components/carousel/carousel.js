import { useSelector, useDispatch } from "react-redux";
import { setIncrease, setDecrease } from "../actions/carouselActions";

import image1 from "../../images/img1.jpg";
import image2 from "../../images/img2.jpg";

const Carousel = () => {
  const position = useSelector((state) => state);
  const dispatch = useDispatch();

  const next = () => dispatch(setIncrease(position + 1));
  const prev = () => dispatch(setDecrease(position - 1));

  const images = [image1, image2];

  return (
    <div className="container">
      <div className="arrow" onClick={prev}>
        &#60;
      </div>
      <img className="photo" src={images[position]} alt="techlife" />
      <div className="arrow" onClick={next}>
        &#62;
      </div>
    </div>
  );
};

export default Carousel;
