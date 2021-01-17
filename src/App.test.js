import { render, screen, fireEvent } from '@testing-library/react';
import Dice from './components/dice';
import DiceArea from './index';

test('roll button fires event', () => {
  const handle = jest.fn();
  render(<div id="rollButton" onClick={handle}> <p>Roll</p></div>);
  fireEvent.click(screen.getByText('Roll'));
  expect(handle).toHaveBeenCalledTimes(1)
});
