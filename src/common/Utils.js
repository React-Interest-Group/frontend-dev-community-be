import { getValue } from '@/config/RedisConfig';

// 校验验证码
const checkCode = async (key, value) => {
  const redisData = await getValue(key);

  if (!redisData) return false;

  // 传递的验证码可能是大写或小写
  if (redisData.toLowerCase() === value.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

export { checkCode };
