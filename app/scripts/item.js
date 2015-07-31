/**
 * Created by Marc on 31/07/2015.
 */

function Item(id, name, price, quantity, data){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.data = data;
}

Item.prototype.getTotal = function() {
    return this.quantity * this.price;
}
