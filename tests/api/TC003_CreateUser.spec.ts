import { test, expect } from '@playwright/test';
import { UserAPI } from '../../api/UserAPI';

test('API - Create User', async ({ request }) => {

    const userAPI = new UserAPI(request);

    const response = await userAPI.createUser(
        'John Doe',
        'john@test.com'
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    console.log(body);

    expect(body.name).toBe('John Doe');
    expect(body.email).toBe('john@test.com');
});