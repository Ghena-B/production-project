import { ValidateProfileError } from '../consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';

import { profileActions, profileReducer } from './profileSlice';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

const data = {
  first: 'Ghena',
  lastname: 'B',
  username: 'Ghdsaena',
  age: 100,
  country: Country.SPAIN,
  city: 'Madrid',
  currency: Currency.EUR,
};
describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(
      profileReducer(
                state as ProfileSchema,
                profileActions.setReadonly(true),
      ),
    ).toStrictEqual({ readonly: true });
  });
  test('test set cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { username: '' },
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toStrictEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });
  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
    expect(
      profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({ username: '123123' }),
      ),
    ).toStrictEqual({
      form: { username: '123123' },
    });
  });
  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toStrictEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });
  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
      ),
    ).toStrictEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
