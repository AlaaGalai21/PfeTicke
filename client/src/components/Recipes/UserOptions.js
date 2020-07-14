import React, {Component} from "react";
import axios from "axios";
import to from "await-to-js"
import { Link } from "react-router-dom"
import NavbarUser from "../layout/NavbarUser";


export default class Recipe extends Component{
    state ={
        recipe:{
            "id":"",
            "title": "",
            "author": "",
            "prep_time":"",
            "ingredients": "",
            "steps": ""
        }
    }
    componentDidMount =async()=>{
        const  {id}  = this.props.match.params
        console.log(id)
        let [ error, result ] = await to (axios.get(`/recipes/${id}`))
        console.log(result.data)
        let recipe = result.data
        if (error){
            console.log(error)
        }
        return this.setState({recipe})
    }

    deletePost = async()=>{
        const  {id}  = this.props.match.params
        let [error] = await to (axios.delete(`/recipes/${id}`))


        if(error){
            console.log('deleteItem has error',error)
        }

        return this.props.history.push("/recipes")
    }
    changePage =()=>{
        this.props.history.push("/homeuser")
    }

    render(){
        const {  id, title, author, prep_time, ingredients,steps } = this.state.recipe
        return(
            <div className='App'>
                
                <div key = {id } className="card" style={{width:'75rem'}}>
                    <div className="card-body text-center">
                        <h3 className="card-title"><strong>{title}</strong></h3>
                        <h5 className="card-title"><strong>Organizer:</strong> {author}</h5>
                        <h5 className="card-title"><strong>Time:</strong> {prep_time}</h5>
                        <p className="card-text"><strong>Type:</strong>{ingredients}</p>
                        <p className="card-text"><strong>Description:</strong>Steps:{steps}</p>
                    </div>
                    <button className='btn'>Buy Ticket</button>
                    <button className='btn' onClick={this.changePage}>Back to Home</button>

                </div>
            </div>
        )
    }
}
