var Alexa = require('alexa-sdk');

const APP_ID = undefined;

const skillData = [
    {
        state: "ALABAMA",
        food: "The food that ALABAMA is known for is cheese grits!"
    },
    {
        state: "ALASKA",
        food: "The food that ALASKA is known for is salmon!"
    },
    {
        state: "ARIZONA",
        food: "The food that ARIZONA is known for is mexican food!"
    },
    {
        state: "ARKANSAS",
        food: "The food that ARKANSAS is known for is cheese dip!"
    },
    {
        state: "CALIFORNIA",
        food: "The food that CALIFORNIA is known for is IN-N-OUT!"
    },
    {
        state: "COLORADO",
        food: "The food that COLORADO is known for is Beef Enchiladas"
    },
    {
        state: "CONNECTICUT",
        food: "The food that CONNECTICUT is known for is new haven pizza!"
    },
    {
        state: "DELAWARE",
        food: "The food that DELAWARE is known for is chicken!"
    },
    {
        state: "FLORIDA",
        food: "The food that FLORIDA is known for is cuban food!"
    },
    {
        state: "GEORGIA",
        food: "The food that GEORGIA is known for is peach cobbler!"
    },
    {
        state: "HAWAII",
        food: "The food that HAWAII is known for is spam!"
    },
    {
        state: "IDAHO",
        food: "The food that IDAHO is known for is potatoes!"
    },
    {
        state: "ILLINOIS",
        food: "The food that ILLINOIS is known for is meat!"
    },
    {
        state: "INDIANA",
        food: "The food that INDIANA is known for is sugar cream pie!"
    },
    {
        state: "IOWA",
        food: "The food that IOWA is known for is corn on the cob!"
    },
    {
        state: "KANSAS",
        food: "The food that KANSAS is known for is bread!"
    },
    {
        state: "KENTUCKY",
        food: "The food that Kentucky is known for is fried chicken!"
    },
    {
        state: "LOUISIANA",
        food: "The food that LOUISIANA is known for is crawfish!"
    },
    {
        state: "MAINE",
        food: "The food that MAINE is known for is lobster!"
    },
    {
        state: "MARYLAND",
        food: "The food that MARYLAND is known for is crab!"
    },
    {
        state: "MASSACHUSETTS",
        food: "The food that MASSACHUSETTS is known for is clam chowder!"
    },
    {
        state: "MICHIGAN",
        food: "The food that MICHIGAN is known for is cherries!"
    },
    {
        state: "MINNESOTA",
        food: "The food that MINNESOTA is known for is tater tots!"
    },
    {
        state: "MISSISSIPPI",
        food: "The food that MISSISSIPPI is known for is biscuits and gravy!"
    },
    {
        state: "MISSOURI",
        food: "The food that MISSOURI is known for is barbecue!"
    },
    {
        state: "MONTANA",
        food: "The food that MONTANA is known for is rocky mountain oysters!"
    },
    {
        state: "NEBRASKA",
        food: "The food that NEBRASKA is known for is runzas!"
    },
    {
        state: "NEVADA",
        food: "The food that NEVADA is known for is buffet!"
    },
    {
        state: "NEW HAMPSHIRE",
        food: "The food that NEW HAMPSHIRE is known for is cider doughnuts!"
    },
    {
        state: "NEW JERSEY",
        food: "The food that NEW JERSEY is known for is cider salt water taffy!"
    },
    {
        state: "NEW MEXICO",
        food: "The food that NEW MEXICO is known for is green chiles!"
    },
    {
        state: "NEW YORK",
        food: "The food that NEW YORK is known for is bagels!"
    },
    {
        state: "NORTH CAROLINA",
        food: "The food that NORTH CAROLINA is known for is pork barbecue!"
    },
    {
        state: "NORTH DAKOTA",
        food: "The food that NORTH DAKOTA is known for is bison burger!"
    },
    {
        state: "NORTH CAROLINA",
        food: "The food that NORTH CAROLINA is known for is pork barbecue!"
    },
    {
        state: "OHIO",
        food: "The food that OHIO is known for is buckeyes!"
    },
    {
        state: "OKLAHOMA",
        food: "The food that OKLAHOMA is known for is chicken fried steak!"
    },
    {
        state: "OREGON",
        food: "The food that OREGON is known for is Marionberry Pie!"
    },
    {
        state: "PENNSYLVANIA",
        food: "The food that PENNSYLVANIA is known for is cheesesteak!"
    },
    {
        state: "RHODE ISLAND",
        food: "The food that RHODE ISLAND is known for is clam cakes!"
    },
    {
        state: "SOUTH CAROLINA",
        food: "The food that SOUTH CAROLINA is known for is sweet tea!"
    },
    {
        state: "SOUTH DAKOTA",
        food: "The food that SOUTH DAKOTA is known for is kuchen!"
    },
    {
        state: "TENNESSEE",
        food: "The food that TENNESSEE is known for is hot chicken!"
    },
    {
        state: "TEXAS",
        food: "The food that TEXAS is known for is tex mex!"
    },
    {
        state: "UTAH",
        food: "The food that UTAH is known for is jello!"
    },
    {
        state: "VERMONT",
        food: "The food that VERMONT is known for is maple syrup!"
    },
    {
        state: "VIRGINIA",
        food: "The food that VIRGINIA is known for is apples!"
    },
    {
        state: "WASHINGTON",
        food: "The food that WASHINGTON is known for is pho!"
    },
    {
        state: "WEST VIRGINIA",
        food: "The food that WEST VIRGINIA is known for is pepperoni roll!"
    },
    {
        state: "WISCONSIN",
        food: "The food that WISCONSIN is known for is cheese!"
    },
    {
        state: "WYOMING",
        food: "The food that WYOMING is known for is beef jerky!"
    },
];

var handlers = {
    'LaunchRequest': function(){
        this.emit(':ask', 'I can tell you what food a state is known for. What state would you like to know?', 'Tell me a state name and I will tell you the food their are most known for.');
    },
    'StatesFood': function(){
        var stateSlot = this.event.request.intent.slots.state.value;
        this.emit(':tell', getFood(skillData, 'state', stateSlot.toUpperCase()).food)
    },
    'Unhandled': function(){
        this.emit(':tell', 'Sorry, I don\'t know what to do');
    },
    'AMAZON.HelpIntent': function(){
        this.emit(':ask', 'What can I help you with?', 'How can I help you?');
    },
    'AMAZON.CancelIntent': function(){
        this.emit(':tell', 'Okay!');
    },
    'AMAZON.StopIntent': function(){
        this.emit(':tell', 'Goodbye!');
    },
};

exports.handler = function(event,context){
    var alexa = Alexa.handler(event,context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

function getFood(data, propName, propValue){
    for(var i=0; i<data.length; i++){
        if(data[i][propName]==propValue){
            return data[i];
        }
    }
};