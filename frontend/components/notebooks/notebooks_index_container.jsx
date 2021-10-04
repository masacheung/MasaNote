import { connect } from 'react-redux';
import { fetchNotebooks } from "../../actions/notebook_actions"
import NotebooksIndex from './notebooks_index';

const mSTP = ({session, entities : {notebooks, users}, ownProps}) => {
    console.log(notebooks)
    return {
        notebooks: Object.values(notebooks)
    }
}

const mDTP = dispatch => {
    return {
        fetchNotebooks: () => dispatch(fetchNotebooks)
    }
}

export default connect(mSTP, mDTP)(NotebooksIndex);