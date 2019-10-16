import B_1_page from "../../../screen/B_1_page"
import {connect} from "react-redux";
import {fetchList} from "./action"

const mapStateToProps = state => {
    return{
        lists: state.B1_page_reducer.lists
    };
}

const WithConnect = connect(
    mapStateToProps,
    {fetchList}
)(B_1_page)

export default WithConnect;