export const getReviews = `query NewQuery {
  allRivaRaftingRecenzije {
    edges {
      node {
        id
        raftingRecenzijeFields {
          imeMusterije
          poveznicaNaRecenziju
          tekstRecenzijeEn
          tekstRecenzijeHr
        }
      }
    }
  }
}`;
