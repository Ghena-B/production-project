import { JsonSettings } from '../model/types/jsonSettings';
import { User } from '../model/types/user';

import { rtkApi } from '@/shared/api/rtkApi';

interface setJsonSettingsArg {
    userId: string;
    jsonSettings: JsonSettings;
}
const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setJsonSettings: build.mutation<User, setJsonSettingsArg>({
            query: ({ userId, jsonSettings }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const setJsonSettingsMutation =
    userApi.endpoints.setJsonSettings.initiate;
