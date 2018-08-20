import ReduxFormInput from 'components/ReduxFormInput';
import * as React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { uploadFile } from '../../core/api/batchUpdate';
import { Field } from 'redux-form';
import { AssigmentsFieldsType } from '../../core/constants/assigments';

class UploadFileSection extends React.PureComponent<any, any> {
    listItems = AssigmentsFieldsType.map(dbField => (
        <li key={dbField.toString()}>
            <Label> {dbField} </Label>
        </li>
    ));
    constructor(props: any) {
        super(props);
        this.state = { fields: ['Empty'] };
    }

    onChange = (e: any) => {
        const tempfields: string[] = [];
        const files = e.target.files;
        const fileToUpload = files[0];
        const data = new FormData();
        data.append('file', fileToUpload);
        const promise = new Promise(resolve => {
            const response = uploadFile(data);
            resolve(response.then(res => res.map((field: string) => tempfields.push(field))));
        });
        promise.then(result => result);

        this.setState({ fields: tempfields });
    };

    render() {
        return [
            <div key="0" className="row">
                <FormGroup className="col-md-12">
                    <Label>Select file to upload</Label>
                    <Input
                        name="fileName"
                        placeholder="File Name"
                        className="form-control-file"
                        onChange={this.onChange}
                        type="file"
                    />
                </FormGroup>
                <FormGroup className="col-md-12">
                    <Label>Select Field to match</Label>
                    <ul>{this.listItems}</ul>
                </FormGroup>
                <FormGroup className="col-md-12">
                    <Field name="task" className="field-required" type="select" component={ReduxFormInput}>
                        <option value="">(Empty)</option>
                        <option key={this.state.fields}>{this.state.fields}</option>
                    </Field>
                </FormGroup>
            </div>,
        ];
    }
}

export default UploadFileSection;
