/* Foundation Challenges */

export class Coordinate implements ICoordinate {
  xCoord: number;
  yCoord: number;
  constructor(xCoord: number, yCoord: number) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }
}

export class Alert implements IAlert {
  message: string;
  constructor(message: string) {
    this.message = message;
  }

  printMessage(): string {
    const message = `!!!! ${this.message} !!!!`;
    return message;
  }
}

type HtmlRef = { innerHTML: string };

export class Loader implements ILoader {
  htmlRef: HtmlRef;

  constructor(htmlRef: HtmlRef) {
    this.htmlRef = htmlRef;
  }

  displayLoader() {
    this.htmlRef.innerHTML = '<div class="loader"></div>';
  }

  removeLoader() {
    this.htmlRef.innerHTML = "";
  }
}

/* Intermediate Challenges */

export class Engine implements IEngine {
  engineIsRunning: boolean;

  constructor() {
    this.engineIsRunning = false;
  }

  startEngine(): string {
    const message = this.engineIsRunning ? "Engine is already running" : "Engine has started running";
    !this.engineIsRunning ? (this.engineIsRunning = true) : null;
    return message;
  }

  stopEngine(): string {
    const message = this.engineIsRunning ? "Engine has stopped running" : "Engine has already stopped running";
    this.engineIsRunning ? (this.engineIsRunning = false) : null;
    return message;
  }
}

export class Counter implements ICounter {
  count: number;

  constructor(count: number = 0) {
    this.count = count;
  }

  increment(): number {
    this.count++;
    return this.count;
  }

  decrement(): number {
    if (this.count > 0) this.count--;
    return this.count;
  }
}

export class Modal implements IModal {
  htmlRef: HTMLRef;
  title: string;
  message: string;

  constructor(htmlRef: HTMLRef, title: string, message: string) {
    this.htmlRef = htmlRef;
    this.title = title;
    this.message = message;
  }

  renderHtml() {
    if (!this.htmlRef) return;

    this.htmlRef.innerHTML = `<div class="modal"><h2 class="modal--title">${this.title}</h2><p class="modal--message">${this.message}</p></div>`;
  }

  displayModal() {
    if (!this.htmlRef) return;

    this.htmlRef.classList.toggle("hide");
  }
}

/* Advanced Challenges */

export class BookShelf implements IBookShelf {
  _shelfId: string;
  _booksOnShelf: string[];

  constructor(shelfId: string, booksOnShelf: string[] = []) {
    this._shelfId = shelfId;
    this._booksOnShelf = booksOnShelf;
  }

  get booksOnShelf() {
    return this._booksOnShelf;
  }

  set booksOnShelf(bookArray: string[]) {
    this._booksOnShelf = bookArray;
  }

  get latestBook() {
    const lastIndex = this.booksOnShelf.length - 1;
    return this.booksOnShelf[lastIndex];
  }

  set latestBook(book: string) {
    this._booksOnShelf.push(book);
  }
}

/* Expert Challenges */
export class BankAccount implements IBankAccount {
  name: string;
  email: string;
  _balance: number;
  constructor(name: string, email: string, balance: number = 0) {
    this.name = name;
    this.email = email;
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  deposit(toDeposit: string | number): number | string {
    const convertedToNumber = +toDeposit;

    if (!convertedToNumber || convertedToNumber < 0) return "Invalid input, unable to deposit";

    this._balance += convertedToNumber;

    return this.balance;
  }

  withdraw(toWithdraw: string | number): number | string {
    const convertedToNumber = +toWithdraw;

    if (!convertedToNumber || convertedToNumber < 0) return "Invalid input, unable to withdraw";

    if (this._balance < convertedToNumber) return "Insufficient funds, unable to withdraw";

    this._balance -= convertedToNumber;

    return this.balance;
  }
}
