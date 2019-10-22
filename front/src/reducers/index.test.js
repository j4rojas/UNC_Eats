describe('addComment', () => {
    it('Should add new comments', () => {
        let state = {
            locations: [location1, location2]
        };
        state = uncReducer(state, addComment(comment1Text, 0));
        state = uncReducer(state, addComment(comment2Text, 1));
        state = uncReducer(state, addComment(comment3Text, 1));
        expect(state).toEqual({
            locations: [{
                title: location1Title,
                comments: [comment1]
            }, {
                title: location2Title,
                comments: [comment2, comment3]
            }]
        });
    });
});