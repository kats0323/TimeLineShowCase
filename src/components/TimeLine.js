import React, { Component } from "react"
import { Card } from "antd";
class TimeLine extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const words = this.props.items;
        const image = this.props.image
        console.log(words)
        const listItem = words.map((word) =>
            <div style={{ paddingLeft: '220px', paddingTop: "20px" }
            }>
                <Card bordered={false} style={{
                    width: 300, background: "black",
                    color: "red",
                    border: "1px solid red",
                    borderRadius: "10px"

                }}>
                    <img alt="avatar" src={word.image} />
                    <div className="name-size">Name</div>
                    <p key={word} className="user-name">{word.user}</p>
                    <div className="name-size">Text</div>
                    <p key={word} className="user-text">{word.term}</p>
                </Card>
            </div >
        )
        listItem.reverse();
        return (
            <div >
                {listItem}
            </div >
        );
    }
}
export default TimeLine;