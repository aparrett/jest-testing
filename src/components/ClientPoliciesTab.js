import React, { Component } from 'react';

class ClientPoliciesTab extends Component {
    renderPolicies() {
        return this.props.policies.map(p => <li key={p.id}>{p.number}</li>);
    }

    render() {
        return (
            !this.props.policies
                ? <div>No policies found.</div>
                :   <ul>
                        { this.renderPolicies() }
                    </ul>
        );
    }
};


export default ClientPoliciesTab;