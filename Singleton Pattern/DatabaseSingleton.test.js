import { Database } from "./DatabaseSingleton";

describe('Test Singleton Pattern', () => {
  const db = new Database('monggoDB');
  const newDB = new Database('mysqlDB');

  it('should initiated database instance', () => {
    expect(db).toBeInstanceOf(Database);
  })

  it('should initiate singleton instance', () => {
    expect(newDB.getData()).not.toBe('mysqlDB');
    expect(newDB.getData()).toBe('monggoDB');
  })

  it('should change data on singleton instance', () => {
    db.setData('mysqlDB');
    expect(db.getData()).not.toBe('monggoDB');
    expect(newDB.getData()).toBe('mysqlDB');
  })

})