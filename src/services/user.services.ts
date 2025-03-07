import User from '~/models/schema/User.schemas'
import databaseService from './database.services'
import { RegisterReqBody } from '~/models/requests/User.requests'
import { hashPassword } from '~/utils/cripto'
import { signToken } from '~/utils/jwt'
import { TokenTypes } from '~/constants/enums'

class UsersService {
  private async signAccessToken(userId: string){
    return await signToken({
      payload: { userId, token: TokenTypes.AccessToken },
      options:{
        expiresIn: '15m'
      }
    });
  }

  private async signRefreshToken(userId: string){
    return await signToken({
      payload: { userId, token: TokenTypes.RefreshToken },
      options:{
        expiresIn: '100d'
      }
    });
  }

  async register(payload: RegisterReqBody) {
    const result = await databaseService.users.insertOne(
      new User({
        ...payload,
        date_of_birth: new Date(payload.date_of_birth),
        password: hashPassword(payload.password)
      })
    );
    const user_id = result.insertedId.toString();
    const [accessToken, refreshToken] = await Promise.all([
      this.signAccessToken(user_id),
      this.signRefreshToken(user_id)
    ])
    return { accessToken, refreshToken }
  }

  async checkEmailExist(email: string) {
    const user = await databaseService.users.findOne({ email })
    return Boolean(user)
  }
}

const userService = new UsersService()
export default userService
