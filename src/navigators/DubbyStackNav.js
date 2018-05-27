import { StackNavigator } from "react-navigation";
import DubbyRoutes from "../routes/DubbyRoutes";

const DubbyStackNav = StackNavigator(DubbyRoutes, { headerMode: "screen" });

export default DubbyStackNav;
