import { test, expect } from '@playwright/test';
import { UserAPI } from '../../api/UserAPI';

test('API - Get Single User', async ({ request }) => {

    const userAPI = new UserAPI(request);

    const response = await userAPI.getUser(1);

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.id).toBe(1);
    expect(body.name).toBeTruthy();
    expect(body.email).toBeTruthy();
});