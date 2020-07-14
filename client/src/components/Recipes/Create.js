import React, { Component } from 'react'
import axios from 'axios'
import to from "await-to-js"
import Navbar from '../layout/Navbar'


export default class Create extends Component {
    state = {
        newRecipe:{
            id:"",
            title:"",
            author:"",
            ingredients:"",
            prep_time:"",
            createdAt:""
        }
    }


    onTitleChange = event =>{this.setState({newRecipe:{...this.state.newRecipe, "title": event.target.value}})}
    onAuthorChange = event =>{this.setState({newRecipe:{...this.state.newRecipe, "author": event.target.value}})}
    onPrepChange = event =>{this.setState({newRecipe:{...this.state.newRecipe, "prep_time": event.target.value}})}
    onIngredientsChange = event =>{this.setState({newRecipe:{...this.state.newRecipe, "ingredients": event.target.value}})}
    onStepsChange = event =>{this.setState({newRecipe:{...this.state.newRecipe, "steps": event.target.value}})}




    addItem = async(event)=> {
        event.preventDefault()
        let {  title,author, prep_time, ingredients,steps } =this.state.newRecipe
        const dataParameters = {
            title,
            author,
            prep_time,
            ingredients,
            steps
        }

        let [ error, result ]= await to(axios.post("/recipes",dataParameters))
        console.log(result.data)
        if(error){
            console.log('addItem has error')
        }

        return this.setState({
            newRecipe:  {"id":"", "title":"", "author":"", "prep_time":"","ingredients":"", "steps":"", "date":""}
        })
    }


    render(){
        const { newRecipe } = this.state
        return (
            <div>
                
                <div className = "container">
                    
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title heading">
                                CREATE EVENT
                            </h3>
                        </div>
                        <form >
                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <input type="text" className="form-control" name="title" value={newRecipe.title} onChange={this.onTitleChange}
                                       placeholder="Title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Organizer:</label>
                                <input type="text" className="form-control" name="author" value={newRecipe.author} onChange={this.onAuthorChange}
                                       placeholder="Organizer"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="steps">Time:</label>
                                <input type="text" className="form-control" name="prep_time" value={newRecipe.prep_time} onChange={this.onPrepChange}
                                       placeholder="Time"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="ingredients">Type:</label>
                                <input type="url" className="form-control" name="ingredients" value={newRecipe.ingredients} onChange={this.onIngredientsChange}
                                       placeholder="Type"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="pre_time">Description:</label>
                                <textarea className="form-control" name="steps" value={newRecipe.steps} onChange={this.onStepsChange}
                                          placeholder="Description" cols="80" rows="3"/>
                            </div>

                            <button type="submit" className="btn btn-secondary post-buttons" onClick={this.addItem}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


