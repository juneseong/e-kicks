const INITIAL_STATE = {
    sections: 
    [
        {
            title: 'nike',
            id: 1
        },
        {
            title: 'reebok',
            id: 3
                },
        {
            title: 'adidas',
            id: 2
                },
        {
            title: 'womens',
            size: 'large',
            id: 4
                },
        {
            title: 'mens',
            size: 'large',
            id: 5
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    Object.freeze(state);

    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;