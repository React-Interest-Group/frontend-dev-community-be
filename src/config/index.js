/**
 * Li: testdb数据库的账号
 * 123456: testdb数据库的密码
 */
const DB_URL = 'mongodb://Li:123456@dev.toimc.com:42017/testdb';

const REDIS = {
  host: 'dev.toimc.com',
  port: '42039',
  password: '123456'
};

const JWT_SECRET = 'ylhsbygeyldbjavfeaeoi93ilw3n21245h56';

export default {
  DB_URL,
  REDIS,
  JWT_SECRET
};
