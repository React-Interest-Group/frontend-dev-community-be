import mongoose from '../config/DBHelper';

/**
 * 在Mongoose中，使用Schema(模板)和Model(模型)来定义MongoDB中的collection(集合)。
 *
 * Model: 创建和链接MongoDB中collection；
 * Schema: 定义collection的数据结构；
 */
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String },
  password: { type: Number }
});

// 链接数据库的collection， users表示collection的名称，UserSchema表示collection的数据结构
const TestModel = mongoose.model('users', UserSchema);

export default TestModel;
