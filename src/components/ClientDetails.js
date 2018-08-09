import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClient } from '../actions';
import { Link, Route } from 'react-router-dom';
import ClientPoliciesTab from './ClientPoliciesTab';

class ClientDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchClient(id);
  }

  render() {
    const { client, match } = this.props;

    if (!client) {
      return <div>Client not found.</div>;
    }

    return (
      <div>
        <h1>Client: {client.name}</h1>
        <Link to={`${match.url}/policies`}>Policies</Link>
        <Route path={`${match.url}/policies`} render={(props) => <ClientPoliciesTab {...props} policies={client.policies} />} />
      </div>
    );
  }
};

function mapStateToProps({ clients }, ownProps) {
  return { client: clients[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchClient })(ClientDetails);