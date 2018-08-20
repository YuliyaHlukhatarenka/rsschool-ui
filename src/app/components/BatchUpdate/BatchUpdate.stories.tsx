import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ReduxProviderDecorator } from '../../storybook/ReduxProviderDecorator';
import BatchUpdateForm from './index';

storiesOf('Update Form', module)
    .addDecorator(storyFn => <ReduxProviderDecorator>{storyFn()}</ReduxProviderDecorator>)
    .add('Default', () => {
        return <BatchUpdateForm />;
    });
