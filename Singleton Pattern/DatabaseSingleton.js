export class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    this._data = data;
    Database.instance = this;
    Database.exists = true;
    return this;
  }

  setData(newData) {
    this._data = newData;
  }

  getData() {
    return this._data;
  }
}