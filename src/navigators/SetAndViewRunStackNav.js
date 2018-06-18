import { StackNavigator } from "react-navigation";
import SetAndViewRunRoutes from "../routes/SetAndViewRunRoutes";

const SetAndViewRunStackNav = StackNavigator(SetAndViewRunRoutes, {
  headerMode: "screen"
});

export default SetAndViewRunStackNav;
