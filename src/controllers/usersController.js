import User from '../models/user';
import Mailer from '../utils/mailer/mailer';
import { hashString } from '../utils/password';

export default {
        async create(req, res) {
        
            const user = await new User({
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
            }).save();

            let email = new Mailer(user).sendEmail();

            return res.status(201).send({'data': user, 'status': 'ok'});
        },
        /** action actualy for testing code */
        async get(req, res) {

            let data = `123456789`;
            return res.status(200).send({'data': await hashString(data), 'status': 'ok'});
        }
}