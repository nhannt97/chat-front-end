require('./style.css');
var chatApp = angular.module('chatApp', []);
var chatModule = 'chatModule';
chatApp.component(chatModule, {
    template: require('./index.html'),
    controller: Controller,
    controllerAs: chatModule
});
function Controller() {
    
}