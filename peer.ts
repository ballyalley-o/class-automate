import 'colors'
import dotenv from 'dotenv'
import App from '@config/server'
// @datas
import { users, roles, cohort } from '@migration'
// @models
import { User, Role, Cohort } from '@models'
import { logger } from '@middleware'
dotenv.config()

const app = new App()
app.connectDb()

const peerData = async () => {
  try {
    await Role.deleteMany()
    await User.deleteMany()
    await Cohort.deleteMany()

    const createdRoles = await Role.insertMany(roles)
    const createdUsers = await User.insertMany(users)
    const createdCohort = await Cohort.insertMany(cohort)

    logger.warn(' DATA MIGRATED 🌱 ')
    process.exit()
  } catch (error: any) {
    logger.error(error.message)
    throw new Error('FAILED in migration')
  }
}

const destroyData = async () => {
  try {
    await Role.deleteMany()
    await User.deleteMany()
    await Cohort.deleteMany()

    logger.custom('bgRed', ' DATA DESTROYED 💥 ')
    process.exit(1)
  } catch (error: any) {
    logger.error(error.message)
    throw new Error('FAILED in DESRUCTION of DATA')
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else if (process.argv[2] === '-i') {
  peerData()
}
