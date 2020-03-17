export const initialState = {
    todoList: [],
    completed: false,
    id: Date.now()
};

export const todoListReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if(action.payload === todo.id) {
                      return {
                        ...todo,
                        completed: !todo.completed
                      };
                    } else {
                      return todo;
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
                todoList: state.todoList.filter(todo => {
                    if(todo.completed === false) {
                      return {
                        ...todo
                      }
                    }
                  })
            }
    }
}