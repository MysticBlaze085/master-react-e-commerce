import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapToStateProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
});
// chains functions together
const CollectionsOverviewContainer = compose(connect(mapToStateProps), WithSpinner)(CollectionsOverview);

export default CollectionsOverviewContainer;
