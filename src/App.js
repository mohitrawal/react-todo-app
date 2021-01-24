import React from 'react';
import './App.css';
import ListItem from './ListItem';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [],
            currentTodo: {
                text:'',
                key:''
            }
        }
    }
    handleInput = (e) =>{
        this.setState({
            currentTodo:{
                text:e.target.value,
                key:Date.now()
            }
        })
    }
    saveTodo = (e) =>{
        e.preventDefault();
        const newItem = this.state.currentTodo;
        if(newItem.text !== "") {
            const items = [...this.state.todoItems, newItem] //Destructive assignment
            this.setState({
                todoItems:items,
                currentTodo: {
                    text:'',
                    key:''
                }
            })
        }
    }
    deleteTodo = (key) => {
        const filteredItems= this.state.todoItems.filter(item => item.key!==key);
        this.setState({
            todoItems: filteredItems
        });
    }
    setUpdate= (text,key) =>{
        const items = this.state.todoItems;
        items.map(item=>{      
          if(item.key===key){
            item.text= text;
          }
        })
        this.setState({
            todoItems: items
        })
    }
    render() {
        return(
            <div className="App">
                <header>
                    <form id="todo" onSubmit={this.saveTodo}>
                        <input type="text" placeholder="Please enter text" value={this.state.currentTodo.text} onChange={this.handleInput}/>
                        <button type="submit">Add</button>
                    </form>
                </header>
                <ListItem items={this.state.todoItems} deleteItem={this.deleteTodo} setUpdate={this.setUpdate}/>
            </div>
        );
    }
}
export default App;
