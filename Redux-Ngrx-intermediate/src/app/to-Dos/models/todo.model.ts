export class Todo {
    public id: number;
    public text: string;
    public isCompleted: boolean

    /**
     *Contructor of the class
     */
    constructor(text: string) {
        this.text = text;
        this.id = Math.random(); // simulate unique id
        this.isCompleted = false;
    }
}