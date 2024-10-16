/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2g8hcv6vjh9y3ep")

  // remove
  collection.schema.removeField("9akqw003")

  // remove
  collection.schema.removeField("iudht6l7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wj6v1gj3",
    "name": "using_o2",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "CN",
        "TQT"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mqfzxlzb",
    "name": "using_vaccuum",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Dreno",
        "Oral"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2g8hcv6vjh9y3ep")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9akqw003",
    "name": "using_o2",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iudht6l7",
    "name": "using_vaccuum",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("wj6v1gj3")

  // remove
  collection.schema.removeField("mqfzxlzb")

  return dao.saveCollection(collection)
})
