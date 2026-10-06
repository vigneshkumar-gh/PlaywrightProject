import { test, expect } from '@playwright/test';
import { UserAPI } from '../../api/UserAPI';

test('API - Get Users', async ({ request }) => {

    const userAPI = new UserAPI(request);

    const response = await userAPI.getUsers();

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.length).toBeGreaterThan(0);
});