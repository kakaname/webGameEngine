import React, {useRef, useState} from "react";
import { Gi3DStairs, GiPerson, GiMineExplosion } from "react-icons/gi";
import { IconButton } from '@mui/material';
import SidebarImages from "./SidebarImages";

import "../../css/UI/Sidebar/SidebarLeft.css";
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

function SidebarLeft(props){

    const [isOpen, setIsOpen] = useState(false);
    const [isLevels, setIsLevels] = useState(false);
    const [isImages, setIsImages] = useState(false);
    const [isActions, setIsActions] = useState(false);

    const SidebarRef = useRef(null);

    const toggleLevels = () =>{
        if(isLevels){
            setIsOpen(!isOpen);
        }else{
            setIsLevels(!isLevels);
            setIsImages(false);
            setIsActions(false);
        }

    }
    const toggleImages = () =>{
        if(isImages){
            setIsOpen(!isOpen);
        }else{
            setIsLevels(false);
            setIsImages(!isImages);
            setIsActions(false);
        }

    }
    const toggleActions = () =>{
        if(isActions){
            setIsOpen(!isOpen);
        }else{
            setIsLevels(false);
            setIsImages(false);
            setIsActions(!isActions);
        }

    }

    return (
        <div id={"Sidebar"}>
            <IconButton className="levelButton" onClick={toggleLevels}>
                <Gi3DStairs size={50}/>
            </IconButton>
            <IconButton className="ImagesButton" onClick={toggleImages}>
                <GiPerson size={50}/>
            </IconButton>
            <IconButton className="ActionsButton" onClick={toggleActions}>
                <GiMineExplosion size={50}/>
            </IconButton>
            <SidebarBase images={isImages} />
            
        </div>

    );
}

export default SidebarLeft;