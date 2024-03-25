import "./TopBar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function TopBar(){
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <h2 className="logo">Dashboard</h2>
                </div>
                <div className="topbarRight">
                    <div className="topbarRightIconWrapper">
                        <NotificationsNone />
                        <span className="iconBadge">2</span>
                    </div>
                    <div className="topbarRightIconWrapper">
                        <Language className="topRightIcon" />
                    </div>
                    <div className="topbarRightIconWrapper">
                        <Settings className="topRightIcon" />
                    </div>
                    <img src="https://www.shutterstock.com/image-vector/vector-design-avatar-dummy-sign-600nw-1290556063.jpg" alt="" className="topRightAvatar" />
                </div>
            </div>
        </div>
    )
}