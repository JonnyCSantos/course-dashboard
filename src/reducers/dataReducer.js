export const dataReducer = () => {
    return {
        moduleActive: {},
        leassonActive: {},
        module: [
            {
                id: 1,
                name: 'First Module',
                leassons: [
                    {id: 1, name: 'First Leasson'},
                    {id: 2, name: 'Second Leasson'},
                    {id: 3, name: 'Third Leasson'}
                ]
            },
            {
                id: 2,
                name: 'Second Module',
                leassons: [
                    {id: 3, name: 'First Leasson'},
                    {id: 4, name: 'Second Leasson'},
                    {id: 5, name: 'Third Leasson'}
                ]
            },
        ]
    }
};