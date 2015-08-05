/**
 * Created by Marc on 31/07/2015.
 */

function ShoppingCart() {
    this.items = [];

    // load items from local storage when initializing
    this.loadItems();

    // save items to local storage when unloading
    var self = this;
    $(window).unload(function () {
        if (self.clearCart) {
            self.clear();
        }
        self.saveItems();
        self.clearCart = false;
    });
}

ShoppingCart.prototype.loadItems = function () {
    var items = localStorage != null ? localStorage["clicAndPick_cart"] : null;
    if (items != null && JSON != null) {
        try {
            var items = JSON.parse(items);
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.id != null && item.name != null && item.price != null && item.quantity != null) {
                    item = new Item(item.id, item.name, item.price, item.quantity);
                    this.items.push(item);
                }
            }
        }
        catch (err) {
            // ignore errors while loading...
        }
    }
};

// save items to local storage
ShoppingCart.prototype.saveItems = function () {
    if (localStorage != null && JSON != null) {
        localStorage["clicAndPick_cart"] = JSON.stringify(this.items);
    }
};

// adds an item to the cart
ShoppingCart.prototype.add = function (id, name, price, quantity, data) {
    quantity = this.toNumber(quantity);
    if (quantity != 0) {

        // update quantity for existing item
        var found = false;
        for (var i = 0; i < this.items.length && !found; i++) {
            var item = this.items[i];
            if (item.id == id) {
                found = true;
                item.quantity = this.toNumber(item.quantity + quantity);
                if (item.quantity <= 0) {
                    this.items.splice(i, 1);
                }
            }
        }

        // new item, add now
        if (!found) {
            var item = new Item(id, name, price, quantity, data);
            this.items.push(item);
        }

        // save changes
        this.saveItems();
    }
};

ShoppingCart.prototype.removeItem = function (index) {
    this.items.splice(index, 1);
};

// get the total price for all items currently in the cart
ShoppingCart.prototype.getTotalPrice = function () {
    var total = 0;
    angular.forEach(this.items, function (item) {
        total += item.getTotal();
    });
    return +parseFloat(total).toFixed(2);
};

// get the total number of items currently in the cart
ShoppingCart.prototype.getTotalCount = function () {
    var count = 0;
    angular.forEach(this.items, function (item) {
        count += item.quantity;
    });
    return count;
};

// clear the cart
ShoppingCart.prototype.clear = function () {
    this.items = [];
    this.saveItems();
};

ShoppingCart.prototype.toNumber = function (value) {
    value = value * 1;
    return isNaN(value) ? 0 : value;
};