/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Tutorial.Application',

    name: 'Tutorial',

    requires: [
        // This will automatically load all classes in the Tutorial namespace
        // so that application classes do not need to require each other.
        'Tutorial.*'
    ],

    // The name of the initial view to create.
    mainView: 'Tutorial.view.main.Main'
});
