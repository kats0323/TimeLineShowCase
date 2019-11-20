import React, { Component } from "react"
import { Button } from "antd";
import { Input } from "antd";
import TimeLine from "./TimeLine";
import TextArea from "antd/lib/input/TextArea";
import faker from "faker";
import '../App.css';
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            term: '',
            items: [],
            image: ""
        }
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    // componentDidUpdate(prevProps, prevState) {
    //     // only update chart if the data has changed
    //     if (prevState.submitted !== this.state.submitted) {
    //         this.setState({
    //             submitted: false
    //         })
    //     }
    // }
    onSubmit = (event) => {
        // console.log("event", event);
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, { user: this.state.user, term: this.state.term, image: faker.image.avatar() }]
        });
        console.log("submit", this.state.items)
    }
    render() {
        const form = {
            paddingLeft: "25%",
            paddingRight: "25%",
            paddingTop: "1%",
        };
        return (
            <div style={form}>
                <form onSubmit={this.onSubmit}>
                    <Input placeholder="user name" value={this.state.user} onChange={this.onChange} name="user" />
                    <p></p>
                    <TextArea placeholder="say someting" value={this.state.term} onChange={this.onChange} name="term" >text</TextArea>
                    <div style={{ paddingTop: "20px" }}>
                        <Button type="danger" htmlType="submit" size={"20px"}>Submit</Button>
                    </div>
                </form>
                <TimeLine items={this.state.items} />
            </div >
        );
    }
}
export default Post;