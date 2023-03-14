interface ICoordinate {
  xCoord: number;
  yCoord: number;
}

interface IAlert {
  message: string;
  printMessage: () => string;
}

interface ILoader {
  htmlRef: { innerHTML: string };
  displayLoader: () => void;
  removeLoader: () => void;
}

interface ICounter {
  count: number;
  increment?: () => number;
  decrement?: () => number;
}

interface IEngine {
  engineIsRunning: boolean;
  startEngine: () => string;
  stopEngine: () => string;
}

type HTMLRef = { innerHTML: string; classList: { list: string[]; toggle: (classList: string) => void } };

interface IModal {
  htmlRef: HTMLRef;
  title: string;
  message: string;
  renderHtml?: () => void;
  displayModal?: () => void;
}

interface IBookShelf {
  booksOnShelf: string[];
  booksOnShelf: () => void;
  latestBook?: string;
  addBookToShelf?: (book: string) => void;
}

interface IBankAccount {
  name: string;
  email: string;
  balance: number;
  deposit: (toDeposit: string | number) => number | string;
  withdraw: (toDeposit: string | number) => number | string;
}
