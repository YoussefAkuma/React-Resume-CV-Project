
import { RiAdminFill } from "react-icons/ri";
import { IoMdAnalytics} from "react-icons/io";
import { AiFillSafetyCertificate} from "react-icons/ai";
import {  FaNetworkWired, FaVideo} from "react-icons/fa";
import { DiPhp} from "react-icons/di";


 

export const servicesData = [
  
    {
        id: 2,
        title: 'développement',
        icon: <DiPhp/> 
    },
    {
        id: 3,
        title: 'Security Consulting ',
        icon: <AiFillSafetyCertificate />
    },

    {
        id: 6,
        title: 'Administrateur système',
        icon: <RiAdminFill />
    },
    {
        id: 7,
        title: 'Configuration des services réseau ',
        icon: <FaNetworkWired />
    },
 
    {
        id: 9,
        title: 'Video Editing',
        icon: <FaVideo />
    },
   
    {
        id: 11,
        title: 'Analyse des données',
        icon: <IoMdAnalytics />
    },

 

]

