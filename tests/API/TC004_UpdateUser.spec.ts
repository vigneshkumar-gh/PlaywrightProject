import { test, expect } from '@playwright/test';
import { UserAPI } from '../../api/UserAPI';

test('API - Update User', async ({ request }) => {

    const userAPI = new UserAPI(request);

    const response = await userAPI.updateUser(
        1,
        'Updated User',
        'updated@test.com'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.name).toBe('Updated User');
    expect(body.email).toBe('updated@test.com');
});