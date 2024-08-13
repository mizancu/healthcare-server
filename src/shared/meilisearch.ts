import { MeiliSearch } from 'meilisearch';

const meiliClient = new MeiliSearch({
  host: 'https://ms-9141220d1725-12237.sgp.meilisearch.io',
  apiKey: '19111d81fbd9731bed970c5861922e275c6edb33',
});
//const meiliClient = new MeiliSearch({
//host: 'http://localhost:7700',
//apiKey: 'aSampleMasterKey',
//});

export default meiliClient;
//https://ms-9141220d1725-12237.sgp.meilisearch.io
//19111d81fbd9731bed970c5861922e275c6edb33
