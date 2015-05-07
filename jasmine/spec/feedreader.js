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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        /* Copied from the content included with the RSS Feeds, and modified to include a check to insure that the url is not empty. Loops through the URLs to make sure they exist and have some content.*/
        it('has urls', function(){
            for(var i in allFeeds){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         /* Also copied from the content included with the RSS Feed and modified to include a check to insure that the name is not empty. Loops through the names to make sure they exist and have some content.*/
         it('has name', function(){
            for(var i in allFeeds){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            };
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    /* Modeled after the RSS Feeds. Added the variable to pull the value into JS so that Jasmine can run on it.*/
    describe('The menu', function(){
        var body = $('body');

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         /* Copied from the content included with the RSS Feeds. Loops through to make sure the body has some content and that the content is set to hidden by default.*/
         it('hidden', function(){
            expect(body.length).not.toBe(0);
            expect(body.hasClass('menu-hidden')).toBe(true);
         });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          /* Sets up the visibility of the menu and tests that it will show and hide when clicked, based on the trigger assigned to the menu in the HTML*/
          it('show/hide', function(){
            var menu = $('.menu-icon-link');
            menu.trigger('click');
            expect(body.hasClass('menu-hidden')).not.toBe(true);
            menu.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
          });

    })

    /* TODO: Write a new test suite named "Initial Entries" */
    /* Copied from the RSS Feeds.*/
    describe("Initial Entries", function(){

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         /* Loads each feed in sequence, and checks that each feed has been defined. Calls the done function when complete*/
         beforeEach(function(done){
            loadFeed(0, done);
         });
         it('loaded', function(done){
            expect($('.feed')[0]).toBeDefined();
            done();
         });
    });
    /* TODO: Write a new test suite named "New Feed Selection"*/
    /* Copied from the RSS Feeds*/
    describe("New Feed Selection", function(){

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        /* Changes the feeds based on the selection on the menu. Tests that each feed has content different from the previous feeds*/
        beforeEach(function(done){
            loadFeed(1, done);
            this.feed = $('.feed')[0].innerHTML;
        });
        it('change', function(){
            this.newFeed = $('.feed')[0].innerHTML;
            expect(this.newFeed).not.toEqual(this.feed);
        });
    });
}());
