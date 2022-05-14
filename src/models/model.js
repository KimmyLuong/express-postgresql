import { pool } from './pool';


class Model {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
  }

  async select(columns, clause) {
    let query = `SELECT * FROM ${this.table}`;
    if (clause) query += clause;
    return this.pool.query(query);
  }

  async insertWithReturn(columns, values) {
    const query = `
          INSERT INTO ${this.table}(${columns})
          VALUES (${values})
          RETURNING id, ${columns}
      `;
    return this.pool.query(query);
  }

  async deleteWithReturn(id) {
    console.log(id)
    const query = `
      DELETE FROM ${this.table} 
      WHERE id=${id}
    ` 
    return this.pool.query(query)
  }

}

export default Model;