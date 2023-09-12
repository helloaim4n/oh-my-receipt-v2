import { useEffect, useState} from "react";
import { SvgIcon } from "../SvgIcon";
import { ScrollUpContainer } from "./styles";
import { getScroll } from "../utils/getWindow";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const checkScrollTop = (event: any) => {
    const offsetFromTop = getScroll(event.target, true);

    if (!showScroll && offsetFromTop > 350) {
      setShowScroll(true);
    } else if (offsetFromTop <= 350) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollUp = () => {
    const element = document.querySelector("#intro") as HTMLDivElement;

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    } else {
      console.log("Element with ID 'intro' not found.");
    }
  };
  

  return (
    <ScrollUpContainer onClick={scrollUp} show={showScroll}>
      <SvgIcon src="scroll-top.svg" width="20px" height="20px" />
    </ScrollUpContainer>
  );
};

export default ScrollToTop;
