import jwt from 'jsonwebtoken';

export const signToken = ({
  payload,
  privatekey = process.env.JWT_SECRET as string,
  options = {
    algorithm: 'HS256'
  }
}: {
  payload: string | Buffer | object, 
  privatekey?: string, 
  options?: jwt.SignOptions
}) => {
  return new Promise<string>((resolve, reject) => {
    jwt.sign(payload, privatekey, options, (err, token) => {
      if (err) {
        return reject(err);
      }
      return resolve(token as string);
    });
  })
}