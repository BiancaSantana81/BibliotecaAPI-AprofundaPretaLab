export class Book {
    public readonly id: string;
    public isBorrowed: boolean;

    constructor(
        id: string,
        public title: string,
        public author: string,
        public publishedYear: number,
        isBorrowed: boolean

    ) {
        this.id = id;
        this.isBorrowed = isBorrowed;
    }
}