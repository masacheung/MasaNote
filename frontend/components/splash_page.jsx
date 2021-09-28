import React from "react";
import NavBarContainer from "./navbar/navbar_container"
import Splash from "./splash_page/splash";

import {AuthRoute} from '../util/route_util';

const SplashPages = () => (
    <div>
            <AuthRoute exact path="/" component={NavBarContainer}/>
            <AuthRoute exact path="/" component={Splash}/>
    </div>
)

export default SplashPages;