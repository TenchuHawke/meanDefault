export class User {
    public name: string
    public email: string
    public password: string
    private _id: string
    public createdAt: Date
    public updatedAt: Date

    constructor(name, email, password){
        this.name = name
        this.email = email
    }
}
