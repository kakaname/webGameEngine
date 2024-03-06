import React, {useRef, useState} from "react";
import SidebarImages from "./SidebarImages";
import "../../css/UI/Sidebar/SidebarBase.css";

function SidebarBase(props){

    const isImages = useState(props.isImages);


    if (isImages) {
        return (
            <div id={"SidebarBase"}>
                <SidebarImages />

            </div>
        );

    }else{
        return (<div><p>osdamesd</p></div>);
    }

}

export default SidebarBase;