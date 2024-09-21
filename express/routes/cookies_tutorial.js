
import { Router } from 'express';

const router = Router();

router.get('/set-cookie', (req, res) => {
  console.log(req.session)
  console.log(req.session.id)
  req.session.user = "ashna123"

  res.cookie('Test', 'Hello', {httpOnly: true,secure: true,signed: true,maxAge: 5 * 60 * 1000,
  });
  res.json({ msg: 'Cookie has been set!' });
});


router.get('/get-cookie', (req, res) => {

       console.log(req.session)
       console.log(req.session.id)

  // if (req.signedCookies.Test && req.signedCookies.Test === 'Hello') {
  //   return res.status(200).json({ msg: 'Cookie is valid' });
  // }
  res.status(200).json({ msg: `Hello ${req.session.user}`});
});

export default router;
