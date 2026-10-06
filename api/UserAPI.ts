import { APIRequestContext } from '@playwright/test';

export class UserAPI {

    constructor(private request: APIRequestContext) {}

    async getUsers() {
        return await this.request.get(
            'https://jsonplaceholder.typicode.com/users'
        );
    }

    async getUser(userId: number) {
        return await this.request.get(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
    }

    async createUser(name: string, email: string) {
        return await this.request.post(
            'https://jsonplaceholder.typicode.com/users',
            {
                data: {
                    name: name,
                    email: email
                }
            }
        );
    }

    async updateUser(userId: number, name: string, email: string) {
        return await this.request.put(
            `https://jsonplaceholder.typicode.com/users/${userId}`,
            {
                data: {
                    name: name,
                    email: email
                }
            }
        );
    }

    async deleteUser(userId: number) {
        return await this.request.delete(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
    }
}