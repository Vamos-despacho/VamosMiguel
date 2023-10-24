export interface IUser {
    id: string;
    name: string;
    email: string;
    img: string | null;
    createAt: Date;
    role: string;
}