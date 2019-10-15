import A_1_page from "../../../screen/A_1_page";

import {connect} from "react-redux";
import {A1_PAGE_ACTION} from "./action";

const mapStateToProps = state => {
    return{
        counter: state.A1_page_reducer.counter
    };
}

export default (Container = connect(
    mapStateToProps,
    A1_PAGE_ACTION
)(A_1_page));
