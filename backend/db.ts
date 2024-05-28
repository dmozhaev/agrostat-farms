const postgres = require('postgres')
const process = require('process')

const sql = postgres(`postgres://farms:farms@${process.env.DB_HOST ?? 'localhost'}:5432/farms`)

export default sql
