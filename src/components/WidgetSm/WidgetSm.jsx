import "./WidgetSm.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetSm(){
    return (
        <div className="widgetSm">
            <h3 className="widgetSmTitle">New Join Members</h3>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUserText">
                        <span className="widgetSmUserName">Ravi Ranjan</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <div className="widgetSmButton">
                    <button className="widgetSmBtn"><Visibility className="widgetSmBtnIcon" /> Display</button>
                    </div>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUserText">
                        <span className="widgetSmUserName">Ravi Ranjan</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <div className="widgetSmButton">
                        <button className="widgetSmBtn"><Visibility className="widgetSmBtnIcon" /> Display</button>
                    </div>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUserText">
                        <span className="widgetSmUserName">Ravi Ranjan</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <div className="widgetSmButton">
                    <button className="widgetSmBtn"><Visibility className="widgetSmBtnIcon" /> Display</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}