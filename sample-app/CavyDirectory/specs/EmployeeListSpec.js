export default function(spec) {
  spec.describe('Listing the employees', function() {
    spec.it('filters the list by search input', async function() {
      await spec.exists('EmployeeList.JimCavy');
      await spec.fillIn('SearchBar.TextInput', 'Amy');
      await spec.notExists('EmployeeList.JimCavy');
      await spec.exists('EmployeeList.AmyTaylor');
    });
  });

  spec.describe('Tapping on an employee', function() {
    spec.it('shows a button to email them', async function() {
      await spec.fillIn('SearchBar.TextInput', 'Amy');
      await spec.press('EmployeeList.AmyTaylor');
      await spec.pause(1000);
      await spec.exists('ActionBar.EmailButton');
    });
  });

  spec.describe('Pressing a button triggers onPress', () => {
    spec.it('when button is defined as a class', async function() {
      await spec.fillIn('SearchBar.TextInput', 'Amy');
      await spec.press('EmployeeList.AmyTaylor');
      await spec.pause(1000);
      await spec.notExists('ClassText');
      await spec.press('ClassButton');
      await spec.exists('ClassText');
    });

    spec.it('when button is defined as a function', async function() {
      await spec.fillIn('SearchBar.TextInput', 'Amy');
      await spec.press('EmployeeList.AmyTaylor');
      await spec.pause(1000);
      await spec.notExists('FunctionText');
      await spec.press('FunctionButton');
      await spec.exists('FunctionText');
    });
  });
}
