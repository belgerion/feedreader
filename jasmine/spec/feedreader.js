/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Copied from the content included with the RSS Feeds, and modified to include a check to insure that the url is not empty. Loops through the URLs to make sure they exist and have some content.*/
        it('has urls', function(){
            for(var i in allFeeds){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

         /* Also copied from the content included with the RSS Feed and modified to include a check to insure that the name is not empty. Loops through the names to make sure they exist and have some content.*/
         it('has name', function(){
            for(var i in allFeeds){
                expect(allFeeds[i].name).not.toEqual(jasmine.any(Number));
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });

    /* Modeled after the RSS Feeds. Added the variable to pull the value into JS so that Jasmine can run on it.*/
    describe('The menu', function(){
        var body = $('body');

         /* Copied from the content included with the RSS Feeds. Loops through to make sure the body has some content and that the content is set to hidden by default.*/
         it('The menu is initially hidden on page load', function(){
            expect(body.length).not.toBe(0);
            expect(body.hasClass('menu-hidden')).toBe(true);
         });

          /* Sets up the visibility of the menu and tests that it will show and hide when clicked, based on the trigger assigned to the menu in the HTML*/
          it('show/hide', function(){
            var menu = $('.menu-icon-link');
            menu.trigger('click');
            expect(body.hasClass('menu-hidden')).not.toBe(true);
            menu.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
          });

    });

    /* Copied from the RSS Feeds.*/
    describe("Initial Entries", function(){

         /* Loads the feed, then tests that it has content, and calls the done function when complete*/
         beforeEach(function(done){
            loadFeed(0, done);
         });
         it('feed has loaded', function(){
            expect($('.feed').length).toBeGreaterThan(0);
         });
    });

    /* Copied from the RSS Feeds*/
    describe("New Feed Selection", function(){
        var oldFeed;
        var newFeed;

        /* Changes the feeds based on the selection on the menu. Tests that each feed has content different from the previous feeds*/
        beforeEach(function(done){
            oldFeed = $('.feed').html();
            loadFeed(1, done);
        });
        it('Loading a new feed changes feed content', function(){
            newFeed = $('.feed').html()
            expect(newFeed).not.toEqual(oldFeed);
        });
        afterEach(function(done){
            loadFeed(0, done);
        });
    });
}());
