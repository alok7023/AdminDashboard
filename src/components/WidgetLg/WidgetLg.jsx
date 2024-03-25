import "./WidgetLg.css";

export default function WidgetLg(){
    const Button = ({type}) => {
        return <button className={"btn " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <div className="widgetLgList">
                <table className="widgetLgTable">
                    <tr>
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amout</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr>
                        <td className="widgetLgTd widgetLgCustomer">
                            <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_640.png" alt="" className="widgetLgImg"/>
                            <span className="widgetLgTdTitle">Sunsan Carol</span>
                        </td>
                        <td className="widgetLgTd widgetLgTdGray">
                            2 may 2023
                        </td>
                        <td className="widgetLgTd widgetLgTdGray">
                            $200
                        </td>
                        <td className="widgetLgTd">
                        <Button type="Approved" />
                        </td>
                    </tr>
                    <tr>
                        <td className="widgetLgTd widgetLgCustomer">
                            <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_640.png" alt="" className="widgetLgImg"/>
                            <span className="widgetLgTdTitle">Sunsan Carol</span>
                        </td>
                        <td className="widgetLgTd widgetLgTdGray">
                            2 may 2023
                        </td>
                        <td className="widgetLgTd widgetLgTdGray">
                            $200
                        </td>
                        <td className="widgetLgTd">
                        <Button type="Declined" />
                        </td>
                    </tr>
                    <tr>
                        <td className="widgetLgTd widgetLgCustomer">
                            <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_640.png" alt="" className="widgetLgImg"/>
                            <span className="widgetLgTdTitle">Sunsan Carol</span>
                        </td>
                        <td className="widgetLgTd widgetLgTdGray">
                            2 may 2023
                        </td>
                        <td className="widgetLgTd widgetLgTdGray">
                            $200
                        </td>
                        <td className="widgetLgTd">
                        <Button type="Pending" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}