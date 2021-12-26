const moongose = require('mongoose');
import ngo from './subscriptions/ngo';
import open_source from './subscriptions/open_source';
import political from './subscriptions/political';
import products from './subscriptions/products';
import streaming from './subscriptions/streaming';

const subscriptionSchema = new moongose.Schema({
    streaming: {
        type: streaming,
        ref: 'Streaming',
        required: true,
    },
    legacy_media: {
        type: open_source,
        ref: 'LegacyMedia',
        required: true,
    },
    ngo: {
        type: ngo,
        ref: 'Ngo',
        required: true,
    },
    open_source: {
        type: open_source,
        ref: 'OpenSource',
        required: true,
    },
    political: {
        type: political,
        ref: 'Political',
        required: true,
    },
    products: {
        type: products,
        ref: 'Product',
        required: true,
    }
}, { timestamps: true });

module.exports = moongose.model('Subscription', subscriptionSchema);