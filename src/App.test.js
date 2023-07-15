import { getByRole, render, screen } from '@testing-library/react';
import App from './App';
import Home from './components/Home';
import user from "@testing-library/user-event";
import Shopping from './components/Shopping';
import NavBar from './components/NavBar';
import { items } from './components/items';
import "@testing-library/jest-dom/extend-expect";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';


describe("shopping grid works correctly", () => {
  test("items dont display quantity if it is is 0", () => {
    render(<Shopping cart={[]} />);
    expect(document.querySelectorAll('.display-item-count')).toHaveLength(0);
  });

  test("items display quantity if it is greater than 0", () => {
    render(<Shopping cart={[{name: "Donte DiVincenzo Nike Icon Swingman Jersey", count: 2}]} />);
    expect(document.querySelectorAll('.display-item-count')).toHaveLength(1);
    expect(document.querySelector('.display-item-count')).toHaveTextContent('2');
  });

  test("quantity goes away when you hover on item", async () => {
    user.setup();
    render(<Shopping cart={[{name: "Donte DiVincenzo Nike Icon Swingman Jersey", count: 2}]} />);
    await act(async () => {
      await user.hover(screen.getByText('Donte DiVincenzo Nike Icon Swingman Jersey'));
    });
    expect(document.querySelectorAll('.display-item-count')).toHaveLength(0);
    expect(screen.getByRole('button', {name: '-'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '+'})).toBeInTheDocument();
    expect(screen.getByDisplayValue('2')).toBeInTheDocument();
  });

  test("quantity changes accordingly when buttons pressed", async () => {
    user.setup();
    render(
      <MemoryRouter initialEntries={['/shop']}>
        <App />
      </MemoryRouter>
    );
    await act(async () => {
      await user.hover(screen.getByText('Donte DiVincenzo Nike Icon Swingman Jersey'));
    });
    await act(async () => {
      await user.click(screen.getByRole('button', {name: '-'}));
    });
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
    await act(async () => {
      await user.click(screen.getByRole('button', {name: '+'}));
    });
    await act(async () => {
      await user.click(screen.getByRole('button', {name: '+'}));
    });
    expect(screen.getByDisplayValue('2')).toBeInTheDocument();
    await act(async () => {
      await user.click(screen.getByRole('button', {name: '-'}));
    });
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
    await act(async () => {
      await user.unhover(screen.getByText('Donte DiVincenzo Nike Icon Swingman Jersey'));
    });
    expect(document.querySelector('.display-item-count')).toHaveTextContent('1');
  });

  describe("Filter works correctly", () => {
    test("Sorting lexicographically works", async () => {
      user.setup();
      render(<Shopping cart={[]} />);
      await user.click(screen.getByRole('combobox'));
      await act(async () => {
        await user.click(screen.getByText('Name (A-Z)'));
      })
      let items = document.querySelectorAll('.item-name');
      function isSorted(arr) {
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] < arr[i - 1]) {
            return false;
          }
        }
        return true;
      }
      expect(isSorted(items)).toBe(true);
  });

  test("Sorting by cost works", async () => {
    user.setup();
    render(<Shopping cart={[]} />);
    await user.click(screen.getByRole('combobox'));
    await act(async () => {
      await user.click(screen.getByText('Price (low to high)'));
    })
    const items = document.querySelectorAll('.cost');
    function isSorted(arr) {
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
          return false;
        }
      }
      return true;
    }
    expect(isSorted(items)).toBe(true);
});
  
  });

})