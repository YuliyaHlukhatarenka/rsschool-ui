import ReduxFormInput from 'components/ReduxFormInput';
import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'redux-form';

class SelectCourseSection extends React.PureComponent<any, any> {
    render() {
        return [
            <div key="0" className="row">
                <FormGroup className="col-md-6">
                    <Label>Select course</Label>
                    <Field name="course" className="field-required" type="select" component={ReduxFormInput}>
                        <option value="">(Empty)</option>
                    </Field>
                </FormGroup>
                <FormGroup className="col-md-6">
                    <Label>Select task</Label>
                    <Field name="task" className="field-required" type="select" component={ReduxFormInput}>
                        <option value="">(Empty)</option>
                    </Field>
                </FormGroup>
            </div>,
        ];
    }
}

export default SelectCourseSection;
