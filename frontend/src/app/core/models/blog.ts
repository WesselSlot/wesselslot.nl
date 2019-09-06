import {Deserializable} from '../interfaces/DeserializableInterface';

export class Blog {
    constructor(title: string, content: string, image: string, categories: string[]) {
        this.title = title;
        this.content = content;
        this.image = image;
        this.categories = categories;
    }

    title: string;
    content: string;
    image: string;
    categories: string[];
}
