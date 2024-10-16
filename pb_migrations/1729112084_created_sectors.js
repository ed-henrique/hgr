/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tz51hq959gwb58p",
    "created": "2024-10-16 20:54:44.694Z",
    "updated": "2024-10-16 20:54:44.694Z",
    "name": "sectors",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "guqazqtu",
        "name": "number",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "ppplx1ay",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 72,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_RTq3MbA` ON `sectors` (`number`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tz51hq959gwb58p");

  return dao.deleteCollection(collection);
})
