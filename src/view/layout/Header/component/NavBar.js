import React,{useState} from "react";
import {Menu} from "semantic-ui-react";
import {useHistory} from "react-router";



export default function NavBar() {

    const [activeItem,setActiveItem] = useState("Home");
    const history =useHistory();
    const handleItemClick = (e,anchorTag,redirectUrl)=>
    {
        setActiveItem(anchorTag);
        history.push(redirectUrl);
    }

    return(
        <div className="ui container">
            <Menu>
                <div className="header item">
                        Missha
                </div>
                <Menu.item
                    name="Home"
                    active={activeItem==="Home"}
                    onClick={e=>handleItemClick(e,"Home","/create")}
                >
                </Menu.item>
            </Menu>

        </div>
    )

}