/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "s6uzhl2u0o5r3ut",
    "created": "2024-10-16 21:22:06.044Z",
    "updated": "2024-10-16 21:22:06.044Z",
    "name": "sectors_history",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dexpbwxt",
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
        "id": "c9pqnwie",
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
      },
      {
        "system": false,
        "id": "vk01qacz",
        "name": "sector_id",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "tz51hq959gwb58p",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "bvjwknqb",
        "name": "operation",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Criação",
            "Atualização",
            "Remoção"
          ]
        }
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("s6uzhl2u0o5r3ut");

  return dao.deleteCollection(collection);
})
