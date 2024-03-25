function makeItemManager() {
  function createSku(itemName, itemCategory) {
    return (
      itemName.replace(" ", "").slice(0, 3) + itemCategory.slice(0, 2)
    ).toUpperCase();
  }

  function validateItem(itemName, itemCategory, itemQuantity) {
    return (
      itemName.replace(" ", "").length > 4 &&
      itemCategory.split(" ").length === 1 &&
      itemCategory.replace(" ", "").length > 4 &&
      typeof itemQuantity === "number"
    );
  }

  function itemCreator(name, category, quantity) {
    if (validateItem(name, category, quantity)) {
      return {
        name,
        category,
        quantity,
        sku: createSku(name, category),
      };
    } else {
      return { notValid: true };
    }
  }

  return {
    items: [],

    getItem: function (skuCode) {
      return this.items.filter(function (item) {
        return item.sku === skuCode;
      })[0];
    },

    create(name, category, quantity) {
      let newItem = itemCreator(name, category, quantity);
      if (newItem.notValid) {
        return false;
      } else {
        this.items.push(newItem);
        return true;
      }
    },

    update(sku, newInfo) {
      this.items.forEach((item) => {
        if (item.sku === sku) {
          Object.assign(item, newInfo);
        }
      });
    },

    delete(sku) {
      let deletedItem = this.getItem(sku);
      this.items.splice(this.items.indexOf(deletedItem), 1);
    },

    inStock() {
      let itemsInStock = this.items.filter((item) => item.quantity > 0);
      return itemsInStock;
    },

    itemsInCategory(givenCategory) {
      let itemsInCat = this.items.filter(
        (item) => item.category === givenCategory
      );
      return itemsInCat;
    },
  };
}

reportManagerPrototype = {
  init(manager) {
    this.items = manager;
    return this;
  },

  reportInStock() {
    console.log(
      this.items
        .inStock()
        .map((item) => item.name)
        .join()
    );
  },

  createReporter(sku) {
    let referencedObj = this.items.getItem(sku);
    return {
      itemInfo() {
        let itemKeys = Object.keys(referencedObj);
        itemKeys.forEach((prop) => {
          console.log(`${prop}: ${referencedObj[prop]}`);
        });
      },
    };
  },
};

let ItemManager = makeItemManager();
let ReportManager = Object.create(reportManagerPrototype);

ItemManager.create("basket ball", "sports", 0); // valid item
ItemManager.create("asd", "sports", 0);
ItemManager.create("soccer ball", "sports", 5); // valid item
ItemManager.create("football", "sports");
ItemManager.create("football", "sports", 3); // valid item
ItemManager.create("kitchen pot", "cooking items", 0);
ItemManager.create("kitchen pot", "cooking", 3); // valid item
ItemManager.items; // returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock(); // logs soccer ball,football,kitchen pot

ItemManager.update("SOCSP", { quantity: 0 });

ItemManager.inStock(); // returns list with the item objects for football and kitchen pot

ReportManager.reportInStock(); // football,kitchen pot

ItemManager.itemsInCategory("sports"); // returns list with the item objects for basket ball, soccer ball, and football

ItemManager.delete("SOCSP");

ItemManager.items; // returns list the remaining 3 valid items (soccer ball is removed from the list)

let kitchenPotReporter = ReportManager.createReporter("KITCO");
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update("KITCO", { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
