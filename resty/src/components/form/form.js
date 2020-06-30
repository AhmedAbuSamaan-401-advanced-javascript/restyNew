import React from 'react';
import './form.scss';
var method = "get";
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { words: '', url: '', method: '' };
    }
    handleChange = (e) => {
        const url = e.target.value;
        this.setState({ url });
    };
    handleClick = (e) => {
        const words = this.state.url;
        this.setState({ words, method });
    };
    methodHandler = (e) => {
        method = e.target.value;
    }

    render() {
        return (
            <main className="main">
                <div>
                    <p id="url">URL :</p>
                    <input type="text" onChange={this.handleChange} />
                    <button onClick={this.handleClick}>GO!</button>
                </div>
                <form onClick={this.methodHandler}>
                    <input type="radio" id="get" name="method" value="get" />
                    <label for="get">Get</label>
                    <input type="radio" id="post" name="method" value="post" />
                    <label for="post">Post</label>
                    <input type="radio" id="put" name="method" value="put" />
                    <label for="put">Put</label>
                    <input type="radio" id="delete" name="method" value="delete" />
                    <label for="delete">Delete</label>
                </form>
                <div id="output">
                    <p>{this.state.method} {this.state.words}</p>
                </div>
            </main>
        );
    }
}

export default Main;