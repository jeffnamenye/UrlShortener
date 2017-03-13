module.exports = (express) => {
  const router = express.Router();

  // route to get hello world
  router.post('/status', (req, res) => {
    res.json({
      healthy: true,
    })
  });

router.use('/api/', require('./api/user')(express));

  return router;
}
