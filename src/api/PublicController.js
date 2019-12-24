import svgCaptcha from 'svg-captcha';
import { setValue } from '@/config/RedisConfig';

class PublicController {
  constructor() {}

  async getCaptcha(ctx) {
    const body = ctx.request.query;

    // 创建验证码
    const newCaptcha = svgCaptcha.create({
      size: 4,
      ignoreChars: '0o1li', //忽略字符
      color: true,
      noise: Math.floor(Math.random() * 5), // 随机产生干扰线条
      width: 150,
      height: 50
    });

    // 存储在Redis中，过期自动删除
    setValue(body.sid, newCaptcha.text, 10 * 60);

    ctx.body = {
      code: 200,
      data: newCaptcha.data
    };
  }
}

export default new PublicController();
