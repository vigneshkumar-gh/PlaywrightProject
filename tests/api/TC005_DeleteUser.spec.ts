import { test, expect } from '@playwright/test';
import { UserAPI } from '../../api/UserAPI';

test('API - Delete User', async ({ request }) => {

    const userAPI = new UserAPI(request);

    const response = await userAPI.deleteUser(1);

    expect(response.status()).toBe(200);
});