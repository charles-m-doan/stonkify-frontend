import GeneralComponents from "./GeneralComponents";
import Html from "../Html/Html";
import Api from "../Api/Api";
import logoAvatar from "../../images/memeMan.png";

export default function() {
  return new SkeletonViewComponents();
}

class SkeletonViewComponents {
  renderSkeletonView() {
    const app = GeneralComponents().getAppContext();
    GeneralComponents().renderSideBar();
    GeneralComponents().renderContentPane();
  }
}
