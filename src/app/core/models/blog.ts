import {Deserializable} from '../interfaces/DeserializableInterface';

export class Blog {
    constructor(title: string, content: string, image: string) {
        this.title = title;
        this.content = content;
        this.image = image;
    }

    title: string;
    content: string;
    image: string;
}
