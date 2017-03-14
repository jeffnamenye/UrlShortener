module.exports = (express) => {
  const router = express.Router();

  // route to get hello world
  router.post('/status', (req, res) => {
    res.json({
      healthy: true,
    })
  });

router.use('/api/v1.1.0', require('./api/user')(express));
router.use('/api/v1.1.0', require('./api/url')(express));
router.use('/api/', require('./api/hoity')(express));
  return router;
}
