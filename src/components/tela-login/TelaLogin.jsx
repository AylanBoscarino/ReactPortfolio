import React from 'react';
import 'bulma';
export default function TelaLogin(props) {
    return (
        <form className="box">
            <div className="field has-text-centered">
                <h3 className="title">Login</h3>
                <h3 className="subtitle">It's nice to see you again</h3>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                    <input
                        type="email"
                        className="input"
                        placeholder="e.g. hkakehas@cisco.com"
                    />
                    <span className="icon is-small is-left">
                        <i className="fa fa-envelope" />
                    </span>
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left">
                    <input
                        type="password"
                        className="input"
                        placeholder="*********"
                        required
                    />
                    <span className="icon is-small is-left">
                        <i className="fa fa-lock" />
                    </span>
                </div>
            </div>
            <div className="field">
                <button className="button is-success">Login</button>
            </div>
        </form>
    );
}
