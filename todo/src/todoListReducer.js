export const initialState = {
    todoList: []
};

export const todoListReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    if(action.payload === item.id) {
                      return {
                        ...item,
                        completed: !item.completed
                      };
                    } else {
                      return item;
                    }
                  })
            }
        case 'ADD_TODO':
            const newTodo = {
                name: action.payload,
                id: new Date(),
                completed: false
            };
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    newTodo
                ]
            }
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todoList: state.todoList.filter(item => !item.completed)
            }
    }
}