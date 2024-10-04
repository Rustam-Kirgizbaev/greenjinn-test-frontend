import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock the components
jest.mock('../src/components/custom/average-bitcoin-price', () => {
  return {
    __esModule: true,
    default: jest.fn(() => (
      <div data-testid="average-bitcoin-price">Mocked AverageBitcoinPrice</div>
    )),
  };
});

jest.mock('../src/components/custom/trading-pairs', () => {
  return {
    __esModule: true,
    default: jest.fn(({ handleBadgeClick }) => (
      <div data-testid="trading-pairs">
        Mocked TradingPairs
        <button onClick={() => handleBadgeClick('ethbtc')}>Change Badge</button>
      </div>
    )),
  };
});

jest.mock('../src/components/custom/trading-pair-details', () => {
  return {
    __esModule: true,
    default: jest.fn(({ activeBadge }) => (
      <div data-testid="trading-pair-details">
        Mocked TradingPairDetails: {activeBadge}
      </div>
    )),
  };
});

import Home from '../src/app/page';

describe('Home Component', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByTestId('average-bitcoin-price')).toBeInTheDocument();
    expect(screen.getByTestId('trading-pairs')).toBeInTheDocument();
    expect(screen.getByTestId('trading-pair-details')).toBeInTheDocument();
  });

  it('initially sets activeBadge to btcusd', () => {
    render(<Home />);
    expect(screen.getByTestId('trading-pair-details')).toHaveTextContent(
      'btcusd',
    );
  });

  it('updates activeBadge when handleBadgeClick is called', () => {
    render(<Home />);
    const changeButton = screen.getByText('Change Badge');
    fireEvent.click(changeButton);
    expect(screen.getByTestId('trading-pair-details')).toHaveTextContent(
      'ethbtc',
    );
  });

  it('renders the correct layout on mobile and desktop', () => {
    const { container } = render(<Home />);
    const mainDiv = container.firstChild as HTMLElement;

    // Check mobile layout
    expect(mainDiv).toHaveClass('flex-col');

    // Simulate desktop layout
    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));

    expect(mainDiv).toHaveClass('md:flex-row');
  });
});
