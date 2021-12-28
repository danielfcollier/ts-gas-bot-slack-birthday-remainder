import { dbConfig } from "../config/index";
import Sheet from "./Sheet";
import Utils from "./Utils";

export default class Database {
  static build(params, key) {
    const data = Sheet.getData(params);
    const keyIndex = dbConfig.schema.indexOf(key);
    const database = new Map();

    data.forEach((array) => {
      database.set(array[keyIndex], Utils.buildObject(dbConfig.schema, array))
    });

    return database;
  }

  static get() {
    const params = dbConfig;

    return this.build(params, 'email');
  }
}
