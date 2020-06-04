<<<<<<< HEAD
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist.');
    }

    await transactionsRepository.remove(transaction);
=======
// import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(): Promise<void> {
    // TODO
>>>>>>> 8d7e856fe0d23a4629b861902608265c5a652adc
  }
}

export default DeleteTransactionService;
