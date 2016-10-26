export class User {
    uid: string;
    display_name?: string;
    photo_url?: string;
    lang: string;

    public static clone(user: User): User {
        delete user['$key'];
        delete user['$exists'];
        return user;
    }
}