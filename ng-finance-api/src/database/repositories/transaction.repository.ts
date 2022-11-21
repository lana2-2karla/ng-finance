import { AppDataSource } from '../../data-source'
import Transactions from '../entities/Transaction'

export const transactionRepository = AppDataSource.getRepository(Transactions)
