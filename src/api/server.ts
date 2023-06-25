const token = '32e17f0bb82703a1392fbc78fabae16851f3e523c8216792'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://digital-library-a0k0.onrender.com/api/books`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`,
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://digital-library-a0k0.onrender.com/api/books`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create data from the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://digital-library-a0k0.onrender.com/api/books/${id}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)

        });

        if (!response.ok) {
            throw new Error('Failed to update data from the server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://digital-library-a0k0.onrender.com/api/books/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`,
            },

        });

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    },
}