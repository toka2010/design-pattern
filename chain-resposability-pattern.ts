export class Database {
  users: Map<string, string> = new Map<string, string>();
  constructor() {
    this.users.set("admin", "1234");
    this.users.set("user", "12345");
  }
}

export abstract class Handler {
  next: Handler;
  constructor(next: Handler) {
    this.next = next;
    return next;
  }
  abstract handle(userName: string, password: string): boolean;

  handleNex(userName: string, password: string) {
    if (this.next == null) {
      return true;
    }
    return this.next.handle(userName, password);
  }
}

export class UserEsistsHandler extends Handler {
  handle(userName: string, password: string): boolean {
    throw new Error("Method not implemented.");
  }
}

export class ValidPasswordHandler extends Handler {
  handle(userName: string, password: string): boolean {
    throw new Error("Method not implemented.");
  }
}

export class ROleCheckHandler extends Handler {
  handle(userName: string, password: string): boolean {
    throw new Error("Method not implemented.");
  }
}