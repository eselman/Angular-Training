import {Post} from './post.model'
export class User {
    public id: number;
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public city: string;
    public job: string;
    public email: string;
    public phone: string;
    public logged: boolean;
    public posts: Post[];
    public friends: User[];
}