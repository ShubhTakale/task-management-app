import HomeIcon from '@material-ui/icons/Home';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import TodayIcon from '@material-ui/icons/Today';

export const SidebarData = [
    {title:"All Tasks", icon:<HomeIcon />, url:"/tasks"},
    {title:"In progress", icon:<HourglassEmptyIcon />, url:"/tasks/in-progress"},
    {title:"Completed", icon:<HourglassFullIcon />, url:"/tasks/completed"},
    {title:"Today", icon:<TodayIcon />, url:"/tasks/today"}
]