import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Login extends Component {
    render() {
        return (
            <div>
                <form >
                    用户名：
                    <input id="name" name="name" type="text"/><br />
                    密 码：
                    <input id="password" name="password" type="password"  /><br />
                    <Link to='main'><input id="login" type="submit" value="登录"/></Link>
                </form>
            </div>
        )}
}


