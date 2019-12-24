import Router from 'koa-router';
import publicController from '@/api/PublicController';

const router = new Router();

// 路径前缀
router.prefix('/public');

router.get('/captcha', publicController.getCaptcha);

export default router;
