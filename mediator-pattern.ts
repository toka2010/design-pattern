export interface ChatMediator {
  addUser(user: User): void;
  sendMessage(user: User, message: string): void;
}

class User {
  name: string;
  //   chat: ChatMediator;
  chatLog: string[];
  constructor(name: string) {
    this.name = name;
    this.chatLog = [];
  }

  recive(sender: User, message: string) {
    let s = `${sender.name}  ${message}`;
    this.chatLog.push(s);
    console.log(s);
  }
}

class chatRoom implements ChatMediator {
  private users: User[];
  constructor() {
this.users=[]    
  }
  addUser(user: User): void {
    this.users.push(user);
    let joinMessage = `${user.name}  join to the chat`;
    this.sendMessage(user, joinMessage);
  }
  sendMessage(source: User, message: string): void {
    for (let user of this.users) {
      if (user.name !== source.name) {
        user.recive(user, message);
      }
    }
  }
}

const user1 = new User("toqa");
const user2 = new User("sara");
const chat = new chatRoom();
chat.addUser(user1);
chat.addUser(user2);
chat.sendMessage(user1,"hello")
const user3 = new User("lala");
chat.addUser(user3);
chat.sendMessage(user1,"hello")





/* 
A mediator is used to avoid coupling several components together. Instead of each component "talking" with each other directly 
(and thus having to know each other and to know how to communicate all with each other), 


 when you're fighting with your neighbor and can't communicate with him, you go see a mediator and instead of talking to each other,
  you both talk with the mediator, who tries fixing the issue.
*/
