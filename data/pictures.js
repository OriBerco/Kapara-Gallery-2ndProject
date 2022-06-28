function addTax(price) {
    

    const vat = 1.17;
    const total = (price * vat).toFixed(2);
    return total;
}

/* Class for objects template */
class Picture {
    constructor(name, author, price, image, description, stock) {
        this.name = name;
        this.author = author;
        this.price = price;
        this.image = image;
        this.description = description;
        this.stock = stock;
    }
    getName() {
        return this.name
    }
    getAuthor() {
        return this.author
    }
    getPrice() {
        const totalPrice = addTax(this.price);
        return `$${totalPrice}`;

    }
    getImage() {
        const IMG_PATH = 'https://cdn.pixabay.com/photo/';
        return `${IMG_PATH}${this.image}`;
    }
    getDescription() {
        return this.description
    }
    getStock() {
        return this.stock
    }
}
/* Each picture used with the template */
const pictures = [
    new Picture(
        'BEBE',
        'Thomas Painter',
        15,
        '2014/02/28/22/45/french-bulldog-277255_960_720.jpg',
        'Her name is Bebe.',
        true
    ),
    new Picture(
        'NOt THeir BAby',
        'Feelings Kevin',
        '-50',
        '2018/08/13/03/21/family-3602245__340.jpg',
        `Horror picture. It's so HORRIBLE we'll give YOU money.`,
        false
    ),
    new Picture(
        'This Stinks',
        'Punkie McPunk',
        999,
        '2014/08/08/22/02/garbage-413757_960_720.jpg',
        'ART at its best!',
        true
    ),

];
/* Export to import :) */
export {
    pictures
};