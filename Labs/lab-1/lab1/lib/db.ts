export interface User {
    email: string;
    password: string;
}

let users: User[] = [];

export function addUser(user: User): void {
    users.push(user);
}

export function findUserByEmail(email: string): User | undefined {
    return users.find((u) => u.email === email);
}
export function findUserByEmailAndPass(email: string,password:string): User | undefined {
    return users.find((u) => u.email === email && u.password===password);
}