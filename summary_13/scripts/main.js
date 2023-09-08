// Здесь пока ничего нет - и нам предстоит это исправить!


/*
3. Делаем классы `ToolsProduct`, `SportProduct` - для товаров-инструментов и спорттоваров. Товары-инструменты должны иметь публичное свойство `material` (из чего они изготовлены - wood, steel), а спорттовары - свойство `kind`, то есть вид спорта, к которому относятся (footbal, basketbal, ...). Соответственно, эти свойства "заходят" к ним в конструкторы. Оба класса должны по-своему реализовать метод `getInfo`:
 - `SportProduct` должен выводить "Товар Ball для спорта footbal, цена 100"
 - `ToolsProduct` должен выводить "Инструмент Hammer, материал steel, цена 100"
 */

class ToolsProduct extends Product {

    constructor(id, name, price, description, material) {
        super(id, name, price, description);
        this.material = material;
    }

    getInfo() {
        return `Инструмент ${this.name}, материал ${this.material}`;
    }
}


class SportsProduct extends Product {

    constructor(id, name, price, description, kind) {
        super(id, name, price, description);
        this.kind = kind;
    }

    getInfo() {
        return `Товар ${this.name}, для спорта ${this.kind}`;
    }
}