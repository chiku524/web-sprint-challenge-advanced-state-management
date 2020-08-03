1. What problem does the context API help solve?
    Context API helps solve the problem of sharing state down a component tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are basically what sends the data from the application to the redux store. ACtions are also the only source of information that the store can use. They must have a type property that states what type of action is being performed. 

    Reducers are basically functions that identify how the state will change in response to the actions that are sent to the redux store. The role of reducers is to take the previous state and action in order to come up with the new state.

    The redux store is what holds the entire application's state in an immutable object tree.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    The application state is global, whereas the component state is local. It is very beneficial to use the Redux store when many components start to be created, as passing down props to all of them will be very cumbersome. If the state does not need to be shared with other components or doesn't need to be kept when the component unmounts, it can be good to use component state.


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    "Redux thunk allows you to write action creators that return a function rather than an action. It can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met." - https://www.npmjs.com/package/redux-thunk

    From my understanding, redux thunk allows us to have action creators that dispatch actions asychronously.


5. What is your favorite state management system you've learned and this sprint? Please explain why!
    I personally love the redux store and what it does. It basically simplifies things by allowing all of the subscribed components to access state without a hassle. 