import { render, waitFor } from '@testing-library/react';
import {
  FormField,
  DirectionType,
} from '../../../src/components/form/form-field';

describe('FormField', () => {
  it('should render FormField properly', () => {
    const { getByTestId, getByText } = render(
      <FormField
        label={'Test Label'}
        name={'Test Name'}
        testId={'test-id'}
        direction={DirectionType.column}
        required={true}
      >
        <>Test Input Field</>
      </FormField>
    );

    expect(getByTestId('label-test-id')).toBeTruthy();
    expect(getByText('*')).toBeTruthy();
    expect(
      getByTestId('grid-container-test-id').getAttribute('class')
    ).toContain('MuiGrid-direction-xs-column');
  });

  it('should render the default props such as not required and grid default direction(row)', async () => {
    const { queryByText, getByTestId } = render(
      <FormField label={'Test Label'} name={'Test Name'} testId={'test-id'}>
        <>Test Input Field</>
      </FormField>
    );

    await waitFor(() => {
      expect(queryByText('*')).toBeFalsy();
    });
    expect(
      getByTestId('grid-container-test-id').getAttribute('class')
    ).not.toContain('MuiGrid-direction-xs-column');
  });
});
