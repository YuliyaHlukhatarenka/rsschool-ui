import BatchUpdateForm from 'components/BatchUpdate';
// import { fetchUserProfile, updateUserProfile } from 'core/actions';
// import { IProfile } from 'core/models';
// import { RootState } from 'core/reducers';
import * as React from 'react';
import { connect } from 'react-redux';
import './index.scss';

// type ProfileProps = {
//     load: () => void;
//     submit: (formData: any) => void;
//     formData: any;
// };

// const mapStateToProps = (state: RootState, props: ProfileProps): ProfileProps => {
//     return {
//         ...props,
//         formData: state.user.profile,
//     };
// };

// const mapDispatchToProps = (dispatch: any, props: ProfileProps): ProfileProps => {
//     return {
//         ...props,

//         submit: (data: IProfile) => {
//             dispatch(updateUserProfile(data));
//         },
//         load: () => {
//             dispatch(fetchUserProfile());
//         },
//     };
// };

class ButchUpdate extends React.Component<any> {
    // componentDidMount() {
    //     this.props.load();
    // }

    handleSubmit = (formData: any) => {
        this.props.submit(formData);
    };

    render() {
        return <BatchUpdateForm initialValues={this.props.formData} onSubmit={this.handleSubmit} />;
    }
}

export default connect()(ButchUpdate);
// mapStateToProps,
// mapDispatchToProps,
