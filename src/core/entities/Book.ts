export class Book {
    public isBorrowed: boolean;

    constructor(
        public id: string,
        public title: string,
        public author: string,
        public publishedYear: number,
        isBorrowed: boolean

    ) {
        this.id = id;
        this.isBorrowed = isBorrowed;
    }
}