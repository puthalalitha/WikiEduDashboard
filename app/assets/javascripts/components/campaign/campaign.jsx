// /* eslint no-undef: 2 */
// import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import React from 'react';
import createReactClass from 'create-react-class';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CampaignNavbar from '../common/campaign_navbar.jsx';
import { getCampaign } from '../../actions/campaign1_actions';
// import CampaignHome from './campaign_home.jsx';
// import CampaignAlerts from '../alerts/campaign_alerts.jsx';
// import CampaignOresPlot from './campaign_ores_plot.jsx';
// import CampaignPrograms from './campaign_programs.jsx';
// import CampaignArticles from './campaign_articles.jsx';
// import CampaignEditors from './campaign_editors.jsx';


export const Campaign = createReactClass({
  displayName: 'Campaign',

  propTypes: {
    campaign: PropTypes.object.isRequired,
    match: PropTypes.object,
  },

  componentDidMount() {
    const campaignSlug = this.props.match.params.slug;
    return this.props.getCampaign(campaignSlug);
  },

  render() {
    if (!this.props.campaign.uploads_in_use_count) {
      return <div />;
    }
    return (
      <div>
        <CampaignNavbar
          campaign={this.props.campaign}
        />
        {/* <Switch>
          <Route exact path={`/campaigns/${this.props.campaign.slug}/overview`} render={() => <CampaignHome {...this.props} />} />
          <Route exact path={`/campaigns/${this.props.campaign.slug}/programs`} render={() => <CampaignPrograms {...this.props} />} />
          <Route exact path={`/campaigns/${this.props.campaign.slug}/articles`} render={() => <CampaignArticles {...this.props} />} />
          <Route exact path={`/campaigns/${this.props.campaign.slug}/users`} render={() => <CampaignEditors {...this.props} />} />
          <Route exact path={`/campaigns/${this.props.campaign.slug}/ores_plot`} component={CampaignOresPlot} />
          <Route exact path={`/campaigns/${this.props.campaign.slug}/alerts`} component={CampaignAlerts} />
        </Switch> */}
      </div >
    );
  }
});

const mapStateToProps = state => ({
  campaign: state.campaign,
});

const mapDispatchToProps = {
  getCampaign
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Campaign));
