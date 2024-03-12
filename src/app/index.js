import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import { setElementImage } from "./scripts/utils"; 
import logo from "../assets/img/logo.png";
import avatar from "../assets/img/avatar.png";
import slidebarIcons from "../assets/img/slidebarIcons.png";
import backgroundImage from "../assets/img/chatBackground.jpg";
import { setupModal } from './scripts/userSettings';
import {setupModal2} from "./scripts/searchBar";
import { loginForm } from "./scripts/login";

document.addEventListener("DOMContentLoaded", function() {
    setElementImage("logo", logo);
    setElementImage("avatar", avatar);
    setElementImage("avatar2", avatar);
    setElementImage("avatar3", avatar);
    setElementImage("avatar4", avatar);
    setElementImage("avatar5", avatar);
    setElementImage("avatar6", avatar);
    setElementImage("avatar7", avatar);
    setElementImage("avatar8", avatar);
    setElementImage("avatar9", avatar);
    setElementImage("avatar10", avatar);
    setElementImage("avatar11", avatar);
    setElementImage("avatar12", avatar);
    setElementImage("avatarchat", avatar);
    setElementImage("avatarChange", avatar);
    setElementImage("slidebarIcons", slidebarIcons);
    setElementImage("background", backgroundImage);
    
    
    setupModal();
    setupModal2();
    loginForm();
});


