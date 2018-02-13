import {Repository} from '../models/repository.interface';
import {USER_LIST} from './user.mocks';

const repositoryList: Repository[]=[{
    name: 'iphone 5',
    description: '32gig',
    owner: USER_LIST[0]
}];

export const REPOSITORY_LIST=repositoryList;