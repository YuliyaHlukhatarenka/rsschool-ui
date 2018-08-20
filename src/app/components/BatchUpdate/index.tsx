import * as React from 'react';
import { Button } from 'reactstrap';
import { InjectedFormProps, reduxForm } from 'redux-form';
import SelectCourseSection from './SelectCourseSection';
import UploadFileSection from './UploadFileSection';

const BatchUpdateForm = (props: InjectedFormProps) => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <SelectCourseSection />
            <UploadFileSection />
            <div className="row text-center">
                <div className="form-group col-md-12">
                    <Button color="success" type="submit" disabled={pristine || submitting}>
                        Save in DataBase
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'SelectCourseSection',
})(BatchUpdateForm);
