module.exports = function (app) {
    app.get('/assets/*.glb', function (req, res) {
      res.sendFile(req.path, { root: './public' });
    });
  
    app.get('/assets/*.png', function (req, res) {
      res.sendFile(req.path, { root: './public' });
    });
  };