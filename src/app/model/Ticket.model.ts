import { User } from './User.model';
export class Ticket{
    constructor(
        public id: string,
        public number: number,
        public title: string,
        public status: string,
        public priority: string,
        public imagem: string,
        public user: User,
        public assigned: User,
        public data: string,
        public changes: Array<string>
    ){
        
    }
}