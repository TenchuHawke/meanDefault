export class User {
    public name: string
    public email: string
    public password: string
     _id: string
    public createdAt: Date
    public updatedAt: Date

    constructor(){
        this.name = ""
        this.email = ""
        this.password = ""
    }
}
